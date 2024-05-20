import React, {useState} from 'react';
import Style from "./Explorer.module.scss";
import classNames from "classnames";
import {Box, Typography} from '@mui/material';
import {
    AccountTree,
    Apps,
    Brightness1,
    FileDownload,
    Folder,
    KeyboardArrowLeft,
    KeyboardArrowRight,
    Schedule,
    WebAsset,
    Search, CalendarViewWeek, IosShare,
    Window, VerticalSplit, ViewQuilt, Sell, MoreHoriz, GroupWork
} from "@mui/icons-material";
import FolderDisplay from "./FolderDisplay";

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
    const favoritesArray = [{name: 'Recents', logo: <Schedule sx={styleIcon}/>, active: false}, {
        name: 'Applications',
        logo: <Apps sx={styleIcon}/>,
        active: false
    }, {name: 'Desktop', logo: <WebAsset sx={styleIcon}/>, active: false}, {
        name: 'Projects',
        logo: <AccountTree sx={styleIconNoHover}/>,
        active: true
    }, {name: 'Documents', logo: <Folder sx={styleIcon}/>, active: false}, {
        name: 'Downloads',
        logo: <FileDownload sx={styleIcon}/>,
        active: false
    }]

      const [tagDisplay, setTagDisplay] = useState(tagArray[0].name);

  const handleClick = (newValue) => {
    setTagDisplay(newValue);
    console.log(tagDisplay)
    console.log(newValue)
  };

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
      {/* Favorites Section */}
      <Typography
        variant="h6"
        sx={{ mb: '0.5rem', color: textColorExplorer, fontWeight: '900', fontSize: '1rem' }}
      >
        Favorites
      </Typography>
      <Box>
        {favoritesArray.map((item, index) => (
          <Box
            key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: '0.1rem',
                borderRadius: item.active ? '4px' : 'none',
                p: item.active ? '4px' : 'none',
                pr: item.active ? '4rem' : 'none',
                ml: item.active ? '-4px' : 'none',
                backgroundColor: item.active ? selectedColor : 'none',
              }}
          >
            {item.logo}
            <Typography
              variant="body1"
              sx={{
                ml: '0.1rem',
                fontSize: '10pt',
                ...(!item.active && {
                  '&:hover': {
                    color: '#8c8c8c',
                  },
                }),
              }}
            >
              {item.name}
            </Typography>

          </Box>
        ))}
      </Box>

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

    {/* Main Content Area */}
    <Box sx={{ flex: 1 }}>
      <Box
        sx={{
          backgroundColor: backgroundExplorer,
          p: '0.75rem',
          borderBottom: 'solid 2px black',
          borderRadius: '0 0.5rem 0 0',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: '0.1rem' }}>
          <KeyboardArrowLeft sx={topBarIcon} />
          <KeyboardArrowRight sx={topBarIcon} />
          <Typography variant="h3" sx={{ ml: '2rem', fontSize: '12pt' }}>
            Projects
          </Typography>
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
          <VerticalSplit sx={{ ...topBarIcon, mr: 2 }} />
          <CalendarViewWeek sx={{ ...topBarIcon, mr: 2 }} />
          <ViewQuilt sx={{ ...topBarIcon}} />
</Box>
  <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
                <IosShare sx={{ ...topBarIcon, mr: 2 }} />
          <Sell sx={{ ...topBarIcon, mr: 2 }} />
    <MoreHoriz sx={{ ...topBarIcon, mr: 2 }} />
    <Search sx={{ ...topBarIcon }} />
  </Box>
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
        <FolderDisplay projects={data} tag={tagDisplay}/>
      </Box>
    </Box>
  </Box>
</Box>

    );
}

export default Explorer;