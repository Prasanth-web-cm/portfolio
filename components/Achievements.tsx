"use client";

import { motion } from "framer-motion";
import { Award, Star, Code2, Sparkles } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintained a high CGPA of 9.45 in B.Tech AI & ML, demonstrating strong foundational knowledge.",
      icon: Award,
    },
    {
      title: "AI Project Development",
      description: "Successfully developed and deployed an AI Student Management System.",
      icon: Sparkles,
    },
    {
      title: "Full Stack Mastery",
      description: "Built scalable MERN stack applications integrated with modern design principles.",
      icon: Code2,
    },
    {
      title: "Continuous Learning",
      description: "Constantly upgrading skills through building practical projects and learning new tech stacks.",
      icon: Star,
    },
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-accent/5 dark:bg-accent/10 -skew-y-3 transform origin-bottom-right" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Key <span className="text-gradient">Achievements</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-accent/10 dark:bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
