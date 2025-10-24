import React from "react";
import { Vortex } from "@/components/ui/vortex";
import Hero from "./Hero.jsx";

export function VortexDemo() {
  return (
    <div className="  relative h-screen w-full bg-black overflow-hidden">
      {/* Vortex Background Layer */}
      <div className="absolute inset-0 z-0">
        <Vortex
          backgroundColor="black"
          className="w-full h-full"
        />
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <Hero />
      </div>
    </div>
  );
}
