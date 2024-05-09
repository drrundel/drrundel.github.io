import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import { purple } from '@mui/material/colors';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors_base = purple[200];
export let colors = ["rgb(19, 20, 15)", "rgb(19, 20, 15)"];
// linear-gradient(to right, rgb(19, 20, 15), rgb(210, 133, 255));
/*

I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

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
            icon: 'fa fa-cogs',
            text: 'driven by innovation'
        },
        {
            icon: 'fa fa-location-arrow',
            text: 'based in Chicago, IL'
        },
        {
            icon: 'fa fa-code',
            text: "Systems/Software Engineer at General Motors"
        },
        {
            icon: 'fa fa-envelope-o',
            text: "drrundel@umich.edu"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
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
            sw_tools: ['Teamcenter', 'Unix Shell', 'MATLAB', 'MS Office', 'PowerBI', 'VS Code', 'IntelliJ CLion/PyCharm', 'PlatformIO', 'ESP-IDF', 'git','neo4j','Tom Sawyer'],
            hw_tools: ['AutoCAD', 'NX', 'Fusion360', 'KiCad','EAGLE'],
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}