import React, { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    shortDescription: "Building responsive and interactive user interfaces.",
    fullDescription: "I specialize in creating pixel-perfect, responsive UIs using React, Bootstrap css, Tailwind CSS, and modern JavaScript frameworks. My frontend solutions focus on performance, accessibility, and seamless user experiences across all devices."
  },
  {
    id: 2,
    title: "Backend Development",
    shortDescription: "Developing robust server-side logic and databases.",
    fullDescription: "With expertise in Node.js, Express, and database systems like MongoDB and PostgreSQL, I build secure, scalable APIs. My backend solutions include authentication, data processing, and efficient database architecture."
  },
  {
    id: 3,
    title: "Full-Stack Development",
    shortDescription: "Combining both frontend and backend development skills.",
    fullDescription: "From concept to deployment, I deliver complete web applications. My full-stack approach ensures seamless integration between frontend and backend components, optimized for performance and maintainability."
  },
  {
    id: 4,
    title: "Database Design",
    shortDescription: "Creating efficient and scalable database architectures.",
    fullDescription: "I design optimized database schemas and queries for maximum performance. My expertise includes relational database design, NoSQL solutions, data modeling, and query optimization to ensure your application's data layer is robust and efficient."
  },
  {
    id: 5,
    title: "Version Control & Deployment",
    shortDescription: "Managing code repositories and CI/CD pipelines.",
    fullDescription: "I implement professional version control workflows using Git and provide deployment solutions including CI/CD pipelines, containerization with Docker, and cloud platform deployment to ensure smooth and reliable software delivery."
  },
  {
    id: 6,
    title: "UI/UX Implementation",
    shortDescription: "Translating designs into functional, user-friendly interfaces.",
    fullDescription: "I bridge the gap between design and development by meticulously implementing UI/UX designs with clean code. Using tools like Figma, Adobe XD, and responsive frameworks, I ensure the final product matches the designer's vision while maintaining optimal performance and usability standards."
  }
];
const Service = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleDescription = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              
              {/* Short description always visible */}
              <p className="mt-2 text-gray-300">{service.shortDescription}</p>
              
              {/* Full description shown when expanded */}
              {expandedService === service.id && (
                <p className="mt-4 text-gray-300 animate-fadeIn">
                  {service.fullDescription}
                </p>
              )}
              
              {/* Read More/Less button */}
              <button
                onClick={() => toggleDescription(service.id)}
                className="mt-4 text-green-400 hover:text-blue-500 transition-colors duration-200 focus:outline-none"
              >
                {expandedService === service.id ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;