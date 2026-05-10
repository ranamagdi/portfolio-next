'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  label: string;
  index: number;
}

export function SkillBadge({ label, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="inline-flex items-center text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200 cursor-default"
    >
      {label}
    </motion.span>
  );
}
