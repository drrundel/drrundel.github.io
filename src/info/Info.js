import self from "../img/self.png"
import hotnotch from "../img/hotnotch.webp"
import blockchain from "../img/block.webp"
import busbar from "../img/isoview.jpg"
import nhlhorn_frontend_selector from "../img/siren_frontend.png"
import nhlhorn_full from "../img/siren_full.png"
import nhlhorn_frontend_admin from "../img/siren_admin.png"
import nhlhorn_early from "../img/nhlhorn.png"
import nhlhorn_pcb_nextto from "../img/sirenandpcb.png"
import nhlhorn_pcb_inside from "../img/pcb_inside.png"
import nhlhorn_diagram from "../img/nhlhorn_diagram.png"
import portfoliosite from "../img/portfoliosite.png"
import eccgroundtracks from "../img/eccgroundtracks.jpg"
import lander from "../img/animated_truss.gif"
import glueiso from "../img/glueiso.jpg"
import mirroreye from "../img/mirroreyesimulation.jpg"
import getfile from "../img/getfile.png"
import ipc from "../img/ipc.png"
import grpc from "../img/grpc.png"
import marketsim from "../img/marketsim.png"
import indicator from "../img/indicator.png"
import ml from "../img/ml.png"
import pcb_front from "../img/pcb_front.png"
import { purple } from '@mui/material/colors';
import {
    AddBusiness,
    Computer,
    Diamond, Inventory, Lan,
    LocalFireDepartment, LocalShipping,
    Person,
    PrecisionManufacturing,
    Rocket,
    SatelliteAlt,
    Settings, Share, ShowChart,
    SportsHockey
} from "@mui/icons-material";
import React from "react";


export let colors_base = purple[200];
export let colors = ["rgb(19, 20, 15)", "rgb(19, 20, 15)"];

export let singlePage = false;

