import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Folder } from '@mui/icons-material/';
import FolderModal from './FolderModal';
import {tagArray} from "./Explorer"

const getColorByName = (name) => {
  const tag = tagArray.find(tag => tag.name === name);
  return tag ? tag.color : null;
};
const getPortfolio = (tag, projects) => {
    let filteredPortfolio;
    if (tag === "All") {
        filteredPortfolio = projects.portfolio;
    } else {
        filteredPortfolio = projects.portfolio.filter(project => project.category === tag);
    }
    // Sort the filteredPortfolio array alphabetically by project title
    filteredPortfolio.sort((a, b) => a.title.localeCompare(b.title));

    return filteredPortfolio;
};
const FolderDisplay = ({ projects, tag }) => {
    const color = getColorByName(tag); // Example usage
    console.log(color)
    const portfolio = getPortfolio(tag, projects)
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(portfolio[0]);


  const handleFolderClick = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      {portfolio.map((project, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            '&:hover': {
              cursor: 'pointer',
              '& svg': {
                color: getColorByName(project.category),
              },
            },
          }}
          onClick={() => handleFolderClick(project)}
        >
            <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Overlap icon */}
                {project.icon}
              {/* Folder icon */}
              <Folder sx={{ fontSize: '3rem', color: getColorByName(project.category) }} />
            </Box>
          <Typography variant="body1" sx={{ mt: '0.5rem', fontSize: '0.875rem' }}>
            {project.title}
          </Typography>
        </Box>
      ))}
      {/* Render the modal */}
      <FolderModal open={openModal} onClose={handleCloseModal} project={selectedProject} />
    </Box>
  );
};

export default FolderDisplay;
