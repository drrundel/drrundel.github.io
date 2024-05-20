// ProjectModal.js
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ProjectModal({ index, openModal, handleClose, project }) {
  return (
    <Modal
      key={index}
      aria-labelledby={`transition-modal-title-${index}`}
      aria-describedby={`transition-modal-description-${index}`}
      open={openModal === index}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openModal === index}>
        <Box sx={style}>
          <Typography id={`transition-modal-title-${index}`} variant="h6" component="h2">
            {project.title}
          </Typography>
          <Typography id={`transition-modal-description-${index}`} sx={{ mt: 2 }}>
            {project.description}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ProjectModal;
