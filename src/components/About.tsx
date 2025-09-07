import React from 'react';
import { GraduationCap, Code, MonitorPlay } from 'lucide-react';

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
      icon: <MonitorPlay className="w-8 h-8" />,
      title: "Video Creator",
      description: "Experience with video production and editing techniques"
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
                I am a passionate web developer and creative video creator, 
                currently pursuing my degree in Information Systems at Sabaragamuwa University of Sri Lanka. With a strong interest in technology and design,
                I enjoy building modern, user-friendly web experiences while also expressing creativity through visual storytelling.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
               My journey in Information Systems has strengthened my problem-solving and analytical skills,
               which I bring into both my development projects and content creation. I am eager to keep learning, exploring new technologies, and applying my skills to create impactful digital solutions.
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