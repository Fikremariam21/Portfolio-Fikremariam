import React from "react";
import { Link } from "react-router-dom";
import evangadiForum from "../assets/evangadiForum.jpg";
import amazon from "../assets/mazon-logo.jpg";
import netflix from "../assets/Netflix_thumb.png";

const projects = [
  {
    id: 1,
    name: "Evangadi Forum",
    technologies: "MERN Stack",
    image: evangadiForum,
    github: "https://fikremariam21.github.io/Evangadi_Forum_Frontend_Final/",
  },
  {
    id: 2,
    name: "Netflix Clone ",
    technologies: "React.js, css, express.js, TMDB API",
    image: netflix,
    github: "https://fikremariam21.github.io/New_Netflix_Clone_2025/",
  },
  {
    id: 3,
    name: "Amazon Clone",
    technologies: "React.js, css, express.js, firebase, Stripe API",
    image: amazon,
    github: "https://fikremariam21.github.io/Amazon_Clone_Final_Version/",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <Link to={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
