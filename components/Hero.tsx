"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Download, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
      </div>
      
      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-block">
            <span className="glass px-4 py-2 rounded-full text-sm font-medium text-primary">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <br />
            <span className="text-gradient">Ponna Prasanth Sai</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-semibold text-muted-foreground h-[40px]">
            <Typewriter
              words={["AI & Machine Learning Engineer", "Full Stack Developer", "Tech Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
            Building intelligent solutions through AI, Machine Learning, and Modern Web Technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="group flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse" />
            <div className="relative w-full h-full rounded-full border-[8px] border-white/10 overflow-hidden glass shadow-2xl">
              <Image
                src="/profile.jpeg"
                alt="Ponna Prasanth Sai"
                fill
                priority
                className="object-cover hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 300px, 450px"
              />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -left-6 glass p-4 rounded-xl shadow-xl"
            >
              <div className="font-bold text-primary">React & Next.js</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-8 glass p-4 rounded-xl shadow-xl"
            >
              <div className="font-bold text-accent">Python & AI</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
