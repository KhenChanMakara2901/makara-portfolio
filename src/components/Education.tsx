"use client";

import Image from "next/image";
import education from "@/src/data/education.json";

const Education = () => {
  return (
    <section id="education" className="bg-white dark:bg-dark py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-12">
          ᝰ EDUCATION ᝰ
        </h2>

        {/* Education Grid */}
        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.id}
              className="relative bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Institution Logo */}
              <div className="absolute top-0 left-8 transform -translate-y-1/2">
                <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shadow-lg">
                  <Image
                    src={item.logo}
                    alt={`${item.institution} logo`}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
              </div>

              {/* Education Details */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-blue-500 font-medium">
                  {item.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.date}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-6">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
