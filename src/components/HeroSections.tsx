"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Picture from "@/public/Picture.jpg";
import Facebook from "@/public/icon/Facebook.png";
import Telegram from "@/public/icon/Telegram.png";
import LinkedIn from "@/public/icon/Linkin.png";
import CountUp from "react-countup";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12">
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 leading-tight mb-4">
              KHEN CHANNMAKARA
            </h1>
            <p className="text-lg sm:text-xl  text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 mb-6">
              Experienced Web Developer with a passion for building modern,
              user-friendly websites.
            </p>
            <Link
              href="mailto:khenchannmakara@gmail.com"
              className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Hire Me
            </Link>

            <div className="mt-8 flex justify-center lg:justify-start gap-8  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              <div className="text-center">
                <h3 className="text-4xl font-bold">
                  <CountUp start={0} end={4} duration={4} />+ years
                </h3>
                <p>Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold">
                  <CountUp start={0} end={10} duration={2} />+
                </h3>
                <p>Projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold">
                  <CountUp start={0} end={90} duration={2} />%
                </h3>
                <p>Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center relative">
            <div className="rounded-full p-2 bg-gradient-to-r from-indigo-500 to-teal-400 shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <div className="rounded-full bg-white dark:bg-gray-800 p-1 shadow-xl">
                <Image
                  src={Picture}
                  width={400}
                  height={400}
                  alt="Web Developer"
                  className="rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4 text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
            Connect with Me
          </h3>
          <div className="flex justify-center lg:justify-start gap-6">
            <Link href="#" className="group">
              <Image
                src={Facebook}
                width={50}
                height={50}
                alt="Facebook"
                className="w-12 h-12 transition-transform transform group-hover:scale-110"
              />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="group">
              <Image
                src={Telegram}
                width={50}
                height={50}
                alt="Telegram"
                className="w-12 h-12 transition-transform transform group-hover:scale-110"
              />
              <span className="sr-only">Telegram</span>
            </Link>
            <Link href="#" className="group">
              <Image
                src={LinkedIn}
                width={50}
                height={50}
                alt="LinkedIn"
                className="w-12 h-12 transition-transform transform group-hover:scale-110"
              />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
