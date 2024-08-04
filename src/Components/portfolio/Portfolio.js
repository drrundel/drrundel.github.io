import React from 'react';
import Explorer from "./Explorer";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import ResumeButton from "../ResumeButton"
import ReactGA from "react-ga4";


export default function Portfolio({innerRef}) {
    ReactGA.send({
            hitType: "pageview",
            page: "/portfolio",
            title: "Portfolio"
        })
    const CenteredBox = ({ children }) => (
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap" // Allow flex items to wrap
        alignItems="center" // Align items vertically in case of wrap
        margin="0 auto" // Center horizontally
        paddingLeft={"3vh"}
        paddingRight={"3vh"}
      >
        {children}
      </Box>
    );

    return (
        <Box
            ref={innerRef}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            mt={'3rem'}
            id={'about'}
        >
            <CenteredBox>
                <ResumeButton topMargin={'-1rem'}/>
            </CenteredBox>
            <Explorer data={info}/>
        </Box>
    );
};
