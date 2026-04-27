import React, {useState} from 'react';
import Style from "./Explorer.module.scss";
import classNames from "classnames";
import {Box, Divider, Typography} from '@mui/material';
import {
    AccountTree,
    Apps,
    Brightness1,
    FileDownload,
    Folder,
    KeyboardArrowLeft,
    KeyboardArrowRight,
    Schedule,
    Star,
    WebAsset, CalendarViewWeek,
    Window, VerticalSplit, ViewQuilt, GroupWork
} from "@mui/icons-material";
import FolderDisplay from "./FolderDisplay";
import ExplorerTagMobile from "./ExplorerTagMobile";

const iconClass = "fa fa-circle";
const textColorExplorer = '#edecec'
const selectedColor = "#8c8c8c"
const backgroundExplorer = "#555555"
const styleIcon = {
  color: textColorExplorer,
  fontSize: '1.25rem',
  marginRight: '5px',
    '&:hover': {
      color: '#8c8c8c',
    }
};
const topBarIcon = {
      color: textColorExplorer,
  fontSize: '1.3rem',
  marginRight: '0.25rem',
    marginLeft: '5px',
    '&:hover': {
      color: '#8c8c8c',
    }
}
const styleIconNoHover = {
  color: textColorExplorer,
  fontSize: '1.25rem',
  marginRight: '5px',
};
function tagIcon(color) {
    return {color: color, fontSize: '1rem', marginRight: '5px'}
}

export const tagArray = [{name: 'All', color: '#ba5e5e'}, {name: 'Work', color: '#74915d'}, {name: 'Undergraduate', color: '#c593cd'}, {
        name: 'Graduate',
        color: '#efd373'
    }, {name: 'Personal', color: '#5fb5b6'}]

