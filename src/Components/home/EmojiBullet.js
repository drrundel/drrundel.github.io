import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';




function EmojiBullet(props) {
    const {icon, text, darkMode} = props;
    const Item = styled(Box)(({ theme }) => ({
    elevation: 0,
    fontSize: '2.5vh',
  padding: '0.5vh',
        paddingLeft: '2vh',
  textAlign: 'left',
  color: !darkMode ? '#000000' : '#fff',
    backgroundOpacity: 1
}));
    const ItemIcon = styled(Box)(({ theme }) => ({
    elevation: 0,
    fontSize: '3.0vh',
  padding: '0.5vh',
  textAlign: 'left',
  color: !darkMode ? '#000000' : '#fff',
    backgroundOpacity: 1
}));

    return (

        <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{cursor: 'default'}}>
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{icon}</Box> {text}
        </Box>
    );
}

export default EmojiBullet;