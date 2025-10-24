import{ FaJsSquare, FaNodeJs, FaGitAlt, FaReact, FaDocker, FaNpm , FaJava  , FaAws , FaGithub ,FaCloud, FaAngular } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiKubernetes,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiMoonrepo,
  SiTurborepo,
  SiLinux,
  SiTailwindcss

} from "react-icons/si";


export default function Skills () {
  return (
    <>
      <div className="h-[60rem] flex flex-col justify-center items-center px-6">
        {/* Section Title */}
        <h2 className="mb-10 sm:mb-20 text-3xl sm:text-5xl font-bold text-center text-white">
          Technologies I Work With
        </h2>

        {/* Skills and Logos Section */}
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {/* Introductory Text */}
          <div className="text-center">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I specialize in creating modern, scalable web applications using a variety of technologies. Here's a snapshot of the tools I use:
            </p>
          </div>

          {/* Logos Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* JavaScript Logo */}
            <div className="flex flex-col items-center">
              <FaJsSquare className="w-16 h-16 text-yellow-500 mb-3" />
              <span className="text-white font-medium">JavaScript</span>
            </div>
             <div className="flex flex-col items-center">
              <SiTypescript  className="w-16 h-16 text-blue-500 mb-3" />
              <span className="text-white font-medium">Typescript</span>
            </div>
            {/* Node.js Logo */}
            <div className="flex flex-col items-center">
              <FaNodeJs className="w-16 h-16 text-green-500 mb-3" />
              <span className="text-white font-medium">Node.js</span>
            </div>

            {/* Git Logo */}
            <div className="flex flex-col items-center">
              <FaGitAlt className="w-16 h-16 text-orange-500 mb-3" />
              <span className="text-white font-medium">Git</span>
            </div>

            {/* React Logo */}
            <div className="flex flex-col items-center">
              <FaReact className="w-16 h-16 text-blue-500 mb-3" />
              <span className="text-white font-medium">React</span>
            </div>
           <div className="flex flex-col items-center">
              <FaAngular  className="w-16 h-16 text-red-500 mb-3" />
              <span className="text-white font-medium">Angularjs</span>
            </div>
            {/* Docker Logo */}
            <div className="flex flex-col items-center">
              <FaDocker className="w-16 h-16 text-blue-500 mb-3" />
              <span className="text-white font-medium">Docker</span>
            </div>

            {/* NPM Logo */}
            <div className="flex flex-col items-center">
              <FaNpm className="w-16 h-16 text-red-500 mb-3" />
              <span className="text-white font-medium">NPM</span>
            </div>

            {/* TypeScript Logo */}
             <div className="flex flex-col items-center">
              <FaJava  className="w-16 h-16 text-red-500 mb-3" />
              <span className="text-white font-medium">Java</span>
            </div>
             <div className="flex flex-col items-center">
              <SiTailwindcss  className="w-16 h-16 text-blue-500 mb-3" />
              <span className="text-white font-medium">Tailwind</span>
            </div>
             <div className="flex flex-col items-center">
              <FaAws  className="w-16 h-16 text-white-500 mb-3" />
              <span className="text-white font-medium">Aws</span>
            </div>
             <div className="flex flex-col items-center">
              <FaCloud  className="w-16 h-16 text-blue-500 mb-3" />
              <span className="text-white font-medium">Cloud</span>
            </div>
             <div className="flex flex-col items-center">
              <FaGithub  className="w-16 h-16 text-white-500 mb-3" />
              <span className="text-white font-medium">Git Hub</span>
            </div>
               <div className="flex flex-col items-center">
              <SiKubernetes  className="w-16 h-16 text-blue-500 mb-3" />
              <span className="text-white font-medium">Kubernetes</span>
            </div>
              <div className="flex flex-col items-center">
              <SiNextdotjs  className="w-16 h-16 text-black-500 mb-3" />
              <span className="text-white font-medium">Next.js</span>
            </div>

            <div className="flex flex-col items-center">
              <SiMongodb  className="w-16 h-16 text-green-500 mb-3" />
              <span className="text-white font-medium">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMysql  className="w-16 h-16 text-blue-500 mb-3" />
              <span className="text-white font-medium">MySql</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPostgresql  className="w-16 h-16 text-blue-500 mb-3" />
              <span className="text-white font-medium">Postgresql</span>
            </div>
              <div className="flex flex-col items-center">
              <SiMoonrepo  className="w-16 h-16 text-blue-500 mb-3" />
              <span className="text-white font-medium">Monorepo</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTurborepo  className="w-16 h-16 text-red-500 mb-3" />
              <span className="text-white font-medium">Turborepo</span>
            </div>
             <div className="flex flex-col items-center">
              <SiLinux  className="w-16 h-16 text-black-500 mb-3" />
              <span className="text-white font-medium">Linux</span>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}
