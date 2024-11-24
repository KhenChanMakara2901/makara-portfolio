import { FC } from "react";
import Image from "next/image";
import skillsData from "../data/skills.json";

const Skills: FC = () => {
  return (
    <section
      id="Skills"
      className="py-16 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white"
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-50 transition-opacity rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
