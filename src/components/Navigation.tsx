"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import navigation from "@/navigation.json";
import Logo from "@/public/Logo.png";
import Image from "next/image";

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50  bg-white dark:bg-dark shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
          <Link href="/" className="hover:scale-110">
            <Image
              className="hover:scale-110"
              src={Logo}
              width={50}
              height={50}
              quality={100}
              alt="Logo"
            />
          </Link>
        </div>

        <ul className="hidden md:flex space-x-6 items-center">
          {navigation.map((item) => (
            <li key={item.id}>
              {item.href.startsWith("#") ? (
                <a
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    pathname === item.href
                      ? "bg-gray-700 text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    pathname === item.href
                      ? "bg-gray-700 text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}

          <li>
            <Link
              href="https://github.com/KhenChanMakara2901"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
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
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
            >
              <SiVercel />
              <span>Vercel</span>
            </Link>
          </li>
        </ul>

        <div className="flex space-x-4 items-center">
          <button
            onClick={toggleDarkMode}
            className="text-xl text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none"
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
      </div>

      <div
        className={`md:hidden bg-white dark:bg-gray-800 overflow-hidden transition-all ${
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
                    pathname === item.href
                      ? "bg-gray-700 text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`block px-4 py-2 text-base font-medium rounded-md transition-all ${
                    pathname === item.href
                      ? "bg-gray-700 text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}

          <li>
            <Link
              href="https://github.com/KhenChanMakara2901"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-base font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
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
              className="flex items-center space-x-2 px-4 py-2 text-base font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
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
