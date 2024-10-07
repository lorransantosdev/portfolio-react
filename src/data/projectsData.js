import { FaReact, FaPython, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';
import portfolioHome from "/portfolio-home.png";
import ecoRaceHome from "/ecorace-home.png";

export const projects = [
  {
    id: 1,
    status: "Completed",
    category: "Front-End",
    title: "Personal Portfolio",
    description: "A personal website created to showcase my skills and projects. The portfolio has a modern interface and was developed using the best web development practices.",
    technologies: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt }
    ],
    img: portfolioHome,
    alt: "Personal portfolio home image",
    code: {
      link: "https://github.com/lorransantosdev/portfolio-react",
      icon: FaGithub
    }
  },
  {
    id: 2,
    status: "Completed",
    category: "Front-End",
    title: "Eco Race Challenge",
    description: "A platform aimed at Formula E remote control car drivers, where it is possible to register and login, in addition to earning Carbon Coins to exchange for exclusive items. Data is stored in LocalStorage.",
    technologies: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt }
    ],
    img: ecoRaceHome,
    alt: "Eco Race platform home image",
    code: {
      link: "https://github.com/lorransantosdev/EcoRace-react",
      icon: FaGithub
    }
  }
];
