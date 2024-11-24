"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectData from "@/src/data/projects.json";

const ProjectSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [completed, setCompleted] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef(null);

  const toggleProjects = () => setShowAllProjects((prev) => !prev);

  const visibleProjects = showAllProjects
    ? projectData.projects
    : projectData.projects.slice(0, 3);

  const animateProgress = (projectId: string, target: number) => {
    const increment = target / 100;
    let currentProgress = 0;

    const animate = () => {
      if (currentProgress < target) {
        currentProgress += increment;
        setCompleted((prevState) => ({
          ...prevState,
          [projectId]: Math.min(currentProgress, target),
        }));
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  useEffect(() => {
    const currentSection = sectionRef.current; // Store the ref value in a variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projectData.projects.forEach((project) => {
              setCompleted((prevState) => ({
                ...prevState,
                [String(project.id)]: 0,
              }));

              animateProgress(String(project.id), project.completion);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection); // Cleanup using the stored ref
      }
    };
  }, []);

  return (
    <div
      id="projects"
      className="bg-white dark:bg-dark text-gray-900 dark:text-white py-16 px-6 lg:px-16"
      ref={sectionRef}
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-teal-500 transition duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-56 md:h-64 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 ">{project.title}</h3>
              <p className="mb-4 text-sm ">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Technologies:</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-gradient-to-r from-teal-500 to-teal-300 text-sm text-gray-800 px-3 py-1 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold  mb-2">Completion:</h4>
                <div className="w-full bg-gray-700 rounded-full">
                  <div
                    className="bg-teal-500 text-xs font-medium text-teal-100 text-center p-1 leading-none rounded-full"
                    style={{ width: `${completed[String(project.id)] || 0}%` }}
                  >
                    {Math.round(completed[String(project.id)] || 0)}%
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <Link
                  href={project.githubLink}
                  className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
                  target="_blank"
                >
                  <FaGithub className="mr-2" />
                </Link>
                <Link
                  href={project.liveLink}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
                  target="_blank"
                >
                  <FaExternalLinkAlt className="mr-2" />
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 border-4 border-teal-500 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={toggleProjects}
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          {showAllProjects ? "Show Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
