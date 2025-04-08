import React from "react";
import AboutImage from "../assets/profile.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="Profile"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I'm a Full Stack Web Application Developer with a strong focus on
              building scalable and responsive web apps using React.js on the
              frontend and Node.js/Express with MySQL on the backend.
              <br />
              I enjoy turning complex problems into simple, elegant
              solutions and have hands-on experience building and deploying
              full-featured applications. Whether working on authentication
              systems, RESTful APIs, or database architecture, I aim for clean,
              maintainable, and efficient code. <br/>
              <strong> Stack Highlights:</strong> 
              <ul>
                <li> Frontend: JavaScript, React.js, HTML, Bootstrap,Tailwind CSS</li>
                <li> Backend: Node.js, Express.js, REST APIs</li>
                <li>Database: MySQL</li>
                <li> Tools & Workflow: Git, GitHub, Postman, Agile/Scrum, CI/CD</li>
              </ul>
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold mb-4">
                My Technical Skills
              </h3>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-3/12 md:w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-3/12 md:w-2/12">
                  JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-3/12 md:w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-3/12 md:w-2/12">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                >
                  5+
                </h3>
                <p>Projects Built</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                >
                  5+
                </h3>
                <p>Clone Websites</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                >
                  1000+
                </h3>
                <p>Hours Coding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
