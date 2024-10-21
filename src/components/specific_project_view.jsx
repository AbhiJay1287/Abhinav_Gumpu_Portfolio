import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SpecificProjectView() {
  const { state } = useLocation(); // Getting project data passed via state
  const project = state?.project;

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url('/assets/cover.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {project ? (
        <div className="project-card fade-in bg-white font-semibold text-center border border-gray-300 rounded-lg shadow-2xl p-8 sm:p-10 w-11/12 max-w-lg md:max-w-xl lg:max-w-2xl">
          <img
            className="mb-5 rounded-lg shadow-xl mx-auto object-contain"
            src={project.Thumbnail_link || '/assets/placeholder.jpg'}
            alt={project.title}
            style={{ maxHeight: '150px', width: 'auto' }}
          />
          <h1 className="text-2xl font-bold text-gray-700 mb-2">
            {project.title}
          </h1>
          <h3 className="text-md text-gray-500 mb-4">~ {project.date}</h3>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            {project.description}
          </p>
          <Link
            to="/contact"
            className="bg-indigo-900 px-8 py-3 mt-4 rounded-full text-gray-100 font-semibold uppercase hover:bg-indigo-700 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      ) : (
        <div className="text-white text-lg">Project not found or Loading...</div>
      )}
    </div>
  );
}


