"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Hero from "./Hero.jsx";

export function SparklesPreview() {
  return (
    <div className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-none">
      {/* Sparkle Effects */}
      <div className="w-[40rem] h-40 relative z-0">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core Sparkles */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient Mask */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>

      {/* Hero Content on top */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <Hero />
      </div>
    </div>
  );
}
