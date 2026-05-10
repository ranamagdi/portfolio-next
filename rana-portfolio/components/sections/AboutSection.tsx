'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SkillBadge } from '@/components/ui/SkillBadge';
import { PersonalInfo, Skill } from '@/lib/types';

interface AboutSectionProps {
  personalInfo: PersonalInfo | null;
  skills: Skill[];
}

export function AboutSection({ personalInfo, skills }: AboutSectionProps) {
  return (
    <SectionWrapper id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-violet-500 uppercase tracking-widest mb-2">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Who I Am
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">My Story</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
              {personalInfo?.shortBio ??
                'Frontend Developer with 3 years of experience building and scaling high-performance web applications using Vue and React. Delivered complex e-commerce platforms, dashboards, and admin systems, with hands-on expertise in real-time chat architectures, secure authentication flows (including 2FA), and AI-driven features integrated into user-facing products. Strong focus on performance optimization, scalable architecture, and writing clean, maintainable code for production environments.'}
            </p>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: '3+', label: 'Years Exp.' },
                { value: '10+', label: 'Projects' },
                { value: '2+', label: 'Companies' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="text-center p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {skills.length > 0 ? (
              skills.map((skillGroup) => (
                <div key={skillGroup._id}>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <SkillBadge key={skill} label={skill} index={i} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              /* Fallback placeholder groups */
              [
                { category: 'Languages & Core', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
                { category: 'Frameworks & Libraries', items: ['React', 'Next.js', 'Vue', 'Nuxt', 'Redux', 'Zustand'] },
                { category: 'Styling & UI', items: ['Tailwind CSS', 'Bootstrap', 'Material UI', 'Sass'] },
                { category: 'Tools & Workflow', items: ['Git', 'Firebase', 'Stripe', 'Cypress'] },
              ].map((group, gi) => (
                <div key={gi}>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-3">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <SkillBadge key={skill} label={skill} index={i} />
                    ))}
                  </div>
                </div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
