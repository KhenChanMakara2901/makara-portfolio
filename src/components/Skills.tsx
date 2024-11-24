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
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
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
      className="py-16 bg-white dark:bg-dark text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            SKILLS
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="group relative flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="relative h-24 w-24 mb-4">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded"
                />
              </div>
              <p className="text-lg font-medium">{skill.name}</p>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-in-out ${
                    inView ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{
                    width: `${skill.proficiency}%`,
                    background: "linear-gradient(to right, #6ee7b7, #3b82f6)",
                  }}
                ></div>
              </div>
              <p className="text-sm mt-2">{skill.proficiency}%</p>

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-50 transition-opacity rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
