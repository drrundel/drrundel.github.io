import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import ResumeButton from "../ResumeButton"
import { Typewriter } from 'react-simple-typewriter'
import ReactGA from "react-ga4";


export default function Home({innerRef}) {
    ReactGA.send({
        hitType: "pageview",
        page: "/",
        title: "Home"
    })


    let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    return (
        <Box sx={{pt: '2rem'}} ref={innerRef} component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}}
             alignItems={'center'}
             justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>
            <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'}
                 style={{background: info.gradient}} component={'img'} src={me} maxWidth={'500px'}  maxHeight={'500px'} width={{xs: '35vh', md: '40vh'}}
                 height={{xs: '35vh', md: '40vh'}}
                 borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
            <Box>
                <h1 className={Style.firstline}>Hey, I'm <span style={{WebkitBackgroundClip: 'text'}}>{info.firstName}</span><span
                    className={Style.hand}><i className={'fa fa-rocket ' + Style.gradient} aria-hidden="true"/></span>
                </h1>
                <h2 >I'm
                    <span className={Style.Typewriter}>
          {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={info.position}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
        </span> Engineer
                </h2>
                <Box component={'ul'} p={'0.8rem'}>
                    {info.miniBio.map((bio, index) => (
                        <EmojiBullet darkMode={detectedDarkMode} key={index} icon={bio.icon} text={bio.text}/>
                    ))}
                </Box>
                <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'}
                     fontSize={{xs: '2rem', md: '2.5rem'}}>
                {info.socials.map((social, index) => (
                        <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label}/>
                    ))}
                </Box>
                <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'}>
                    <ResumeButton topMargin={'2rem'}/>
                </Box>
            </Box>
        </Box>
    )
}