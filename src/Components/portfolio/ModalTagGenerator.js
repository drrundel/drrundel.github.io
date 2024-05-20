import React from 'react';
import Chip from '@mui/material/Chip';
import {LocalOffer} from "@mui/icons-material";

const ModalTagGenerator = ({ tags, bgcolor, fontcolor }) => {
  if (!tags || !tags.length) {
    return null;
  }

  const tagList = tags.split(',').map(tag => tag.trim());
  const tagStyle = {
    color: fontcolor + "!important"
  }

  return (
    <div>
      {tagList.map((tag, index) => (
        <Chip key={index} icon={<LocalOffer sx={tagStyle}/>} label={tag} style={{color: fontcolor, backgroundColor: bgcolor, margin: '5px', border: "solid 2px" }}/>
      ))}
    </div>
  );
};

export default ModalTagGenerator;