function Explorer({data}) {
    const [mode, setMode] = useState('Projects'); // 'Projects' | 'Favorites'
    const [tagDisplay, setTagDisplay] = useState(tagArray[0].name);

    const handleModeClick = (newMode) => {
        setMode(newMode);
        setTagDisplay(tagArray[0].name); // reset tag to All on mode switch
    };

    const handleClick = (newValue) => {
        setTagDisplay(newValue);
    };
      const isMid = window.innerWidth < 990;
        const isMobile = window.innerWidth < 500;

    return (
<Box
  component="section"
  className={classNames(Style.terminal, Style.shadowed)}
  sx={{
    width: { xs: '90%', md: '70%' },
    maxWidth: '1200px',
    borderRadius: '0.5rem',
    mb: '4rem',
  }}
>
  <Box
    display="flex"
    sx={{ backgroundColor: '#34303e', borderRadius: '0.5rem' }}
  >
    {/* Left Box with Sections */}
      {!isMobile &&
    <Box
      sx={{
        backgroundColor: backgroundExplorer,
        p: '1rem',
        pr: '2rem',
        borderRight: 'solid 2px black',
        width: '25%',
        borderRadius: '0.5rem 0 0 0.5rem',
      }}
    >
      <Box sx={{ mt: '-10px', ml: '-10px', pb: '20px', fontSize: '1rem' }}>
        <i className={classNames(iconClass, Style.gray)} />
        <i className={classNames(iconClass, Style.gray)} />
        <i className={classNames(iconClass, Style.gray)} />
      </Box>
      {/* Folders Section */}
      <Typography
        variant="h6"
        sx={{ mb: '0.5rem', color: textColorExplorer, fontWeight: '900', fontSize: '1rem' }}
      >
        Folders
      </Typography>

      {/* Favorites — clickable mode toggle */}
      <Box
        onClick={() => handleModeClick('Favorites')}
        className={mode === 'Favorites' ? Style.tagEntryselected : Style.tagEntry}
        sx={{ display: 'flex', alignItems: 'center', mb: '0.1rem' }}
      >
        <Star sx={{ color: '#f5c842', fontSize: '1.25rem', marginRight: '5px' }} />
        <Typography variant="body1" sx={{ ml: '0.1rem', fontSize: '10pt' }}>Favorites</Typography>
      </Box>

      <Divider sx={{ my: '0.5rem', borderColor: 'rgba(255,255,255,0.15)' }} />

      {/* Other folders — decorative + Projects as mode toggle */}
      {[
        { name: 'Recents',      logo: <Schedule sx={styleIcon}/> },
        { name: 'Applications', logo: <Apps sx={styleIcon}/> },
        { name: 'Desktop',      logo: <WebAsset sx={styleIcon}/> },
        { name: 'Projects',     logo: <AccountTree sx={styleIconNoHover}/> },
        { name: 'Documents',    logo: <Folder sx={styleIcon}/> },
        { name: 'Downloads',    logo: <FileDownload sx={styleIcon}/> },
      ].map((item) => (
        <Box
          key={item.name}
          onClick={item.name === 'Projects' ? () => handleModeClick('Projects') : undefined}
          className={item.name === 'Projects'
            ? (mode === 'Projects' ? Style.tagEntryselected : Style.tagEntry)
            : undefined}
          sx={{ display: 'flex', alignItems: 'center', mb: '0.1rem' }}
        >
          {item.logo}
          <Typography variant="body1" sx={{ ml: '0.1rem', fontSize: '10pt' }}>
            {item.name}
          </Typography>
        </Box>
      ))}

      {/* Tags Section */}
      <Typography
        variant="h6"
        sx={{ mt: '1rem', mb: '0.5rem', color: textColorExplorer, fontWeight: '900', fontSize: '1rem' }}
      >
        Tags
      </Typography>
    <Box sx={{ pb: '4rem' }}>
      {tagArray.map((item, index) => (
        <Box
          key={index}
          className={tagDisplay === item.name ? Style.tagEntryselected : Style.tagEntry}
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: '0.1rem',
          }}
          onClick={() => handleClick(item.name)}
        >
            {index === 0 ? <GroupWork sx={{color: textColorExplorer, fontSize: '1rem', marginRight: '5px'}} /> : <Brightness1 sx={tagIcon(item.color)} />}
          <Typography variant="body1" sx={{ ml: '0.1rem', fontSize: '10pt' }}>
            {item.name}
          </Typography>
        </Box>
      ))}
    </Box>
    </Box>
}
    {/* Main Content Area */}
    <Box sx={{ flex: 1 }}>
      <Box
        sx={{
          backgroundColor: backgroundExplorer,
          p: '0.75rem',
          borderBottom: 'solid 2px black',
          borderRadius: '0.5rem 0.5rem 0 0',
          boxSizing: 'border-box',
        }}
      >
          {isMobile &&
              <Box sx={{ mt: '-5px', ml: '-10px', pb: '5px', fontSize: '1rem'}}>
        <i className={classNames(iconClass, Style.gray)} />
        <i className={classNames(iconClass, Style.gray)} />
        <i className={classNames(iconClass, Style.gray)} />
      </Box>}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: '0.1rem' }}>
          <KeyboardArrowLeft sx={topBarIcon} />
          <KeyboardArrowRight sx={topBarIcon} />
          <Typography variant="h3" sx={{ ml: '2rem', fontSize: '12pt' }}>
            Projects
          </Typography>
            {!isMobile &&
            <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
                         <Window
            sx={{
              color: textColorExplorer,
              fontSize: '1.5rem',
              borderRadius: '4px',
              backgroundColor: selectedColor,
              mr:2, // Ensure this is the first icon pushed to the far right
            }}
          />
            {isMid ? (
  <VerticalSplit sx={{ ...topBarIcon, mr: 2 }} />
) : (
  <>
    <VerticalSplit sx={{ ...topBarIcon, mr: 2 }} />
    <CalendarViewWeek sx={{ ...topBarIcon, mr: 2 }} />
    <ViewQuilt sx={{ ...topBarIcon }} />
  </>
)}
</Box>
            }
        <ExplorerTagMobile isMobile={isMobile} tagArray={tagArray} topBarIcon={topBarIcon}
      tagDisplay={tagDisplay}
      setTagDisplay={setTagDisplay}
        textColorExplorer={textColorExplorer}
        tagIcon={tagIcon}/>
        </Box>
      </Box>
      <Box
        sx={{
          py: { xs: '1rem', md: '1rem' },
          px: { xs: '1rem', md: '1rem' },
          fontSize: '1rem',
          fontFamily: 'Courier New, Courier, monospace',
          color: 'white',
        }}
      >
        <FolderDisplay projects={data} tag={tagDisplay} mode={mode}/>
      </Box>
    </Box>
  </Box>
</Box>

    );
}

export default Explorer;