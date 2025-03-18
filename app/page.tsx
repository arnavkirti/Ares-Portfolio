"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, FileText, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from 'next/link';
import Image from 'next/image'
import { Instagram, Twitter, Phone } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    "Solidity", "React", "Node.js", "TypeScript", "Web3", 
    "Next.js", "Blockchain", "Smart Contracts", "IPFS"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1120] via-[#111827] to-black text-white">
      <div className={`max-w-6xl mx-auto px-4 pt-20 pb-32 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <nav className="flex justify-between items-center mb-20 backdrop-blur-lg bg-black/10 p-4 rounded-2xl border border-gray-800/50">
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AK</h2>
          <div className="flex gap-6 items-center">
            {/* About Me Link */}
            <Link href="/about" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">About Me</span>
            </Link>

            {/* Resume Dialog */}
            <Dialog>
              <DialogTrigger className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <FileText className="w-5 h-5" />
                <span className="hidden sm:inline">Resume</span>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 text-white border-gray-800 max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Resume</DialogTitle>
                </DialogHeader>
                <div className="py-4 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Experience</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Blockchain Developer Intern - Alpha Vault</h4>
                        <p className="text-gray-400">Nov 2023 - Jan 2024</p>
                        <ul className="list-disc list-inside text-gray-300 mt-2">
                          <li>Developed blockchain smart contracts and back-end APIs</li>
                          <li>Performed testing using Hardhat framework</li>
                          <li>Deployed across 7 different blockchains</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Projects</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Defi-Dojo</h4>
                        <p className="text-gray-300">Built a Gamified DeFi education platform with AI tutors</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Aura-Land</h4>
                        <p className="text-gray-300">Developed a multiplayer NFT game with ERC-20 economy</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Skills</h3>
                    <p className="text-gray-300">Python, C/C++, JavaScript, TypeScript, Go, Solidity, React, Node.js, Web3.js</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <a href="https://github.com/arnavkirti" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:arnav_k@mt.iitr.ac.in" className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </nav>

        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
            Arnav Kirti
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-gray-800/50">
            Blockchain Developer & Full Stack Engineer crafting decentralized solutions and web applications
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mt-32 space-y-8">
          <h3 className="text-2xl font-semibold flex items-center gap-2 text-cyan-300">
            <Terminal className="w-6 h-6" />
            Featured Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-xl border-gray-700/50 hover:border-blue-500 transition-all duration-300 group overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/defi-dojo.png" 
                  alt="DeFi-Dojo Landing Page" 
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <Link href="https://github.com/arnavkirti/DeFi-Dojo" target="_blank" className="hover:text-cyan-400 transition-colors">
                  <h4 className="text-xl font-semibold text-cyan-300">Defi-Dojo</h4>
                </Link>
                <p className="text-gray-300">Gamified DeFi education platform with AI tutors and risk-free simulations</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-cyan-500/10 text-blue-400 rounded-full text-sm border border-cyan-500/20">Next.js</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20">AI</span>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm border border-emerald-500/20">DeFi</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/aura-land.png" 
                  alt="Aura-Land Landing Page" 
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <Link href="https://github.com/arnavkirti/Aura-Land" target="_blank" className="hover:text-cyan-400 transition-colors">
                  <h4 className="text-xl font-semibold text-cyan-300">Aura-Land</h4>
                </Link>
                <p className="text-gray-300">Multiplayer NFT game with ERC-20 in-game economy and cross-chain transfers</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">NFT</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Game</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Web3</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/crypto-advisor.png" 
                  alt="Crypto-Advisor Landing Page" 
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <Link href="https://github.com/arnavkirti/Crypto-Advisor" target="_blank" className="hover:text-cyan-400 transition-colors">
                  <h4 className="text-xl font-semibold text-cyan-300">Crypto-Advisor</h4>
                </Link>
                <p className="text-gray-300">This is a AI-driven Crypto Investment Advisor that leverages MIRA Flows.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">AI</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Finance</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Web3</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/fit-knight.png" 
                  alt="Fit Knight Landing Page" 
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <Link href="https://github.com/arnavkirti/Fit-Knight" target="_blank" className="hover:text-cyan-400 transition-colors">
                  <h4 className="text-xl font-semibold text-cyan-300">Fit Knight</h4>
                </Link>
                <p className="text-gray-300">FitKnight is a full-stack fitness app designed to connect users with fitness buddies and groups based on location, provide a seamless group chat experience, and offer a personalized dashboard and notification system.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">WebSockets</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Express</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/decSoc.png" 
                  alt="Decentralised Social Media Landing Page" 
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <Link href="https://github.com/arnavkirti/Decentralized-social-media" target="_blank" className="hover:text-cyan-400 transition-colors">
                  <h4 className="text-xl font-semibold text-cyan-300">Decentralised Social Media</h4>
                </Link>
                <p className="text-gray-300">This is a decentralised social media with the following features such as adding text posts, toggle of dark mode, a to-do app within the app, a election poll and feed of tweets and feed of embed tweets.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"></span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Web3</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-32">
          <h3 className="text-2xl font-semibold mb-8 text-cyan-300">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className={`px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-cyan-300 hover:border-cyan-500/50 transition-all duration-300 border border-gray-700/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <footer className="max-w-6xl mx-auto px-4 py-8 mt-20 border-t border-gray-800/50 backdrop-blur-lg bg-black/10">
        <div className="flex justify-between items-center">
          <div className="flex gap-6">
            <a href="https://instagram.com" className="hover:text-cyan-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://x.com" className="hover:text-cyan-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <HoverCard>
            <HoverCardTrigger>
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20">
                Get in Touch
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="bg-gradient-to-br from-gray-900/95 via-gray-900/95 to-black/95 border border-cyan-500/20 w-64 p-4 backdrop-blur-xl shadow-xl shadow-cyan-500/10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:arnav_k@mt.iitr.ac.in" className="text-sm">arnav_k@mt.iitr.ac.in</a>
                </div>
                <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+1234567890" className="text-sm">+1234567890</a>
                </div>
                <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10">
                  <Linkedin className="w-4 h-4" />
                  <a href="https://linkedin.com" className="text-sm">LinkedIn Profile</a>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;