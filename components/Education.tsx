"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  const education = [
    {
      institution: "Siddhartha Institute of Science and Technology",
      degree: "B.Tech (AI & ML)",
      score: "CGPA: 9.45",
      year: "Expected Graduation: 2027",
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate",
      score: "Score: 943/1000",
      year: "Completed",
    },
    {
      institution: "Prabhu English Medium High School",
      degree: "SSC",
      score: "CGPA: 9.32",
      year: "Completed",
    },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education <span className="text-gradient">Timeline</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-4 border-primary/20 ml-6 md:ml-0 md:border-none space-y-12">
            {/* Middle line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2" />

            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center md:justify-between w-full ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute -left-[30px] md:static md:left-auto md:w-12 md:h-12 w-10 h-10 bg-primary rounded-full flex items-center justify-center z-10 shadow-xl shadow-primary/30 border-4 border-background md:-translate-x-0">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>

                <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                    <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                    <div className="text-primary font-medium mb-3">{edu.degree}</div>
                    <div className="flex flex-col gap-1 text-sm text-slate-500">
                      <div className="flex items-center gap-2 md:justify-start">
                        <span className="font-semibold text-foreground bg-secondary px-2 py-1 rounded">{edu.score}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2 md:justify-start">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
