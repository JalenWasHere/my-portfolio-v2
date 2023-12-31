import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  tcr,
  informapp,
  groovify,
  angular,
  threejs,
  oxolutions,
  laravel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "angular",
    icon: angular,
  },
];

const experiences = [
  {
    title: "Student Application Developer",
    company_name: "Techniek College Rotterdam",
    icon: tcr,
    iconBg: "#E6DEDD",
    date: "2018 - 2021",
    points: [
      "Learning web-development with JavaScript and PHP.",
      "Database management",
      "Mobile application development for android with Java.",
    ],
  },
  {
    title: "Intern Application Developer",
    company_name: "Oxolutions",
    icon: oxolutions,
    iconBg: "#fff",
    date: "Feb 2021 - Sept 2021",
    points: [
      "Developing React.js web-applications in a small team of interns with one senior developer.",
      "Creating modules for Prestashop e-commerce in PHP",
      "Consuming backend API through React Redux.",
    ],
  },
  {
    title: "Fulltime Application Developer",
    company_name: "Informapp",
    icon: informapp,
    iconBg: "#fff",
    date: "Jun 2022 - Dec 2022",
    points: [
      "Development with React.js and TypeScript.",
      "PHP Laravel full-stack app development",
    ],
  },
];

const projects = [
  {
    name: "Groovify",
    description:
      "Web-based app that allows users to upload music and albums, and listen to others' music and create playlists with them. Features a custom music player built with JavaScript.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "laravel",
        color: "text-red-400",
      },
      {
        name: "tailwind",
        color: "text-blue-500",
      },
    ],
    image: groovify,
    deployment_link: "https://groovify.jalenmuller.com/",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
