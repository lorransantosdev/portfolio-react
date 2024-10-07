import React from 'react';

export default function SkillCategory({ title, skills }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="sm:text-2xl text-lg font-roboto mb-4">{title}</h2>
      <div className="flex space-x-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <skill.icon className={`sm:text-5xl text-2xl ${skill.color}`} />
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
