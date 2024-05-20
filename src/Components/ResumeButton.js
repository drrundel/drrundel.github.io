import {Button} from "@mui/material";
import {CloudDownload} from "@mui/icons-material";
import Style from './BaseLayout.module.scss';
import React from "react";

export default function ResumeButton({topMargin}) {
    return (
        <Button
            variant="contained"
            color="primary"
            className={Style.button}
            style={{marginTop: topMargin}}
            startIcon={<CloudDownload/>}
            href="/docs/Drake_Rundell_Resume.pdf" // Link to the resume PDF file
            target="_blank" // Open the link in a new tab
        >
            Download Resume
        </Button>
    )
}
