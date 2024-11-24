"use client";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import Animation from "@/public/Animation.json";

export default function NotFound() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client side
  }, []);

  if (!isClient) {
    return null; // Return null during server-side rendering
  }

  return (
    <div className="bg-while dark:bg-dark flex flex-col items-center justify-center min-h-screen">
      <div className="w-1/2 md:w-1/3">
        <Lottie animationData={Animation} loop={true} className="w-full" />
      </div>
    </div>
  );
}
