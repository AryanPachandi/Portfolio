import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Menu, X, Code, Palette, Zap } from 'lucide-react';
import Navigation from './Navigation.jsx';
import { VortexDemo } from './VortexBackground.jsx';
import {WavyBackgroundDemo} from './WavyBackground.jsx'
import {WobbleCardDemo} from './Projects.jsx'
// import Contact  from './Contact.jsx';
import {TypewriterEffectSmoothDemo} from './Contact.jsx'

const Portfolio = () => {

  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

    const projects = [

      {
        title: "APT ",
        description: "A simple JWT library from scratch in JavaScript for signing, verifying, and decoding tokens using HS256.",
        tech: ["javascript" , "oops" , "npm"],
        image: "bg-gradient-to-br from-purple-500 to-pink-600",
        link: "https://www.npmjs.com/package/pachanditoken"
      },
      // {
      //   title: "AI-Powered Notes",
      //   description: "A modern analytics dashboard with real-time data visualization and machine learning insights.",
      //   tech: ["React", "TypeScript", "Python"],
      //   image: "bg-gradient-to-br from-purple-500 to-pink-600",
      //   link: "https://github.com/AryanPachandi/ai-notes"
      // },
      {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with advanced filtering, payment integration, and inventory management.",
        tech: ["Node.js", "JWT(Auth)","MongoDB"],
        image: "bg-gradient-to-br from-blue-500 to-cyan-600",
        link: "https://github.com/AryanPachandi/Basic__E-commerce_app"
      },
      {
        title: "Yashomangal Ganpati Mandal – Ganesh Utsav 2025 Celebrations",
        description: "Yashomangal Society’s Ganpati Mandal welcomes you to our annual Ganesh Utsav. Explore schedules, rituals, cultural events, and highlights of our community celebration.",
        tech: ["React Native", "Redux", "Node.js"],
        image: "bg-gradient-to-br from-emerald-500 to-teal-600",
        link: "https://github.com/AryanPachandi/society-ganpati-website"
      }
    ];

  const skills = [
    { name: "Full Stack Development", icon: Code, level: 95 },
    { name: "Devops", icon: Palette, level: 88 },
    { name: "Java", icon: Zap, level: 92 }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}

        <Navigation/>
      {/* Mobile Menu */}


      {/* Hero Section */}

      <VortexDemo/>
      {/* <WavyBackgroundDemo/> */}


      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer , creating digital solutions that combine beautiful design with powerful functionality. My journey spans from pixel-perfect frontend interfaces to robust backend architectures.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest design trends, contributing to open-source projects, or mentoring aspiring developers in my community.
              </p>
            </div>

            <div className="space-y-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-purple-400" />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105 origin-left"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

<section id="projects" className="py-32 relative">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
    </div>
     <WobbleCardDemo projects={projects}/>

  </div>
</section>
      {/* Contact Section */}
      {/* <Contact/> */}
      <TypewriterEffectSmoothDemo/>
      {/* <section id="contact" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-12" />

          <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I'd love to hear about your ideas and discuss how we can work together.
          </p>

          <div className="flex justify-center space-x-8 mb-16">
            {[
              { icon: Mail, label: 'Email', href: 'mailto:pachandiaryan@gmail.com' },
              { icon: Github, label: 'GitHub', href: 'https://github.com/AryanPachandi/' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aryan-pachandi-bb7b6822a/' }
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="group p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <Icon className="w-8 h-8 text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
                </a>
              );
            })}
          </div>

          <button className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Portfolio Aryan pachandi.
          </p>
          <p className="text-gray-400">
            Crafted with passion and innovation.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;

