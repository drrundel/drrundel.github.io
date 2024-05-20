import React from 'react';
import { Modal, Box, Typography, Button, LinearProgress } from '@mui/material';
import Style from './Explorer.module.scss'
import {Info, Pending, Lock} from "@mui/icons-material";
import ModalTagGenerator from "./ModalTagGenerator";



const FolderModal = ({ open, onClose, project }) => {
    let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    function darkModeColors(t = "l") {
        if (detectedDarkMode) {
            if (t === "bg") {
                return "#8e8e8e"
            }
            else {
                return "white"
            }
        }
        else {
            if (t === "bg") {
                return "white"
            }
            else {
                return "#424040"
            }
        }
    }

    const modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: darkModeColors("bg"),
        color: darkModeColors(),
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    }

  const barColor = project.percentComplete === 100 ? 'success' : 'warning';
        return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="folder-modal-title"
      aria-describedby="folder-modal-description"
    >
      <Box
        sx={modalStyle}
      >
        <Typography variant="h5" id="folder-modal-title" gutterBottom>
          {project.title}
        </Typography>

        <img src={project.image} alt={project.title} style={{maxWidth: '800px', maxHeight: '600px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}}/>
          <ModalTagGenerator tags={project.usedTech} bgcolor={darkModeColors()} fontcolor={darkModeColors('bg')}/>
            <Typography variant="body1" id="folder-modal-description">
          Project Status:
        </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LinearProgress
            variant="determinate"
            value={project.percentComplete}
            sx={{
              flexGrow: 1,
              mr: 1,
              borderRadius: '5px', // Add border radius if needed
            }}
            color={barColor}
          />
          <Typography variant="body2" color="textSecondary">
            {`${Math.round(project.percentComplete)}%`}
          </Typography>
        </Box>
                  <Typography variant="body1" id="folder-modal-description">
          {/* Add project details or content here */}
                      {project.description}
        </Typography>
        {/* Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
{project.source !== "Coming Soon..." && project.source !== "Restricted from Sharing" ? (
  <Button
    variant="contained"
    color="primary"
    className={Style.button}
    startIcon={<Info />}
    href={project.source} // Link to the resume PDF file
    target="_blank" // Open the link in a new tab
  >
    More Details
  </Button>
) : project.source === "Coming Soon..." ? (
  <Button
    variant="contained"
    color="primary"
    className={Style.buttoncs}
    startIcon={<Pending />}
    target="_blank" // Open the link in a new tab
  >
    Coming Soon
  </Button>
) : project.source === "Restricted from Sharing" ? (
  <Button
    variant="contained"
    color="primary"
    className={Style.buttonlock}
    startIcon={<Lock />}
    target="_blank" // Open the link in a new tab
  >
    Restricted from Sharing
  </Button>
) : null}

          </Box>
      </Box>
    </Modal>
  );
};

export default FolderModal;