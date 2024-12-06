"use client";
import dynamic from "next/dynamic";
import Spin from "@/public/Spin.json";

// Dynamically import Lottie with server-side rendering disabled for better client performance
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Effect() {
  return (
    <div className="bg-white dark:bg-dark flex flex-col items-center justify-center min-h-screen p-6">
      {/* Lottie animation */}
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
        <Lottie
          animationData={Spin}
          loop={true}
          className="w-full"
          aria-label="Loading animation"
        />
      </div>

      {/* Text Message */}
      <h2 className="text-4xl font-serif text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        <span>Programmer Life</span> <br />
        <span>THANK YOU</span>
      </h2>
    </div>
  );
}
