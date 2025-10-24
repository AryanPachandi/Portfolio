"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Menu, X, Code, Palette, Zap } from 'lucide-react';
import {PlaceholdersAndVanishInputDemo} from './Input.jsx'

export function Contact() {
  const words = [
    {
      text: "Lets" ,
    },
    {
      text: "Create",
    },
    {
      text: "Together",
      className: "text-blue-500 dark:text-blue-500",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">

      <TypewriterEffectSmooth words={words} />
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
            <PlaceholdersAndVanishInputDemo/>
    </div>

  );
}
