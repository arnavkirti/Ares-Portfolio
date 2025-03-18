"use client"
import React from 'react';
import { Code2, Dumbbell, Film } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1120] via-[#111827] to-black text-white">
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-32">
        {/* Header */}
        
        {/* Main Content */}
        <div className="space-y-16">
          {/* About Me Section */}
          <section className="space-y-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-gray-800/50">
              <p className="text-gray-300 leading-relaxed text-lg">
                I&aptos;m a Blockchain Developer and Full Stack Engineer currently studying at IIT Roorkee. 
                With experience in developing smart contracts and decentralized applications, 
                I&aptos;m passionate about building the future of Web3 technology. My work spans across 
                multiple blockchain networks including Ethereum, Polygon, and Avalanche.
              </p>
            </div>
          </section>

          {/* Tech Journey Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Code2 className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-semibold text-cyan-300">Tech Journey</h2>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-gray-800/50">
              <p className="text-gray-300 leading-relaxed">
                My journey in technology began with a fascination for blockchain and its potential to revolutionize digital interactions. 
                I&aptos;ve dedicated myself to mastering both blockchain development and full-stack engineering, 
                working with cutting-edge technologies and contributing to innovative projects.
              </p>
            </div>
          </section>

          {/* Taekwondo Achievement Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Dumbbell className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-semibold text-cyan-300">Martial Arts Journey</h2>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-gray-800/50">
              <p className="text-gray-300 leading-relaxed">
                Beyond the digital realm, I&aptos;m a dedicated Taekwondo practitioner with three consecutive national medals. 
                This journey has taught me discipline, perseverance, and the importance of continuous improvement. 
                The principles I&aptos;ve learned in martial arts - focus, dedication, and strategic thinking - 
                directly translate to my approach in technology and problem-solving.
              </p>
            </div>
          </section>

          {/* Entertainment & Interests Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Film className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-semibold text-cyan-300">Entertainment & Interests</h2>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-gray-800/50">
              <p className="text-gray-300 leading-relaxed">
                I&aptos;m an avid anime enthusiast and web series connoisseur. These stories inspire my creativity 
                and problem-solving approaches. Some of my favorite anime series include [your favorites], 
                while shows like [your favorite web series] have influenced my perspective on storytelling 
                and user experience in technology.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-cyan-300">Education</h2>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-gray-800/50">
              <h3 className="text-xl text-cyan-400">Indian Institute of Technology, Roorkee</h3>
              <p className="text-gray-300 mt-2">Bachelor of Technology</p>
              <p className="text-gray-400">2023 - 2027</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;