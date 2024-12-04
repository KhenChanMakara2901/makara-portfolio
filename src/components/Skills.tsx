"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import skillsData from "../data/skills.json";

const Skills: FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      id="Skills"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-dark text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            🏆 SKILLS 🏆
          </span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="group relative flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              {/* Skill Icon */}
              <div className="relative h-20 w-20 sm:h-24 sm:w-24 mb-4">
                <Image
                  src={skill.image}
                  alt={`${skill.name} Icon`}
                  fill
                  className="rounded"
                />
              </div>

              {/* Skill Name */}
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>

              {/* Proficiency Bar */}
              <div className="w-full mt-4">
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-transform duration-1000 ease-in-out ${
                      inView ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{
                      width: `${skill.proficiency}%`,
                      background: "linear-gradient(to right, #6ee7b7, #3b82f6)",
                    }}
                  ></div>
                </div>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                  {skill.proficiency}%
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-50 transition-opacity rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
