"use client";

import { motion } from "framer-motion";
import { Brain, Code, Rocket, BookOpen } from "lucide-react";

export function About() {
  const cards = [
    { icon: Brain, title: "Problem Solving", desc: "Analytical approach to complex issues" },
    { icon: Rocket, title: "Continuous Learning", desc: "Always exploring new technologies" },
    { icon: Code, title: "Team Collaboration", desc: "Effective communication & teamwork" },
    { icon: BookOpen, title: "Academic Excellence", desc: "CGPA: 9.45 | B.Tech AI & ML" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              I am a passionate Computer Science student specializing in Artificial Intelligence and Machine Learning. I enjoy building innovative web applications, AI-powered solutions, and user-centric digital experiences. 
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
              My goal is to leverage technology to solve real-world problems and contribute to impactful software development. With an expected graduation in 2027, I am constantly pushing my boundaries to master both frontend and backend architectures, alongside intelligent algorithms.
            </p>
            
            <div className="flex gap-4 pt-4">
              <div className="glass p-4 rounded-2xl flex-1 text-center hover:-translate-y-2 transition-transform cursor-pointer">
                <div className="text-3xl font-bold text-primary mb-1">9.45</div>
                <div className="text-sm font-medium text-slate-500">CGPA</div>
              </div>
              <div className="glass p-4 rounded-2xl flex-1 text-center hover:-translate-y-2 transition-transform cursor-pointer">
                <div className="text-3xl font-bold text-accent mb-1">2027</div>
                <div className="text-sm font-medium text-slate-500">Graduation</div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors group cursor-default"
              >
                <div className="bg-primary/10 dark:bg-primary/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-slate-500 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
