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
import { TypeAnimation } from 'react-type-animation';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    "Solidity", "React", "Node.js", "Express", "TypeScript", "Web3", 
    "Next.js", "Blockchain", "Smart Contracts", "IPFS", "Foundry", 
    "Wagmi", "Viem", "Ethers.js", "Ethereum", "Go", "Rust", "C/C++",
    "Bash", "HTML/CSS", "Git/Github", "GDScript", "TailwindCSS"
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
              <DialogContent className="bg-gray-900/95 text-white border-gray-800 max-w-4xl max-h-[85vh] overflow-hidden backdrop-blur-xl">
                <DialogHeader className="flex flex-row justify-between items-center sticky top-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 p-4">
                  <DialogTitle className="text-2xl font-semibold text-blue-400">Resume</DialogTitle>
                  <a 
                    href="https://drive.google.com/file/d/1sORT82_JJMaXgAfC5YMfjurJaWtDOqjW/view?usp=sharing" 
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 rounded-lg transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-blue-500/20"
                  >
                    <FileText className="w-4 h-4" />
                    Download PDF
                  </a>
                </DialogHeader>
                <div className="overflow-y-auto max-h-[calc(85vh-80px)] p-6 space-y-8 custom-scrollbar">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-300">Experience</h3>
                    <div className="space-y-6">
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                        <h4 className="font-medium text-lg text-cyan-300">Blockchain Developer Intern - Alpha Vault</h4>
                        <p className="text-gray-400 text-sm mb-3">Nov 2023 - Jan 2024</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          <li>Developed blockchain smart contracts and back-end APIs</li>
                          <li>Performed testing using Hardhat framework, covering 100% test coverage.</li>
                          <li>Deployed across 7 different blockchains.</li>
                          <li>APIs developed to track users&apos; DCA transaction and transaction history</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Adding Achievements section before Projects */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-300">Achievements</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>ETHGlobal Agentic Ethereum Hackathon - Coinbase AgentKit Pool Prize Winner for Defi-Dojo</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>StackTooDeep Hackathon Winner for Decentralized Social Media Project</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>StackTooDeep V2.0 Hackathon Winner for Aura Land Project</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Created Crypto Advisor at the MIRA Hackathon with a top-tier, user-friendly interface</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>Blockathon Hackathon Winner for Multi-Signature Wallet Project</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-300">Projects</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Project cards */}
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                        <h4 className="font-medium text-lg text-cyan-300 mb-2">Decentralised Social Media</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                          <p>- Developed a Decentralized Social Media where users can share tweets and interact with others.</p>
                          <p>- Integrated a Twitter timeline scraper into the frontend to display live feeds.</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                        <h4 className="font-medium text-lg text-cyan-300 mb-2">Defi-Dojo</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                          <p>- Built a Gamified DeFi education platform integrating AI tutors, risk-free simulations, and NFT rewards.</p>
                          <p>- Developed a sandboxed DeFi environment with Autonome, The Graph for strategy validation and real-time data.</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                        <h4 className="font-medium text-lg text-cyan-300 mb-2">Aura-Land</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                          <p>- Developed a multiplayer NFT game with ERC-20 in-game economy, enabling players to mint, trade, battle NPCs,
                          and earn Soulbound Tokens (SBTs).</p>
                          <p>- Implemented cross-chain NFT transfers via burn-and-mint logic and real-time multiplayer interactions with Socket.io.</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                        <h4 className="font-medium text-lg text-cyan-300 mb-2">Crypto Advisor</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                          <p>- Built a cryptocurrency investment platform offering personalized advice & diversification strategies with AI analysis.</p>
                          <p>- Integrated Mira Flows for AI-driven investment insights and CoinGecko API for real-time market data.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-300">Skills</h3>
                    <div className="flex flex-wrap gap-2 pb-4">
                      {[
                        "Python", "C/C++", "JavaScript", "TypeScript", 
                        "Go", "Solidity", "React", "Node.js", "Web3.js",
                        "Hardhat", "Foundry", "Express", "Next.js", "TailwindCSS"
                      ].map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20 hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <a href="https://github.com/arnavkirti" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/arnav-kirti-49616a1b9/" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:arnav_k@mt.iitr.ac.in" className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </nav>

        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-2xl text-gray-400">Hi, I am</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Arnav Kirti
            </h1>
            <div className="h-20"> {/* Fixed height container to prevent layout shift */}
              <TypeAnimation
                sequence={[
                  'A Blockchain Developer',
                  2000,
                  'A Full Stack Engineer',
                  2000,
                  'A Smart Contract Developer',
                  2000,
                  'A Web3 Enthusiast',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-2xl md:text-3xl text-blue-400 font-medium"
                repeat={Infinity}
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-gray-800/50 shadow-xl">
            Passionate about building decentralized solutions and innovative web applications. 
            Specializing in blockchain technology, smart contracts, and full-stack development.
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
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Hardhat</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Web3</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image 
                  src="/helixscan.png" 
                  alt="Helix Scan Landing Page" 
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <Link href="https://github.com/arnavkirti/HelixScan" target="_blank" className="hover:text-cyan-400 transition-colors">
                  <h4 className="text-xl font-semibold text-cyan-300">HelixScan</h4>
                </Link>
                <p className="text-gray-300">A Blockchain Indexing Platform: A developer platform that auto-syncs NFT/token data to your Postgres DB via @heliuslabs. Next.js + Go backend.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">GoLang</span>
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
            <a href="https://instagram.com/arnav.kirti" className="hover:text-cyan-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://x.com/ArnavKirti" className="hover:text-cyan-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <HoverCard>
            <HoverCardTrigger>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20 font-medium flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Get in Touch
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 border border-blue-500/30 w-72 p-5 backdrop-blur-xl shadow-xl shadow-blue-500/10 rounded-xl">
              <h4 className="text-blue-400 font-medium mb-3 pb-2 border-b border-gray-700/50">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-200 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-500/10 group">
                  <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <Mail className="w-4 h-4 text-blue-300" />
                  </div>
                  <a href="mailto:arnav_k@mt.iitr.ac.in" className="text-sm group-hover:translate-x-1 transition-transform">arnav_k@mt.iitr.ac.in</a>
                </div>
                <div className="flex items-center gap-3 text-gray-200 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-500/10 group">
                  <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <Phone className="w-4 h-4 text-blue-300" />
                  </div>
                  <a href="tel:+917599988813" className="text-sm group-hover:translate-x-1 transition-transform">+917599988813</a>
                </div>
                <div className="flex items-center gap-3 text-gray-200 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-500/10 group">
                  <div className="bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <Linkedin className="w-4 h-4 text-blue-300" />
                  </div>
                  <a href="https://www.linkedin.com/in/arnav-kirti-49616a1b9/" className="text-sm group-hover:translate-x-1 transition-transform">LinkedIn Profile</a>
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