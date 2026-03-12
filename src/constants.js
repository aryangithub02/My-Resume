// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import aicareerLogo from './assets/work_logo/imagecopy3.png';
import nexoraLogo from './assets/work_logo/imagecopy4.png';
import visionaryLogo from './assets/work_logo/visionary.png';
import ecommerceLogo from './assets/work_logo/imagecopy6.png';
// ecommerceLogo was not used and its path incorrect, so removed
// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/hsc.jpeg';
import bsaLogo from './assets/education_logo/SSC.jpeg';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/image copy.png';
import csprepLogo from './assets/work_logo/quiz.png';
import movierecLogo from './assets/work_logo/finance.png';
import taskremLogo from './assets/work_logo/image.png';
import npmLogo from './assets/work_logo/map.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Js', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Gen AI Developer",
      company: "BCG",
      date: "13th July 2025 - 14th July 2025",
      desc: "Completed a job simulation involving AI-powered financial chatbot development for BCG's GenAI Consulting team..",
      skills: [
        "HTML",
        "CSS",
        "Python",
        "Pandas",
        "Excel",
        "Flask",
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "New English High School and Junior College, Nagpur",
      date: " March 2021",
      grade: "88%",
      desc: "I have completed my Master's Hsc from New English High School and Junior College, Nagpur. During my time at NEHS, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "SSC Exams",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "ST. George College jr/sr",
      date: "Feb 2023",
      grade: "76.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "HSC Exams",
    }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AI Career Coach",
      description:
        "An AI-based career guidance platform that helps students select career paths and improve employability. Features include personalized recommendations, resume analysis, skill gap detection, interview prep, and learning roadmaps.",
      image: aicareerLogo,
      tags: ["AI","React JS","Node.js","Tailwind CSS"],
      github: "https://github.com/aryangithub02/AI-Career-Coach",
      webapp: "https://aicareercoach-ijxq.vercel.app/"
    },
    {
      id: 1,
      title: "Nexora – Social Media Platform",
      description:
        "A full-stack social networking app where users can create profiles, post content, follow others, and engage via likes and comments. Built with React front‑end and Node.js backend.",
      image: nexoraLogo,
      tags: ["React JS","Node.js","MongoDB","Express"],
      github: "https://github.com/aryangithub02/Nexora",
      webapp: "https://nexora-socailmedia-07.vercel.app/"
    },
    {
      id: 2,
      title: "Visionary – AI Desktop Assistant",
      description:
        "An AI automation agent capable of opening applications, accessing files, executing system commands, and responding to natural language instructions.",
      image: visionaryLogo,
      tags: ["Electron","Python","AI","NLU"],
      github: "https://github.com/aryangithub02/Visionary-AI-Assistant",
    },
    {
      id: 3,
      title: "E-Commerce Application",
      description:
        "A full-stack online shopping platform featuring product catalogs, shopping cart, user authentication, order management, and search/filter functionality.",
      image: ecommerceLogo,
      tags: ["React JS","Node.js","Express","MongoDB"],
      github: "https://github.com/aryangithub02/E-Commerce-App",
      webapp: "https://am-techstore.netlify.app/"
    },
    {
      id: 4,
      title: "AI Writing Assistant",
      description:
        "A smart web application that generates emails, blogs, and stories in multiple tones (formal, casual, friendly, professional) using generative AI.",
      image: githubdetLogo,
      tags: ["HTML","CSS","JavaScript","React JS","API","Node.js"],
      github: "https://github.com/aryangithub02/Ai-writer-assistant",
      
    },
  ];  