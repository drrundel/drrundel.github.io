import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Folder, Star } from '@mui/icons-material/';
import FolderModal from './FolderModal';
import {tagArray} from "./Explorer"

export const getColorByName = (name) => {
  const tag = tagArray.find(tag => tag.name === name);
  return tag ? tag.color : null;
};

const getPortfolio = (mode, tag, projects) => {
    let pool = mode === 'Favorites'
        ? projects.portfolio.filter(p => p.favorite)
        : projects.portfolio;

    let filtered = tag === 'All' ? pool : pool.filter(p => p.category === tag);
    return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
};

const FolderDisplay = ({ projects, tag, mode = 'Projects' }) => {
    const portfolio = getPortfolio(mode, tag, projects);
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
            {portfolio.length === 0 && (
                <Typography variant="body2" sx={{ color: '#8c8c8c', p: '1rem', gridColumn: '1 / -1' }}>
                    {/*No favorites — add <code>favorite: true</code> to a project in Info.js.*/}
                </Typography>
            )}
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
                            '& svg': { color: getColorByName(project.category) },
                        },
                    }}
                    onClick={() => handleFolderClick(project)}
                >
                    <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        {project.icon}
                        <Folder sx={{ fontSize: '3rem', color: getColorByName(project.category) }} />
                        {project.favorite && (
                            <Star sx={{ position: 'absolute', top: -6, right: -6, fontSize: '0.85rem', color: '#f5c842' }} />
                        )}
                    </Box>
                    <Typography variant="body1" sx={{ mt: '0.5rem', fontSize: '0.875rem' }}>
                        {project.title}
                    </Typography>
                </Box>
            ))}
            <FolderModal open={openModal} onClose={handleCloseModal} project={selectedProject} />
        </Box>
    );
};

export default FolderDisplay;
