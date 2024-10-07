import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projectsData';
import Sections from '../Components/Sections';

export default function ProjectsDetails() {
  const { id } = useParams(); 
  const project = projects.find((project) => project.id === parseInt(id)); 

  const sectionProject = {
    background: "bg-black",
    positions: "flex flex-col text-white",
  };

  return (
    <Sections background={sectionProject.background} positions={sectionProject.positions}>
        
      <div className="flex flex-col text-white">
        {project ? (
          <div className="flex flex-col items-center gap-10 ">
            <h1 className="sm:text-5xl text-3xl font-inconsolata text-center text-[#da1854]">
                {project.title}
            </h1>

            <p className="sm:w-4/5 w-full sm:text-xl text-sm mb-4 font-roboto text-start">{project.description}</p>
            

            <img src={project.img} alt={project.alt} className="sm:w-4/5 w-full h-auto object-cover bg-slate-800 md:p-10 p-5 rounded-3xl mb-4" />
            <div className='sm:w-4/5 w-full'>
                <p className="w-full sm:text-xl text-sm font-roboto text-start"><strong>Status:</strong> {project.status}</p>
                <p className="w-fulll sm:text-xl text-sm font-roboto text-start"><strong>Category:</strong> {project.category}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {project.technologies.map((tech) => (
                <div className="flex flex-col items-center">
                  <tech.icon className="text-3xl" />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>

            <a href={project.code.link} target="_blank" className="inline-flex items-center space-x-2 bg-[#6A00FF] text-white py-2 px-4 rounded hover:bg-[#da1854] transition duration-300">
              <project.code.icon className="text-xl" />
              <span>View Code on GitHub</span>
            </a>
          </div>
        ) : (
          <p>Project not found</p>
        )}
      </div>
    </Sections>
  );
}
