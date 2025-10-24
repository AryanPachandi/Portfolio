import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Menu, X, Code, Palette, Zap } from 'lucide-react';



export default function Navigation(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      return(
        <>
          <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Aryan Pachandi
                  </div>

                  <div className="hidden md:flex space-x-8">
                    {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="relative text-gray-300 hover:text-white transition-all duration-300 group"
                        onClick={() => setActiveSection(item.toLowerCase())}
                      >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                      </a>
                    ))}
                  </div>

                  <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </nav>
            {isMenuOpen && (
                    <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden">
                      <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
                        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                          <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white hover:text-purple-400 transition-colors duration-300"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveSection(item.toLowerCase());
                            }}
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
        </>
      );

}
