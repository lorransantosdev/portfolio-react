import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiJavascript, SiCplusplus } from 'react-icons/si';
import Sections from '../Components/Sections';
import SkillCategory from '../Components/SkillCategory';

export default function SkillsPage() {
  const sectionAbout = {
    background: "bg-black",
    positions: "flex flex-col items-center justify-center text-white h-screen",
  };

  const purpleCustom = "text-[#6A00FF]";
  const pinkCustom = "text-[#da1854]";

  const skillsData = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: purpleCustom },
        { name: "Python", icon: FaPython, color: pinkCustom },
        { name: "C++", icon: SiCplusplus, color: purpleCustom },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: FaReact, color: purpleCustom },
        { name: "Node.js", icon: FaNodeJs, color: pinkCustom },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: purpleCustom },
        { name: "Bootstrap", icon: SiBootstrap, color: pinkCustom },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: FaGitAlt, color: pinkCustom },
        { name: "GitHub", icon: FaGithub, color: purpleCustom },
        { name: "HTML", icon: FaHtml5, color: pinkCustom },
        { name: "CSS", icon: FaCss3Alt, color: purpleCustom },
      ],
    },
  ];

  return (
    <Sections background={sectionAbout.background} positions={sectionAbout.positions}>
      <h1 className="text-4xl font-inconsolata text-center mb-8">My Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillsData.map((category, index) => (
          <SkillCategory key={index} title={category.title} skills={category.skills} />
        ))}
      </div>
    </Sections>
  );
}
