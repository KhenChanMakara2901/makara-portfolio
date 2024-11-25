"use client";
import Image from "next/image";
import Link from "next/link";
import Picture from "@/public/Picture.jpg";
import Facebook from "@/public/icon/Facebook.png";
import Telegram from "@/public/icon/Telegram.png";
import LinkedIn from "@/public/icon/Linkin.png";
import CountUp from "react-countup";
export default function HeroSection() {
  return (
    <section id="Home" className="relative bg-white dark:bg-dark py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12">
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 leading-tight mb-4">
              KHEN CHANNMAKARA
            </h1>
            <p className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 mb-6">
              Experienced Web Developer with a passion for building modern,
              user-friendly websites.
            </p>
            <Link
              href="mailto:khenchannmakara@gmail.com"
              className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Hire Me
            </Link>

            <div className="mt-8 flex justify-center lg:justify-start gap-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              {[
                {
                  count: 4,
                  label: "Graduated 🎓",
                  duration: 4,
                  suffix: "Years",
                },
                { count: 20, label: "Projects", duration: 2, suffix: "+" },
                { count: 90, label: "Satisfaction", duration: 2, suffix: "%" },
              ].map((fact, index) => (
                <div className="text-center" key={index}>
                  <h3 className="text-4xl font-bold">
                    <CountUp
                      start={0}
                      end={fact.count}
                      duration={fact.duration}
                    />
                    {fact.suffix || ""}
                  </h3>
                  <p>{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 opacity-50 blur-lg group-hover:blur-xl group-hover:opacity-70 transition-all duration-300"></div>
            <div className="relative rounded-full p-2 bg-gradient-to-r from-indigo-500 to-teal-400 shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <div className="rounded-full bg-white dark:bg-gray-800 p-1 shadow-xl">
                <Image
                  src={Picture}
                  width={350}
                  height={350}
                  alt="Web Developer"
                  className="rounded-full shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110"
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            Social Media:
          </h3>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-10">
            {[
              { src: Facebook, alt: "Facebook", link: "#" },
              { src: Telegram, alt: "Telegram", link: "#" },
              { src: LinkedIn, alt: "LinkedIn", link: "#" },
            ].map((icon, index) => (
              <Link href={icon.link} className="group" key={index}>
                <Image
                  src={icon.src}
                  width={50}
                  height={50}
                  alt={icon.alt}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transition-transform transform group-hover:scale-110"
                />
                <span className="sr-only">{icon.alt}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
