"use client"
import React from 'react';
import { Code2, Dumbbell, Film, GraduationCap, User } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1120] via-[#111827] to-black text-white">
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-32">
        <motion.div 
          className="space-y-16"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* About Me Section */}
          <motion.section className="space-y-6" variants={fadeInUp}>
            <div className="flex items-center gap-4 mb-8">
              <User className="w-10 h-10 text-cyan-400" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h1>
            </div>
            <div className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-black/20">
              <p className="text-gray-300 leading-relaxed text-lg">
                Hello! I am Arnav Kirti and I am a second-year student at IIT Roorkee with a passion for Blockchain and Technology currently building cool things and trying to win hackathons. 
                With a deep fascination for Web3 technology, I specialize in developing smart contracts and decentralized applications 
                across multiple blockchain networks including Ethereum, Polygon, and Avalanche. My goal is to contribute to the 
                future of decentralized technology while creating innovative solutions that make a difference.
              </p>
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section className="space-y-6" variants={fadeInUp}>
            <div className="flex items-center gap-4">
              <GraduationCap className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-semibold text-cyan-300">Education</h2>
            </div>
            <div className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-black/20">
              <h3 className="text-xl text-cyan-400">Indian Institute of Technology, Roorkee</h3>
              <p className="text-gray-300 mt-2">Bachelor of Technology</p>
              <p className="text-gray-400">2023 - 2027</p>
            </div>
          </motion.section>

          {/* Tech Journey Section */}
          <motion.section className="space-y-6" variants={fadeInUp}>
            <div className="flex items-center gap-4">
              <Code2 className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-semibold text-cyan-300">Tech Journey</h2>
            </div>
            <div className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-black/20 group">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  My journey in technology began with a fascination for blockchain and its potential to revolutionize digital interactions. 
                  I&apos;ve dedicated myself to mastering both blockchain development and full-stack engineering, 
                  working with cutting-edge technologies and contributing to innovative projects. I am constantly trying to learn new things in tech world and beyond. 
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-700/50">
                  {['Smart Contracts', 'DeFi', 'Web3', 'Full Stack'].map((skill) => (
                    <div key={skill} className="text-center p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Taekwondo Achievement Section */}
          <motion.section className="space-y-6" variants={fadeInUp}>
            <div className="flex items-center gap-4">
              <Dumbbell className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-semibold text-cyan-300">Martial Arts Journey</h2>
            </div>
            <div className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-black/20">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Beyond the digital realm, I&apos;m a dedicated Taekwondo practitioner with three consecutive national medals. 
                  This journey has taught me discipline, perseverance, and the importance of continuous improvement. It&apos;s feels like forever since i have been practising this sport. 
                </p>
                <div className="flex gap-4 pt-4 border-t border-gray-700/50">
                  <div className="text-center p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 flex-1">
                    3x National Medalist
                  </div>
                  <div className="text-center p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex-1">
                    Black Belt Dan-II
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Entertainment Section with your actual favorites */}
          <motion.section className="space-y-6" variants={fadeInUp}>
            <div className="flex items-center gap-4">
              <Film className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-semibold text-cyan-300">Entertainment & Interests</h2>
            </div>
            <div className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-black/20">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  I&apos;m an avid anime enthusiast and web series connoisseur. These stories inspire my creativity 
                  and problem-solving approaches in unique ways. When I&apos;m not coding or practicing martial arts, 
                  you&apos;ll find me exploring new series or rewatching classics.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-cyan-300 font-medium">Favorite Anime</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Attack on Titan', 'Berserk', 'Bleach', 'Demon Slayer', 'Jujutsu Kaisen', 'Solo Leveling', 'Monster'].map((anime) => (
                        <span key={anime} className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20">
                          {anime}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-cyan-300 font-medium">Favorite Shows</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Breaking Bad', 'Better Call Saul', 'Hannibal', 'True Detective', 'Mindhunters', 'Game of Thrones'].map((show) => (
                        <span key={show} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20">
                          {show}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  These series have taught me valuable lessons about character development, complex problem-solving,
                  and the importance of attention to detail - skills that I apply in my technical projects and creative endeavors.
                </p>
              </div>
            </div>
          </motion.section>

          
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;