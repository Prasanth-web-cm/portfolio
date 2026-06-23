"use client";

import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", progress: 95 },
        { name: "CSS", progress: 90 },
        { name: "JavaScript", progress: 85 },
        { name: "React / Next.js", progress: 80 },
        { name: "Responsive Design", progress: 90 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", progress: 90 },
        { name: "Node.js", progress: 80 },
        { name: "Express.js", progress: 75 },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", progress: 85 },
        { name: "SQL", progress: 80 },
      ],
    },
    {
      title: "AI & ML",
      skills: [
        { name: "Machine Learning", progress: 85 },
        { name: "AI Tools", progress: 90 },
        { name: "Data Analysis", progress: 80 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", progress: 85 },
        { name: "GitHub", progress: 90 },
        { name: "VS Code", progress: 95 },
        { name: "Vercel", progress: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-primary/5 dark:bg-primary/10 skew-y-3 transform origin-top-left" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                        className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
