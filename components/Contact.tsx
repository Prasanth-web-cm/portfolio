"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-300">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:prasanthsaiponna@gmail.com"
                className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Email</div>
                  <div className="font-medium">prasanthsaiponna@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/prasanthsai-ponna-241b652bb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#0077b5]/10 rounded-full flex items-center justify-center group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5 text-[#0077b5] group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">LinkedIn</div>
                  <div className="font-medium">View Profile</div>
                </div>
              </a>

              <a
                href="https://github.com/Prasanth-web-cm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">GitHub</div>
                  <div className="font-medium">Prasanth-web-cm</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-secondary/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Your Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-secondary/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full bg-secondary/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Project Inquiry, Collaboration, or Just Saying Hi"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-secondary/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Hello Prasanth, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white transition-all ${
                  isSuccess ? "bg-accent" : "bg-primary hover:bg-blue-600"
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
