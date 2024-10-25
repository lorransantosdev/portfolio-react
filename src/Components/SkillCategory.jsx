import React from 'react';

export default function SkillCategory({ title, skills }) {
  return (
    <div className="bg-gray-700 hover:bg-gray-800 transition ease-in-out duration-300 p-5 rounded-3xl shadow-lg flex flex-col items-center">
      <h2 className="sm:text-2xl text-lg font-roboto mb-4">{title}</h2>
      <div className="flex space-x-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <skill.icon className={`sm:text-5xl text-2xl ${skill.color}`} />
            <p className="mt-2 text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
