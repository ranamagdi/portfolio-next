'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/lib/types';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  const isWork = experience.type === 'work';
  const dateRange = experience.current
    ? `${experience.startDate} – Present`
    : `${experience.startDate}${experience.endDate ? ` – ${experience.endDate}` : ''}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-4 pb-10 last:pb-0"
    >
      {/* Timeline line & icon */}
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 ${
            isWork
              ? 'bg-violet-50 dark:bg-violet-950/50 border-violet-200 dark:border-violet-800 text-violet-500'
              : 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800 text-indigo-500'
          }`}
        >
          {isWork ? <Briefcase size={16} /> : <GraduationCap size={16} />}
        </div>
        <div className="w-px flex-1 bg-gray-200 dark:bg-gray-700 mt-2" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-gray-900 dark:text-white text-base">{experience.role}</h3>
          <span className="text-xs font-medium text-violet-500 bg-violet-50 dark:bg-violet-950/50 px-2.5 py-1 rounded-full border border-violet-100 dark:border-violet-900 shrink-0">
            {dateRange}
          </span>
        </div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
          {experience.company}
          {experience.field && ` · ${experience.field}`}
          {experience.grade && ` · ${experience.grade}`}
        </p>

        {experience.highlights && experience.highlights.length > 0 && (
          <ul className="space-y-1.5">
            {experience.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-violet-400 mt-0.5 shrink-0">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
