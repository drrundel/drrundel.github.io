import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {purple} from '@mui/material/colors';
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress sx={{
          color: ()=>(purple[200]),
        }} variant="determinate" {...props} />
        <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        </Box>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color={purple[200]}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function IconLink({ link, onClick, title, icon }) {
  return (
    <a href={link} onClick={(e) => { e.preventDefault(); onClick(); }} target="_blank" rel="noopener noreferrer">
        <i className={icon}></i> <span style={{paddingRight: '10px'}}>{title}</span>
    </a>
  );
}

export function IconNoLink({ status }) {
  return (
<div style={{ display: 'flex', alignItems: 'center'}}>
  <span style={{ marginLeft: '4px', marginRight: '10px' }}>{status !== 100 ? ("In Progress ") : ("Complete ")}</span>
    <CircularProgressWithLabel value={status} style={{marginLeft: '0px'}}/>
</div>
  );
}

export default IconLink;
