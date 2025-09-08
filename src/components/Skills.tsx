import React from 'react';

const Skills = () => {
  const skills = [

    { name: "JavaScript", level: 80, color: "bg-gray-700" },
    { name: "Python", level: 75, color: "bg-gray-700" },
    { name: "Java", level: 70, color: "bg-gray-700" },
    { name: "SQL", level: 85, color: "bg-gray-700" },
    { name: "Video Editing", level: 80, color: "bg-gray-700" },
    { name: "Problem Solving", level: 90, color: "bg-gray-700" }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-800">
                    {skill.name}
                  </h3>
                  <span className="text-slate-600 text-sm">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;