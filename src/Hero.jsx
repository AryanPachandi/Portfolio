import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Menu, X, Code, Palette, Zap } from 'lucide-react';
// import {TextRevealCardPreview} from "./TextRevealCardPreview.jsx";
import {LayoutTextFlipDemo} from "./Layout.jsx"
import {SparklesPreview} from "./Background.jsx"


export default function Hero(){
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8">

            <LayoutTextFlipDemo/>


            {/* <br/>  */}
            {/* <TextRevealCardPreview/> */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with cutting-edge technology and innovative design
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <a
  href="/Aryan_Pachandi_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group px-8 py-4 border border-white/20 rounded-full text-white font-semibold backdrop-blur-sm hover:border-white/40 transition-all duration-300 hover:scale-105"
>
  Download CV
  <ExternalLink className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
</a>

          </div>

          <div className="animate-bounce">
            scroll down
            <ChevronDown className="w-8 h-8 mx-auto text-white/60" />
          </div>
        </div>
      </section>

    </>
  );
}
