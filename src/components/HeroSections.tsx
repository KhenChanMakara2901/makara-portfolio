"use client";
import Image from "next/image";
import Link from "next/link";
import Picture from "@/public/Picture.jpg";
import Facebook from "@/public/icon/Facebook.png";
import Telegram from "@/public/icon/Telegram.png";
import LinkedIn from "@/public/icon/Linkin.png";
import CountUp from "react-countup";

const facts = [
  { count: 4, label: "Graduated 🎓", duration: 8, suffix: " Years" },
  { count: 20, label: "Projects", duration: 6, suffix: "+" },
  { count: 90, label: "Satisfaction", duration: 6, suffix: "%" },
];

const socialMediaIcons = [
  { src: Facebook, alt: "Facebook", link: "#" },
  { src: Telegram, alt: "Telegram", link: "#" },
  { src: LinkedIn, alt: "LinkedIn", link: "#" },
];

export default function HeroSection() {
  return (
    <section id="Home" className="relative bg-white dark:bg-dark py-24 mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 leading-tight mb-4">
              KHEN CHANNMAKARA
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
              Experienced Web Developer with a passion for building modern,
              user-friendly websites.
            </p>
            <Link
              href="mailto:khenchannmakara@gmail.com"
              className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
              aria-label="Hire Me"
            >
              Hire Me
            </Link>

            {/* Facts */}
            <div className="mt-8 flex justify-center lg:justify-start gap-8">
              {facts.map((fact, index) => (
                <div className="text-center" key={index}>
                  <h3 className="text-4xl font-bold text-gray-800 dark:text-white">
                    <CountUp
                      start={0}
                      end={fact.count}
                      duration={fact.duration}
                      delay={0.5} // Adding a delay for a smoother start
                    />
                    {fact.suffix}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content: Picture */}
          <div className="relative group flex justify-center items-center">
            <div className="absolute inset-0 w-72 h-72 sm:w-96 sm:h-96 lg:w-[22rem] lg:h-[22rem] rounded-full bg-gradient-to-r from-blue-500 to-teal-400 blur-2xl opacity-50 group-hover:blur-3xl group-hover:opacity-75 transition-all duration-500"></div>
            <div className="relative z-10 rounded-full p-1 bg-gradient-to-r from-indigo-500 to-teal-400 shadow-xl transform group-hover:scale-110 transition-all duration-300">
              <div className="rounded-full overflow-hidden bg-white dark:bg-gray-800 p-2 shadow-lg">
                <Image
                  src={Picture}
                  width={400}
                  height={400}
                  alt="Web Developer"
                  className="rounded-full transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            Social Media:
          </h3>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-10">
            {socialMediaIcons.map((icon, index) => (
              <Link
                href={icon.link}
                className="group"
                key={index}
                aria-label={icon.alt}
              >
                <Image
                  src={icon.src}
                  width={50}
                  height={50}
                  alt={icon.alt}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transition-transform transform group-hover:scale-110"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
