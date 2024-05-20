import Box from '@mui/material/Box';
import IosShare from '@mui/icons-material/IosShare';
import Sell from '@mui/icons-material/Sell';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import Search from '@mui/icons-material/Search';
import { Select, MenuItem, Input } from '@mui/material';
import React from 'react';
import {Brightness1, GroupWork} from "@mui/icons-material";
import {purple} from "@mui/material/colors";

const ExplorerTagMobile = ({ isMobile, topBarIcon, tagArray, tagDisplay, setTagDisplay, textColorExplorer, tagIcon }) => {
  const handleTagChange = (event) => {
    setTagDisplay(event.target.value);
  };

  return (
    !isMobile ? (
      <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
        <IosShare sx={{ ...topBarIcon, mr: 2 }} />
        <Sell sx={{ ...topBarIcon, mr: 2 }} />
        <MoreHoriz sx={{ ...topBarIcon, mr: 2 }} />
        <Search sx={{ ...topBarIcon, mr: 2 }} />
      </Box>
    ) : (
      <Box sx={{ ml:'auto', display: 'inline-flex', alignItems: 'center' }}>
        <Select
          value={tagDisplay}
          onChange={handleTagChange}
          input={<Input />}
          sx={{ color: 'white',
              fontSize: '1em',
              minWidth: 120,'&:after': {
              borderBottom: '2px solid ' + purple[200],
                  '&:before': {
              borderBottom: '2px solid ' + purple[200], // Default underline color
            },
            '&:hover:not(.Mui-disabled):before': {
              borderBottom: '2px solid ' + purple[200], // Hover underline color
            }// Focused underline color
            },}}
        >
          {tagArray.map((tag, index) => (
            <MenuItem key={tag.name} value={tag.name}>
              {index === 0 ? <GroupWork sx={{color: textColorExplorer, fontSize: '1rem', marginRight: '5px'}} /> : <Brightness1 sx={{color: tag.color, fontSize: '1em', marginRight: '5px'}} />}
                {tag.name}
            </MenuItem>
          ))}
        </Select>
      </Box>
    )
  );
};

export default ExplorerTagMobile;
