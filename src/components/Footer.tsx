import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark py-6">
      <div className="container mx-auto text-center space-y-4 sm:space-y-0 px-6">
        <h1 className="text-lg sm:text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Created by Monun Smos ♥︎♥︎♥︎
        </h1>
        <p className="text-sm sm:text-lg font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          © Copyright 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
