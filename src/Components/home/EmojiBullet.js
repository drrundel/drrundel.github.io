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

<Grid container spacing={2} columnSpacing={0.5}>
  <Grid item xs={2}>
    <ItemIcon><i className={icon} aria-hidden="true"/></ItemIcon>
  </Grid>
    <Grid item spacing={0} xs={10}>
    <Item>{text}</Item>
  </Grid>
</Grid>
    );
}

export default EmojiBullet;