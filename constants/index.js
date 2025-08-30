import { Cpu, Plane, Users, Wrench } from "lucide-react";
import GithubIcon from "./../public/assets/icons/github.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
// Wrench = maintenance, Plane = aviation, Cpu = AI/ML, Users = leadership/training
const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Aircraft Maintenance & Reliability",
    icon: <Wrench className="w-15 h-15 text-blue-400" />, // aviation maintenance feel
  },
  {
    title: "Digital Twin & Simulation",
    icon: <Plane className="w-15 h-15 text-green-400" />, // represents aircraft & simulation
  },
  {
    title: "Predictive Maintenance (AI/ML)",
    icon: <Cpu className="w-15 h-15 text-purple-400" />, // AI/ML & data-driven insights
  },
  {
    title: "Team Leadership & Training",
    icon: <Users className="w-15 h-15 text-yellow-400" />, // teamwork & training
  },
];

const technologies = {
  languages: [
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org",
    },
    {
      name: "C++",
      icon: "/assets/tech/icons8-c++.svg",
      link: "https://isocpp.org",
    },
    {
      name: "SQL",
      icon: "/assets/tech/sql-database.svg",
      link: "https://www.mysql.com",
    },
    {
      name: "MATLAB",
      icon: "/assets/tech/matlab-svgrepo-com.svg",
      link: "https://www.mathworks.com",
    },
    // {
    //   name: "C",
    //   icon: "/assets/tech/c.svg",
    //   link: "https://en.cppreference.com/w/c",
    // },
    // {
    //   name: "Java",
    //   icon: "/assets/tech/java.svg",
    //   link: "https://www.java.com/en/",
    // },
    
  ],
  Engineering_Software: [
    {
      name: "SolidWorks",
      icon: "/assets/tech/solidworks.svg",
      link: "https://www.solidworks.com",
    },
    {
      name: "Ansys",
      icon: "/assets/tech/ansys@logotyp.us.svg",
      link: "https://www.ansys.com",
    },
    {
      name: "Autodesk Inventor",
      icon: "/assets/tech/autodesk-inventor-seeklogo.svg",
      link: "https://www.autodesk.com/products/inventor",
    },
    {
      name: "Blender",
      icon: "/assets/tech/blender-2.svg",
      link: "https://www.blender.org",
    },
  ],
  Data_and_Analytics_Tools: [
    {
      name: "Power BI",
      icon: "/assets/tech/New_Power_BI_Logo.svg",
      link: "https://powerbi.microsoft.com",
    },
    {
      name: "scikit-learn",
      icon: "/assets/tech/scikit-learn.svg",
      link: "https://scikit-learn.org",
    },
    {
      name: "JMP Pro",
      icon: "/assets/tech/JMP.svg",
      link: "https://www.jmp.com",
    },
    {
      name: "AnyLogic",
      icon: "/assets/tech/anylogic-1.svg",
      link: "https://www.anylogic.com",
    },
    // {
    //   name: "Zustand",
    //   icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    //   link: "https://zustand-demo.pmnd.rs",
    // },
    // {
    //   name: "Redux/Redux-toolkit",
    //   icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    //   link: "https://redux.js.org",
    // },
    // {
    //   name: "NextAuth.js",
    //   icon: "/assets/tech/nextauthjs.png",
    //   link: "https://next-auth.js.org/",
    // },
    // {
    //   name: "Prisma",
    //   icon: "/assets/tech/prisma.svg",
    //   link: "https://www.prisma.io/",
    // },
  ],
  Project_and_Workflow_Tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "JIRA",
      icon: "/assets/tech/Jira_Logo.svg",
      link: "https://www.atlassian.com/software/jira",
    },
    {
      name: "Trello",
      icon: "/assets/tech/trello-svgrepo-com.svg",
      link: "https://trello.com",
    },
    {
      name: "Workflo Plus",
      icon: "/assets/tech/workflow-1.svg",
      link: "https://intoware.com/workfloplus",
    },
  ],
  // environments: [
  //   {
  //     name: "Node.js",
  //     icon: "/assets/tech/nodejs.svg",
  //     link: "https://nodejs.org/en",
  //   },
  // ],
  // databases: [
  //   {
  //     name: "MySQL",
  //     icon: "/assets/tech/my-sql.png",
  //     link: "https://www.mysql.com/",
  //   },
  //   {
  //     name: "PostgreSQL",
  //     icon: "/assets/tech/postgresql.png",
  //     link: "https://www.postgresql.org",
  //   },
  //   {
  //     name: "MongoDB",
  //     icon: "/assets/tech/mongodb.svg",
  //     link: "https://www.mongodb.com/",
  //   },
  //   {
  //     name: "Firebase",
  //     icon: "/assets/tech/firebase.svg",
  //     link: "https://firebase.google.com/",
  //   },
  // ],
};

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },
  {
    title: "Aircraft Interior Maintenance Intern",
    company_name: "airBaltic (Airbus A220-300 Fleet)",
    icon: "/assets/company/AirBaltic_logo.svg",
    iconBg: "#E6DEDD",
    date: "Jan 2024 – Sep 2024",
    points: [
      "Supported interior maintenance of the Airbus A220-300 fleet, prioritising sustainability, passenger comfort, and reliability.",
      "Improved maintenance workflows, contributing to a 15% reduction in turnaround time through process optimisation and detailed documentation.",
      "Collaborated with cross-functional teams to streamline processes, ensuring compliance with airworthiness standards.",
      "Optimised inventory and material stock control, reducing project delays by 10% and ensuring part availability.",
      "Conducted quality control inspections and prepared records for audit readiness",
      "Assisted in training new staff, improving team efficiency and reducing onboarding time by 25%.",
    ],
  },
  // {
  //   title: "Full Stack Developer Intern",
  //   company_name: "Intern at DRDO CABS",
  //   icon: "/assets/company/drdo-cabs.png",
  //   iconBg: "#E6DEDD",
  //   date: "November 2023",
  //   points: [
  //     "Developed a Facility Bookings Manager for DRDO CABS using TypeScript, React, Node.js, Express, Prisma, and MySQL within a month.",
  //     "Actively addressed client issues and queries, ensuring seamless integration with their platform and local cluster system.",
  //     "Led the design and implementation of the frontend, providing a user-friendly interface for efficient facility management.",
  //     "Collaborated with a backend intern throughout the internship to deliver a comprehensive solution tailored to DRDO CABS's needs.",
  //   ],
  // },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Tech team member at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "February 2022 - July 2023",
  //   points: [
  //     "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
  //     "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
  //     "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
  //     "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AR Training Solutions for Workforce Optimisation",
    description:
      "Airbus Project Management, Broughton, UK (Team Leader). Developed AR-based training modules that reduced training time by 35% and boosted knowledge retention by 50%. Implemented real-time AR workflows that cut error rates by 40% and streamlined onboarding, reducing time by 25%.lt using the Cloudinary AI API. It offers robust features for both images and videos, with user-friendly authentication and a tiered credit system. Enhance your media editing experience with cutting-edge AI tools!",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "ar",
        color: "green-text-gradient",
      },
      {
        name: "training-systems",
        color: "pink-text-gradient",
      },
      {
        name: "project-management",
        color: "orange-text-gradient",
      },
      // {
      //   name: "cloudinary",
      //   color: "yellow-text-gradient",
      // },
    ],
    image:
      "/assets/tech/Airbus2.png",
  //   source_code_link: "https://github.com/",
  //   deployed_link: "https://",
   },
  {
    name: "Smart Hangar Digital Twin for Aircraft C-Check Optimisation",
    description:
      "Group Design Project, Cranfield, UK (Team Leader). Led a 5-member team to create a Smart Hangar Digital Twin that improved C-Check efficiency by 20–30%. Modeled layouts in Blender, scripted aircraft movement in Python, and applied AnyLogic to optimise logistics and technician workflows.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "blender",
        color: "green-text-gradient",
      },
      {
        name: "anylogic",
        color: "pink-text-gradient",
      },
      {
        name: "jira",
        color: "orange-text-gradient",
      },
      {
        name: "digitaltwin",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/tech/Airbus3.png",
    // source_code_link: "https://github.com/",
    // deployed_link: "https://",
  },
  // {
  //   name: "GDSC Website",
  //   description:
  //     "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "styled-components",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "three.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "prisma",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "framer-motion",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/gdsc-website.png",
  //   source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
  //   deployed_link: "https://gdscmvjce.vercel.app/",
  // },
  {
    name: "Predictive Maintenance Framework for Aircraft C-Checks",
    description:
      "Individual Research Project, Cranfield, UK. Built a machine learning framework to classify and forecast aircraft C-Checks using 100,000+ maintenance records. Applied clustering and classification models in Python, with Power BI dashboards to visualise fault trends and workload planning.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikitlearn",
        color: "green-text-gradient",
      },
      {
        name: "powerbi",
        color: "pink-text-gradient",
      },
      {
        name: "machinelearning",
        color: "orange-text-gradient",
      },
      {
        name: "aircraft-maintenance",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/Airbus4.png",
    // source_code_link:
    //   "https://github.com/",
    // deployed_link:
    //   "https://github.com/",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/",
  // 	deployed_link: "https:/"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/monish-sathyaprakash-79ab87199/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/",
  },
];

const heroTexts = [
  "Aviation Technology Specialist",
  500,
  "MSc Aviation DT Student @ Cranfield",
  500,
  "Digital Twin Developer",
  500,
  "Predictive Maintenance Engineer",
  500,
  "Operations & MRO Optimizer",
  500,
  "Simulation & Data Analyst",
  500,
  "Future Aviation Leader",
  500,
];


export {
  experiences, heroTexts, navLinks, projects, services, socials, technologies, testimonials
};

