import React from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { LayoutTextFlipDemo } from "./Layout.jsx";

export default function Hero() {
  return (
    <>
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center flex-grow">

          {/* LayoutTextFlipDemo and CV button in the center */}
          <div className="mb-8">
            <LayoutTextFlipDemo />
          </div>

          {/* CV button */}
          {/* <a
            href="/Aryan_Pachandi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 border border-white/20 rounded-full text-white font-semibold backdrop-blur-sm hover:border-white/40 transition-all duration-300 hover:scale-105 mb-8"
          >
            Download CV
            <ExternalLink className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a> */}

          {/* Text at the bottom */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Solving complex technical challenges with full-stack expertise and production-ready solutions.
          </p>

          {/* Scroll down indicator */}
          <div className="animate-bounce">
            scroll down
            <ChevronDown className="w-8 h-8 mx-auto text-white/60" />
          </div>

        </div>
      </section>
    </>
  );
}
