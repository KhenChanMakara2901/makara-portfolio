"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaCloudMoon } from "react-icons/fa";
import { IoIosPartlySunny } from "react-icons/io";
import { SiVercel } from "react-icons/si";
import navigation from "@/navigation.json";
import Image from "next/image";
import Logo from "@/public/Logo.png";

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeId, setActiveId] = useState("");

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  // Toggle dark mode and persist preference in localStorage
  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Sync dark mode with localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
  }, []);

  // Apply dark mode to the document root
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // Smooth scroll to section
  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.getElementById(href.replace("#", ""));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  // Track currently visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            priority
            quality={100}
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                  activeId === item.href.replace("#", "")
                    ? "text-indigo-500 underline"
                    : "text-gray-700 dark:text-gray-300 hover:text-indigo-400"
                }`}
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* GitHub */}
          <li>
            <Link
              href="https://github.com/KhenChanMakara2901"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              <FaGithub />
              <span>GitHub</span>
            </Link>
          </li>
          {/* Vercel */}
          <li>
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              <SiVercel />
              <span>Vercel</span>
            </Link>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-xl text-gray-700 dark:text-gray-300 hover:text-indigo-400 transition-transform duration-300 hover:scale-110"
          aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        >
          {isDarkMode ? (
            <IoIosPartlySunny size={30} />
          ) : (
            <FaCloudMoon size={30} />
          )}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 dark:text-gray-300 hover:text-indigo-400 transition-transform duration-300 hover:scale-110"
          aria-label="Toggle Mobile Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden space-y-2 px-4 py-3 bg-white dark:bg-gray-900 shadow-md">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                  activeId === item.href.replace("#", "")
                    ? "text-indigo-500 underline"
                    : "text-gray-700 dark:text-gray-300 hover:text-indigo-400"
                }`}
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* GitHub and Vercel */}
          <li>
            <Link
              href="https://github.com/KhenChanMakara2901"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              <FaGithub />
              <span>GitHub</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              <SiVercel />
              <span>Vercel</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
