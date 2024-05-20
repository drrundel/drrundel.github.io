import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PortfolioBlock from './PortfolioBlock'; // Ensure this is the correct path to your PortfolioBlock component
import { info } from '../../src/info/Info';
import PortfolioModal from "./PortfolioModal"; // Ensure this is the correct path to your info object

export default function Portfolio({ innerRef }) {
  const [openModal, setOpenModal] = React.useState(null);

  const handleOpen = (id) => setOpenModal(id);
  const handleClose = () => setOpenModal(null);

  return (
    <div>
      {info.portfolio.map((project, index) => (
        <PortfolioModal
          key={index}
          index={index}
          openModal={openModal}
          handleClose={handleClose}
          project={project}
        />
      ))}

      <Box id="portfolio" ref={innerRef} >
        <Grid container display="flex" justifyContent="center" >
          {info.portfolio.map((project, index) => (
            <Grid item xs={12} md={6} key={index} >
              <PortfolioBlock
                image={project.image}
                live={project.live}
                source={project.source}
                title={project.title}
                percentComplete={project.percentComplete}
                handleOpen={() => handleOpen(index)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