export const info = {
    firstName: "Drake",
    lastName: "Rundell",
    initials: "DR", // the example uses first and last, but feel free to use three or more if you like.
    position: [" an Aerospace"," a Systems", " a Software", " an Innovative", " a Problem Solving", " an"],
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors_base,
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            icon: '⚙️',
            text: 'driven by innovation'
        },
        {
            icon: '🏙️',
            text: 'based in Chicago, IL'
        },
        {
            icon: '🛞',
            text: "Systems/Software Engineer at General Motors"
        },
        {
            icon: '🐙',
            text: "Detroit Red Wings Fan"
        }
    ],
    socials: [
        {
            link: "mailto:drrundel@umich.edu",
            icon: 'fa fa-envelope',
            label: 'email'
        },
        {
            link: "https://github.com/drrundel",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/drundell/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    work_WI: ["Williams International","| Advanced Manufacturing Engineer | Pontiac, MI","June 2020 – July 2021","• Worked within the electrical manufacturing cell focusing on the development of tooling, fixtures, additive manufacturing and process plans for precision electromechanical assemblies.","• Lead development of plastic additive area within cell to provide low-cost and rapid manufacturing of tooling, while progressing to production hardware using resin additives."],
    work_GM_SW: ["General Motors (SW)","| Real-Time Software/System Engineer - SDV Embedded Platforms | WFH","Feb. 2023 – Present","• Standing up fullstack web application for network graph analysis supported by newly constructed relational & graph databases to track dependencies, change management, and status of systems in new and legacy electrical architectures.",
        "• Support redefinement of Systems Engineering at GM through decomposition and hierachy redefintion of functional features and systems to align with agile software development teams and MBSE methodology.","• Develop innovative tools and dashboards to aid in productivity and knowledge transfer to all levels of the company, including the generation of system controls requirements as system architect liason to SW and controls teams."],
    work_GM_DRE: ["General Motors (HW)","| Design Release Engineer - Air Delivery | Warren, MI","July 2021 – Feb. 2023","• First named author on two granted patents (US Patent No. 11,933,256 & 11,852,109 ) concerning novel approaches to vehicle gas distribution techniques into intake manifold runners","• Supported production and future components through innovative design/analysis studies, management of supplier contact, validation to testing methods, and cross functional communication to engine and vehicle program teams with focus in intake manifolds and engine covers.","• Ensured engine designs won in their market with the safest and highest quality components."],
    bioMain: "Hey! I'm Drake 👋🏼",
    bioWork: "I am a Systems/Software engineer at General Motors working across a variety of developments; deploying graph & relational databases, re-working system architectures, strengthening software testing strategies, and developing full stack web applications.",
    bioEdu: "I studied Aerospace Engineering at the University of Michigan and now pursuing a Master's in Computer Science at Georgia Tech.",
    bioLife: "I enjoy spending time outside, watching/playing hockey, eating good food, and learning at least one new thing everyday!",

    school: {
        bse: [{type:'dir', text:'.'},
            {type:'dir', text:'..'},
            {type:'dir', text:'BSE Aerospace Engineering'},
            {type:'dir', text:'Grad. May 2020'},
            {type:'file', text:'Aerodynamics'},
            {type:'file', text:'Computational Methods'},
            {type:'file', text:'Controls'},
            {type:'file', text:'Propulsion'},
            {type:'file', text:'Structures'},
            {type:'file', text:'Electrical Circuits'},
            {type:'file', text:'Space Flight Mechanics'}],
        mse: [{type:'dir', text:'.'},
            {type:'dir', text:'..'},
            {type:'dir', text:'MSE Computer Science'},
            {type:'dir', text:'August 2022 - Present'},
            {type:'dir', text:'Focus in Computing Systems'},
            {type:'file', text:'Graduate Operating Systems'},
            {type:'file', text:'Information Security'},
            {type:'file', text:'Machine Learning for Trading'},
            {type:'file', text:'Computer Networks'}
        ],
    },
    skills:
        {
            frameworks: ['React', 'LaTeX', 'Flask'],
            languages: ['C','C++', 'Python', 'Java', 'Java/Typescript', 'HTML/CSS','VBA'],
            sw_tools: ['Teamcenter', 'Unix Shell', 'MATLAB', 'MS Office', 'PowerBI', 'VS Code', 'CLion', 'PyCharm', 'PlatformIO', 'ESP-IDF', 'git','neo4j','Tom Sawyer'],
            hw_tools: ['AutoCAD', 'NX', 'Fusion360', 'KiCad','EAGLE'],
        }
    ,
    hobbies: [
        {
            label: '3D Printing',
            emoji: 'fa-cubes'
        },
        {
            label: 'Arduino/ESP32/Raspberry Pi',
            emoji: 'fa-microchip'
        },
        {
            label: 'Watching/Playing Hockey',
            emoji: 'fa-trophy'
        },
        {
            label: 'Exploring/Traveling',
            emoji: 'fa-map-marker'
        },
        {
            label: 'Trying New Foods',
            emoji: 'fa-cutlery'
        },

// Same as above, change the emojis to match / relate to your hobbies or interests.
    ],
    portfolio: [ // This is where your old_portfolio projects will be detailed
        {
            category: "Personal",
            title: "Personal Portfolio Website",
            usedTech: "HTML/CSS, ReactJS, Javascript",
            description: "Portfolio website to showcase work history, education, projects, and some fun facts about me. You're here now!",
            source: "https://drrundel.github.io",
            image: [
                { src: portfoliosite, title: 'My Portfolio' },
            ],
            percentComplete: 100,
            icon: <Person sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5  }} />
        },
        {
            category: "Undergraduate",
            title: "Regenerative Nozzle Wall Cooling Simulation",
            usedTech: "Python, MATLAB, LaTeX",
            description: "Simulated the solution to the heat transfer equation using a finite-element solver on the three domains.",
            source: "../docs/regenerative_cooling_project.pdf", // this should be a link to the **repository** of the project, where the code is hosted.
            image: [
                { src: hotnotch, title: 'Sample Notched Cross Section' },
            ],
            percentComplete: 100,
            icon: <LocalFireDepartment sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5  }} />
        },
            {
            category: "Undergraduate",
            title: "Lunar Lander Truss",
            usedTech: "MATLAB, LaTeX",
            description: "Simulated a leg of a lunar lander using differential equations stemming from the physics of damped oscillations.",
            source: "../docs/lunar_lander_project.pdf", // this should be a link to the **repository** of the project, where the code is hosted.
            image: [
                { src: lander, title: 'Lunar Lander Leg Simulation'},
            ],
            percentComplete: 100,
            icon: <SatelliteAlt sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5  }} />
        },
        {
            category: "Personal",
            title: "IoT Connected NHL Team Display & Goal Lamp",
            usedTech: "React, Python, ESP32, C, C++, Git, PCB Design",
            description: "Embedded real-time system with custom designed PCB supporting an ESP32 communicating with fullstack application through HTTP requests and MQTT pub/sub. System supports cycling of static team/player/game data and live game streaming with less than 3 second response to a National Hockey League API endpoint event.",
            source: "Coming Soon...",
            image: [
                { src: nhlhorn_full, title: 'Full View of the NHL Goal Lamp'},
                { src: nhlhorn_pcb_inside, title: 'Rendering of the PCB inside the Goal Lamp' },
                { src: nhlhorn_pcb_nextto, title: 'Rendering of the PCB next to the Goal Lamp' },
                { src: nhlhorn_diagram, title: 'System Diagram'},
                { src: nhlhorn_frontend_selector, title: 'Frontend Application - Display Selection (WIP)' },
                { src: nhlhorn_frontend_admin, title: 'Frontend Application - Admin Panel (WIP)' },
                { src: pcb_front, title: 'Custom Designed PCB using ESP32'},
                { src: nhlhorn_early, title: 'Early Prototype using v2 PCB' }

            ],
            percentComplete: 80,
            icon: <SportsHockey sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5  }} />
        },
        {
            category: "Personal",
            title: "Blockchain Project Website",
            usedTech: "HTML/CSS, AWS, ETH, ReactJS",
            description: "Responsible for back-end and interactive front-end in ReactJS to drive user engagement and visual appeal on\n" +
                "project website founded on charitable aspects - affordable housing & climate change relief.",
            source: "Coming Soon...",
            image: [
                { src: blockchain, title: '' },
            ],
            percentComplete: 50,
            icon: <Diamond sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5 }} />

        },
        {
            category: "Work",
            title: "Automated Busbar Insulator Assembly",
            usedTech: "C, C++, MATLAB, Python, 3D Printing, Controls",
            description: "Designed and programmed control system in C/C++, with data analysis completed in MATLAB, that interfaces with hardware components used to snap plastic covers on precision stamped busbars.",
            source: "../docs/automated_busbar_insulator_assembly.pdf",
            image: [
                { src: busbar, title: 'Completed System in Production Environment' },
            ],
            percentComplete: 100,
            icon: <PrecisionManufacturing sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5  }} />
        },
        {
            category: "Work",
            title: "Semi-Automated Adhesive Applicator",
            usedTech: "C, C++, MATLAB, Python, 3D Printing, Controls",
            description: "Accelerates the assembly of cardboard reels for overseas shipping of stamped metal terminals through 2D linear motion glue extrusion.",
            source: "../docs/semi_automated_glue_applicator.pdf",
            image: [
                { src: glueiso, title: 'Completed System in Production Environment' },
            ],
            percentComplete: 100,
            icon: <Settings sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5  }} />
        },
        {
            category: "Undergraduate",
            title: "Lunar Based Maneuvers for Applications in Space Transit",
            usedTech: "GMAT, MATLAB, Space Dynamics",
            description: "Completed simulations in NASA developed General Mission Analysis Tool Software (GMAT) with data analysis in MATLAB.",
            source: "../docs/lunar_based_manuevers_for_applications_in_space_transit.pdf",
            image: [
                { src: eccgroundtracks, title: 'Ground Tracks of a Lunar Orbit' },
            ],
            percentComplete: 100,
            icon: <Rocket sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5  }} />
        },
        {
            category: "Undergraduate",
            title: "Optimization of Truck Mirror Camera System",
            usedTech: "Raspberry Pi, MATLAB, Aerodynamics, C++, Python",
            description: "Sponsored design project concerning the aerodynamic improvement and soiling reduction of camera systems.",
            source: "../docs/ae405_final_report.pdf",
            image: [
                { src: mirroreye, title: 'Simulation of Camera Housing Design' },
            ],
            percentComplete: 100,
            icon: <LocalShipping sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5  }} />
        },
        {
            category: "Graduate",
            title: "Multi-Threaded GetFile Client-Server",
            usedTech: "C, Sockets, Multithreading",
            description: "Implemented a GetFile library that allows for a low level transfer between a Client and a Server through the use of a header with a predefined method and scheme. The project also used a GetFile library implementation that supports multiple clients connecting to a singular server through Multithreading.",
            source: "Restricted from Sharing",
            image: [
                { src: getfile, title: 'System Diagram for GetFile Library' },
            ],
            percentComplete: 100,
            icon: <Computer sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5  }} />
        },
        {
            category: "Graduate",
            title: "IPC: Inter-Process Communication",
            usedTech: "C, Sockets, Multithreading, libcurl",
            description: "Implemented a WebProxy server utilizing libcurl's C interface to pass requests onto a Multithreaded GetFile server (project is also in my portfolio). A Cache Server was also created to be used by the Client and allows for communication with the proxy via shared memory.",
            source: "Restricted from Sharing",
            image: [
                { src: ipc, title: 'System Diagram for WebProxy Server' },
            ],
            percentComplete: 100,
            icon: <Lan sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5  }} />
        },
        {
            category: "Graduate",
            title: "gRPC and Distributed Systems",
            usedTech: "C++, Sockets, Multithreading, gRPC, protobuf",
            description: "Implemented a distributed file system in C++ to provide a synchronized directory of files between connected clients and the server (aka the \"source\" of truth for the shared files). gRPC and protobuf were pivotal to the working Fetch/Store algorithms to provide a robust method for the server and clients.",
            source: "Restricted from Sharing",
            image: [
                { src: grpc, title: 'System Diagram for File System'},
            ],
            percentComplete: 100,
            icon: <Share sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5  }} />
        },
        {
            category: "Graduate",
            title: "Stock Market Simulator",
            usedTech: "Python, Numpy, Pandas",
            description: "Created a market simulator that accepts trading orders and keeps track of a portfolio’s value over time and can assess the performance of that portfolio. The implementation works by considering the shares of each stock in the portfolio on each day, as well as calculated the transaction cost from each simulated trade through an input \"Orders\" file.",
            source: "Restricted from Sharing",
            image: [
                { src: marketsim, title: 'Sample Image from Market Simulation' },
            ],
            percentComplete: 100,
            icon: <AddBusiness sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5  }} />
        },
        {
            category: "Graduate",
            title: "Stock Market based Indicator Evaluation",
            usedTech: "Python, Numpy, Pandas, Machine Learning",
            description: "Developed technical indicators and a Theoretically Optimal Strategy to be used in the derivation of an intuition-based trading strategy and a Machine Learning based trading strategy. The Theoretically Optimal Strategy gives a baseline to see performance of a portfolio when placed against a Machine Learning strategy, versus an indicator only strategy.",
            source: "Restricted from Sharing",
            image: [
                { src: indicator, title: 'Sample Image from Market Simulation' },
            ],
            percentComplete: 100,
            icon: <Inventory sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5  }} />
        },
        {
            category: "Graduate",
            title: "Stock Market based ML Strategy Evaluation",
            usedTech: "Python, Numpy, Pandas, Machine Learning",
            description: "Implemented a strategy of manual trading, one that took a considered number of stock market trading indicators, and compared it to a trading methodology centered around using Machine Learning (a strategy learner). The same stock market trading indicators were used in both scenarios to give a proper 1:1 comparison. The learners were developed within this project and the utilized with a training data set and a \"future\" data set and compared to the actual performance of the market.",
            source: "Restricted from Sharing",
            image: [
                { src: ml, title: 'Sample Image from Market Simulation' },
            ],
            percentComplete: 100,
            icon: <ShowChart sx={{ position: 'absolute', zIndex: 1, marginTop: 0.5  }} />
        },
    ]
}