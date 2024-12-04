"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import navigation from "@/navigation.json";
import Logo from "@/public/Logo.png";
import Image from "next/image";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeId, setActiveId] = useState("");

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.getElementById(href.replace("#", ""));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.7 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-lg">
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
            className="hover:scale-110 transition-transform"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navigation.map((item) => (
            <li key={item.id}>
              {item.href.startsWith("#") ? (
                <a
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeId === item.href.replace("#", "")
                      ? "text-indigo-500 underline"
                      : "text-gray-600 dark:text-gray-300 hover:underline"
                  }`}
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeId === item.href
                      ? "text-indigo-500 underline"
                      : "text-gray-600 dark:text-gray-300 hover:underline"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          {/* GitHub Link */}
          <li>
            <Link
              href="https://github.com/KhenChanMakara2901"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:underline transition-all"
            >
              <FaGithub />
              <span>GitHub</span>
            </Link>
          </li>
          {/* Vercel Link */}
          <li>
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:underline transition-all"
            >
              <SiVercel />
              <span>Vercel</span>
            </Link>
          </li>
        </ul>

        {/* Dark Mode and Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-xl text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none"
            aria-label="Toggle Mobile Menu"
            aria-expanded={isMobileMenuOpen}
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-height duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="space-y-2 px-4 py-3">
          {navigation.map((item) => (
            <li key={item.id}>
              {item.href.startsWith("#") ? (
                <a
                  href={item.href}
                  className={`block px-4 py-2 text-base font-medium rounded-md transition-all ${
                    activeId === item.href.replace("#", "")
                      ? "text-indigo-500 underline"
                      : "text-gray-600 dark:text-gray-300 hover:underline"
                  }`}
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`block px-4 py-2 text-base font-medium rounded-md transition-all ${
                    activeId === item.href
                      ? "text-indigo-500 underline"
                      : "text-gray-600 dark:text-gray-300 hover:underline"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          {/* GitHub and Vercel Links */}
          <li>
            <Link
              href="https://github.com/KhenChanMakara2901"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-base font-medium rounded-md text-gray-600 dark:text-gray-300 hover:underline transition-all"
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
              className="flex items-center space-x-2 px-4 py-2 text-base font-medium rounded-md text-gray-600 dark:text-gray-300 hover:underline transition-all"
            >
              <SiVercel />
              <span>Vercel</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
