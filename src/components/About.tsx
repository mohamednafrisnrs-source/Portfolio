import React from 'react';
import { GraduationCap, Code, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Information Systems Student",
      description: "Currently pursuing my degree with focus on software development"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Specializing in modern web technologies and frameworks"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Experience with SQL and database design principles"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                I am an undergraduate student pursuing a degree in Information Systems. 
                Passionate about software development, problem-solving, and creating impactful 
                digital solutions. I specialize in web development, databases, and emerging technologies.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                My journey in technology started with curiosity and has evolved into a deep passion 
                for creating solutions that make a difference. I'm always eager to learn new technologies 
                and take on challenging projects.
              </p>
            </div>
            
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="text-blue-600 flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;