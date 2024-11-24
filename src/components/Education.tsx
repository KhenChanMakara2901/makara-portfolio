import React from "react";
import Image from "next/image";
import education from "@/src/data/education.json";

const Education = () => {
  return (
    <section id="education" className="bg-white dark:bg-dark py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-12">
          ᝰ EDUCATION ᝰ
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.id}
              className="relative bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="absolute top-0 left-6 transform -translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={`${item.institution} logo`}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-purple-400">{item.institution}</p>
                <p className="text-sm text-gray-400">{item.date}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 text-sm font-medium bg-purple-700 text-white rounded-full"
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
