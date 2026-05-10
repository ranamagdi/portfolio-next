'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { PersonalInfo } from '@/lib/types';

interface HeroSectionProps {
  personalInfo: PersonalInfo | null;
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  },
};

export function HeroSection({ personalInfo }: HeroSectionProps) {
  const roles = [
    'Frontend Developer',
    'React Developer',
    'Vue Developer',
    'Nuxt Developer',
    'Next.js Developer',
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 mt-14"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-400/20 dark:bg-violet-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-purple-300/10 dark:bg-purple-700/5 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Greeting badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 bg-violet-50 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-400 text-sm font-medium px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.p variants={item} className="text-base font-medium text-gray-500 dark:text-gray-400 mb-2 tracking-widest uppercase">
          👋 Hello, I&apos;m
        </motion.p>
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {personalInfo?.name ?? 'Rana Magdy'}
          </span>
        </motion.h1>

        {/* Title / Roles Cycling */}
        <motion.div
          variants={item}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300 flex items-center gap-2"
            >
              {roles[roleIndex]}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse" }}
                className="w-1 h-8 bg-violet-500 inline-block"
              />
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Short bio */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo?.shortBio ??
            'Frontend Developer focused on building scalable, high-performance applications using React and Vue ecosystems. Passionate about clean architecture, performance optimization, and crafting seamless user experiences.'}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          {personalInfo?.cvUrl && (
            <motion.a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-violet-500/30 transition-all duration-200"
            >
              <Download size={17} />
              Download CV
            </motion.a>
          )}
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-7 py-3.5 rounded-xl hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-500 dark:hover:text-violet-400 shadow-sm transition-all duration-200"
          >
            <Mail size={17} />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          variants={item}
          onClick={scrollToProjects}
          whileHover={{ y: 4 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="mt-20 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-violet-500 dark:hover:text-violet-400 transition-colors mx-auto"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={18} />
        </motion.button>
      </motion.div>
    </section>
  );
}
