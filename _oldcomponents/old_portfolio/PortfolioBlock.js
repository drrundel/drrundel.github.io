import * as React from 'react';
import Box from '@mui/material/Box';
import IconLink, {IconNoLink} from './IconLink'; // Ensure this is the correct path to your IconLink component
import {purple} from '@mui/material/colors';

function backgroundColors() {
    let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

    if (detectedDarkMode) {
        return "#353434"
    }
    else {
        return ""
    }
}

function PortfolioBlock({ image, source, title, handleOpen, percentComplete}) {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
      <Box component="img" sx={{maxWidth: '300px', boxShadow: 2}} src={image} alt="mockup" />
      <h1 style={{ fontSize: '1.25rem', maxWidth: '50%', textAlign: 'center'}}>{title}</h1>
      <Box className="portfolio" display="flex" flexDirection="column" gap="0.5rem" alignItems="center" fontSize="1rem" py="2rem">
        <Box p={1} borderRadius="5px" sx={{ boxShadow: 2, alignItems: "center", backgroundColor:backgroundColors()}}>
             <IconNoLink link={source} icon="fa fa-tasks" status={percentComplete}/>
        </Box>
        <Box p={1} border="2px solid black" borderRadius="25px" sx={{ boxShadow: 2, alignItems: "center", backgroundColor:purple[100]}}>
          <IconLink onClick={handleOpen} link={source} title="Learn More" icon="fa fa-info-circle"/>
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;