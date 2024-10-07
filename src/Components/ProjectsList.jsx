import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projectsData';

export default function ProjectsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 p-10 text-white">
      {projects.length > 0 ? (
        projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-gray-700 hover:bg-gray-800 transition ease-in-out duration-300 p-5 rounded-3xl shadow-lg">

            <Link to={`/projects/${project.id}`}>
              <img src={project.img} alt={project.alt} className="w-full h-auto object-cover rounded-3xl mb-4 cursor-pointer" />
            </Link>

            <h2 className="text-2xl font-roboto mb-2">{project.title}</h2>
            <p className="text-sm text-gray-400 mb-2"><strong>Status:</strong>{project.status}</p>
            <p className="text-sm text-gray-400 mb-4"><strong>Category:</strong> {project.category}</p>

            <a href={project.code.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-[#6A00FF] text-white py-2 px-4 rounded-3xl hover:bg-[#da1854] transition duration-300">
              <project.code.icon className="text-xl" />
              <span>View Code</span>
            </a>
          </div>
        ))
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
}
