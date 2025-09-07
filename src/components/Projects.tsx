import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "Portfolio Website",
      description: "A responsive portfolio site built using HTML, CSS, and JavaScript. Features modern design, smooth animations, and mobile-first approach.",
      link: "https://github.com/yourusername/portfolio",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "/Portfolio/assets/Screenshot 2025-09-07 at 10.51.26 PM.png"
    },
    {
      name: "Library Management System",
      description: "A Java-based project for managing library operations efficiently. Includes book cataloging, member management, and lending system.",
      link: "https://github.com/yourusername/library-system",
      tech: ["Java", "MySQL", "Swing", "JDBC"],
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {project.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">View Code</span>
                    </a>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-slate-600 hover:text-slate-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;