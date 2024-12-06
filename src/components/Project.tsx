"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectData from "@/src/data/projects.json";

const ProjectSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [progress, setProgress] = useState<{ [key: string]: number }>({});
  const [showPopup, setShowPopup] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const toggleProjects = () => setShowAllProjects((prev) => !prev);

  const visibleProjects = showAllProjects
    ? projectData.projects
    : projectData.projects.slice(0, 3);

  const animateProgress = (projectId: string, target: number) => {
    const increment = target / 100;
    let current = 0;

    const step = () => {
      current += increment;
      if (current <= target) {
        setProgress((prevState) => ({
          ...prevState,
          [projectId]: Math.min(current, target),
        }));
        requestAnimationFrame(step);
      }
    };
    step();
  };

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projectData.projects.forEach((project) => {
              setProgress((prev) => ({
                ...prev,
                [String(project.id)]: 0,
              }));
              animateProgress(String(project.id), project.completion);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const handleLiveLinkClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-white dark:bg-dark text-white py-20 px-6 lg:px-16"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        🚀 MY PROJECTS 🚀
      </h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl border border-gray-700 hover:border-purple-500 transition-transform transform hover:-translate-y-2"
          >
            <div className="p-6">
              {/* Project Title */}
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Divider */}
              <div className="my-4 border-t border-gray-600"></div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg text-gray-400 mb-2">Technologies:</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 text-xs text-gray-900 px-3 py-1 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-110"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="my-4 border-t border-gray-600"></div>

              {/* Completion Progress */}
              <div className="mb-4">
                <h4 className="text-lg text-gray-400 mb-2">Completion:</h4>
                <div className="w-full bg-gray-700 rounded-full">
                  <div
                    className="bg-gradient-to-r from-green-400 to-teal-400 text-xs font-medium text-gray-900 text-center p-1 leading-none rounded-full"
                    style={{
                      width: `${progress[String(project.id)] || 0}%`,
                    }}
                  >
                    {Math.round(progress[String(project.id)] || 0)}%
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-4">
                <Link
                  href={project.githubLink}
                  className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg flex items-center gap-2 transition-transform transform hover:scale-105"
                  target="_blank"
                >
                  <FaGithub />
                  GitHub
                </Link>
                <button
                  onClick={handleLiveLinkClick}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg flex items-center gap-2 transition-transform transform hover:scale-105"
                >
                  <FaExternalLinkAlt />
                  Live
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="text-center mt-8">
        <button
          onClick={toggleProjects}
          className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          {showAllProjects ? "Show Less" : "See More"}
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-gray-900 text-white p-10 rounded-3xl shadow-2xl transform scale-95 transition-transform duration-300 ease-in-out hover:scale-100">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-red-500 tracking-wide">
              😱 Private Content!
            </h3>
            <p className="text-center text-lg sm:text-xl text-gray-300 mb-8">
              Sorry, this project is private and cannot be previewed.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
