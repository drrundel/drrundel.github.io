import React, {useState} from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { purple } from '@mui/material/colors';

import { Engineering, School, SportsHockey, Mood, WorkspacePremium } from '@mui/icons-material';
import {Typewriter} from "react-simple-typewriter";

const options = [
    {text:'About', icon: <Mood  sx={{ color: purple[100] }} />, checkedIcon: <Mood sx={{ color: purple[400] }} />},
    {text:'Education', icon: <School  sx={{ color: purple[100] }} />, checkedIcon: <School sx={{ color: purple[400] }} />},
    {text:'Work', icon: <Engineering  sx={{ color: purple[100] }} />, checkedIcon: <Engineering sx={{ color: purple[400] }} />},
    {text:'Skills', icon: <WorkspacePremium  sx={{ color: purple[100] }} />, checkedIcon: <WorkspacePremium sx={{ color: purple[400] }} />},
    {text:'Hobbies/Interests', icon: <SportsHockey  sx={{ color: purple[100] }} />, checkedIcon: <SportsHockey sx={{ color: purple[400] }} />}]

export default function About({innerRef}) {
    const [selectedValue, setSelectedValue] = useState(options[0].text);
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const firstName = info.firstName.toLowerCase()

    const blinkingCurserInTerminal = (dir, branch) => {
    return (
        <p>
            <span style={{ color: info.baseColor }}>{dir}
            <span className={Style.green}> ({branch})</span> $</span>
            <Typewriter
                words=' '
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={1000}
                deleteSpeed={1000}
                delaySpeed={500}
            />
        </p>
    );
};

    function functionCall(value) {
        if (value === 'About') {
            return <>
                {["main", "edu-branch", "work-branch", "life-branch"].map((branch, index) => (
                    <div key={index}>
                        <p>
                            <span style={{color: info.baseColor}}>{firstName} <span className={Style.green}>({branch})</span> $ </span>
                            <span className={Style.commandGreen}>git</span> checkout <span className={Style.green}>{branch} </span>
                            && <span className={Style.commandGreen}>cat</span> <span className={Style.gray}>about{firstName}.txt</span>
                        </p>
                        <p>{index === 0 ? info.bioMain : index === 1 ? info.bioEdu : index === 2 ? info.bioWork : info.bioLife}</p>
                    </div>
                ))}
                <div>{blinkingCurserInTerminal(firstName,'life-branch')}</div>
            </>;
        } else if (value === 'Work') {
            return <>
                {[info.work_GM_SW, info.work_GM_DRE, info.work_WI].map((workSection, index) => (
                    <div key={index}>
                        <p>
                            <span style={{color: info.baseColor}}>{firstName} <span
                                className={Style.green}>(main)</span> $</span><span
                            className={Style.commandGreen}> grep</span> -A{workSection.length} <span
                            className={Style.yellow}> "{workSection[0]}" </span>
                            <span className={Style.gray}>workhistory.txt</span>
                        </p>
                        <p><span className={Style.red}> {workSection[0]}</span> {workSection[1]}</p>
                        {workSection.slice(2).map((detail, index) => (
                            <p key={index} style={{lineHeight: '3vh'}}>{detail}</p>
                        ))}
                        <br/>
                    </div>
                ))}
                <div>{blinkingCurserInTerminal(firstName, 'main')}</div>

            </>

        } else if (value === 'Education') {
            return <>
                {[
                    {folder: 'MSE-GeorgiaTech', data: info.school.mse},
                    {folder: '../BSE-UniversityOfMichigan', data: info.school.bse}]
                    .map((section, index) => (
                        <div key={index}>
                            <p>
                                <span style={{color: info.baseColor}}>{firstName} <span
                                    className={Style.green}>(main)</span> $</span> <span
                                className={Style.commandGreen}>cd </span>
                                {section.folder}
                            </p>
                            <p>
                                <span style={{color: info.baseColor}}>{section.folder} <span
                                    className={Style.green}>(main)</span> $</span> <span
                                className={Style.commandGreen}>ls </span>
                            </p>
                            <ul className={Style.skills}>
                                {section.data.map((skill, index) => (
                                    <li key={index} className={skill.type === 'file' ? Style.schoolFile : ''}
                                        style={{color: skill.type !== 'file' ? '#00a47f' : ''}}>
                                        {skill.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                <div>{blinkingCurserInTerminal('../BSE-UniversityOfMichigan', 'main')}</div>
            </>;
        } else if (value === 'Skills') {
            return <>
                {[
                    {toolType: 'program_languages.txt', tools: info.skills.languages},
                    {toolType: 'frameworks.txt', tools: info.skills.frameworks},
                    {toolType: 'software_tools.txt', tools: info.skills.sw_tools},
                    {toolType: 'hardware_tools.txt', tools: info.skills.hw_tools}
                ].map((section, index) => (
                    <div key={index}>
                        <p>
                            <span style={{color: info.baseColor}}>{firstName} <span
                                className={Style.green}>(main)</span> $</span> <span
                            className={Style.commandGreen}>head </span> -{section.tools.length} <span
                            className={Style.gray}>{section.toolType}</span> | <span
                            className={Style.commandGreen}> paste </span> - - -
                        </p>
                        <ul className={Style.skillsThreeColumn}>
                            {section.tools.map((tool, index) => <li key={index}>{tool}</li>)}
                        </ul>
                    </div>
                ))}
                <div>{blinkingCurserInTerminal(firstName, 'main')}</div>

            </>;
        } else if (value === 'Hobbies/Interests') {
            return <>
                <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                    hobbies/interests</p>
                <p><span style={{color: info.baseColor}}>hobbies/interests <span
                    className={Style.green}>(main)</span> $</span> ls</p>
                <ul>
                    {info.hobbies.map((hobby, index) => (
                        <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                    ))}
                </ul>
                <div>{blinkingCurserInTerminal(firstName, 'main')}</div>

            </>;
        }
    }

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: {'aria-label': item},
    });

    return (
     <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
         <Box display="flex" justifyContent="center" paddingLeft={"3vh"} paddingRight={"3vh"}> {/* New container */}
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"

                >
                    {options.map(option => (
                        <FormControlLabel
                            key={option.text}
                            value={option.text}
                            className={Style.muiradio}
                            control={<Radio
                                icon={option.icon}
                                checkedIcon={option.checkedIcon}
                                {...controlProps(option.text)}
                                sx={{
                                    color: purple[400],
                                    '&.Mui-checked': {
                                        color: purple[600],
                                    },
                                }}/>}
                            label={option.text}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
         </Box>
     <br/>
            <Terminal text={functionCall(selectedValue)}/>
        </Box>

    )
}