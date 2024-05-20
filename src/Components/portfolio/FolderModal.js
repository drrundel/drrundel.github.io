import React from 'react';
import {Box, Button, LinearProgress, Modal, Typography} from '@mui/material';
import Style from './Explorer.module.scss'
import IconButton from '@mui/material/IconButton';

import {Close, Info, Lock, Pending} from "@mui/icons-material";
import ModalTagGenerator from "./ModalTagGenerator";


const FolderModal = ({open, onClose, project}) => {
    let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

    function darkModeColors(t = "l") {
        if (detectedDarkMode) {
            if (t === "bg") {
                return "#8e8e8e"
            } else {
                return "white"
            }
        } else {
            if (t === "bg") {
                return "white"
            } else {
                return "#424040"
            }
        }
    }
    const isMobile = window.innerWidth < 500;

function modalStyle(isMobile) {
        return {
            top: '5%',
            left: !isMobile ? ('25%') : ('5%'),
            width: !isMobile ? ('50%') : ('90%'),
            maxWidth: '90%', // Adjust the maximum width as needed
            maxHeight: '80%', // Adjust the maximum height as needed
            backgroundColor: darkModeColors("bg"),
            color: darkModeColors(),
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            overflowY: 'scroll', // Enable vertical scrolling if content exceeds modal height
            overflowX: 'hidden'
        }
}

const boxStyle = {
  padding: '2rem',
  borderRadius: '8px',
    width: '100%',
    backgroundColor: darkModeColors("bg"),
};

    const barColor = project.percentComplete === 100 ? 'success' : 'warning';
    return (
   <Modal
      open={open}
      onClose={onClose}
      sx={modalStyle(isMobile)}
      aria-labelledby="folder-modal-title"
      aria-describedby="folder-modal-description"
    >
       <Box sx={boxStyle}>
           <IconButton
               edge="end"
               color="inherit"
               onClick={onClose}
               aria-label="close"
               sx={{position: 'absolute', top: 0, right: 10}}
           >
               <Close/>
           </IconButton>

           <Typography variant="h5" id="folder-modal-title" gutterBottom
                       sx={{p: '5px', borderRadius: '5px'}}>
               {project.icon} <span style={{marginLeft: '30px', fontWeight: 600}}>{project.title}</span>
           </Typography>
    <hr style={{marginBottom: '16px',}}/>
           <img src={project.image} alt={project.title} style={{
               // Add spacing between image and content
               maxWidth: '70%',
               height: 'auto',
               display: 'block',
               margin: '0 auto',
               marginBottom: '16px', // Add spacing between image and content
               borderRadius: '10px'
           }}/>
           <hr/>
           <Box sx={{ p: '5px', borderRadius: '5px'}}>
               <Typography variant="body1" id="folder-modal-description" gutterBottom sx={{fontWeight: 600}}>
                   Skills:
               </Typography>
               <ModalTagGenerator tags={project.usedTech} bgcolor={darkModeColors()} fontcolor={darkModeColors('bg')}/>
           </Box>
           <hr/>
           <Box sx={{mt: '10px', p: '5px', borderRadius: '5px'}}>
               <Typography variant="body1" id="folder-modal-description" gutterBottom sx={{fontWeight: 600}}>
                   Completion:
               </Typography>

               <Box sx={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
                   <LinearProgress
                       variant="determinate"
                       value={project.percentComplete}
                       sx={{
                           flexGrow: 1,
                           borderRadius: '5px', // Add border radius if needed
                       }}
                       color={barColor}
                   />
                   <Typography variant="body1" sx={{pl: '10px'}}>
                       {`${Math.round(project.percentComplete)}%`}
                   </Typography>
               </Box>
           </Box>
           <hr/>
           <Box sx={{mt: '10px', p: '5px', borderRadius: '5px'}}>
               <Typography variant="body1" id="folder-modal-description" gutterBottom sx={{fontWeight: 600}}>
                   Description:
               </Typography>
               <Typography variant="body1" sx={{}}>{project.description}</Typography>
           </Box>

           <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '16px'}}>
               {project.source !== "Coming Soon..." && project.source !== "Restricted from Sharing" ? (
                   <Button
                       variant="contained"
                       color="primary"
                       className={Style.button}
                       startIcon={<Info/>}
                       href={project.source} // Link to the source
                       target="_blank" // Open the link in a new tab
                   >
                       More Details
                   </Button>
               ) : project.source === "Coming Soon..." ? (
                   <Button
                       variant="contained"
                       color="primary"
                       className={Style.buttoncs}
                       startIcon={<Pending/>}
                   >
                       Coming Soon
                   </Button>
               ) : project.source === "Restricted from Sharing" ? (
                   <Button
                       variant="contained"
                       color="primary"
                       className={Style.buttonlock}
                       startIcon={<Lock/>}
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