"use client";
import Lottie from "lottie-react";
import React from "react";
import Spin from "@/public/Spin.json";

export default function Effect() {
  return (
    <div className="bg-while dark:bg-dark flex flex-col items-center justify-center min-h-screen">
      <div className="w-1/3 md:w-1/4">
        <Lottie animationData={Spin} loop={true} className="w-full" />
      </div>
      <h2 className="text-4xl font-serif text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        THANK YOU
      </h2>
    </div>
  );
}
