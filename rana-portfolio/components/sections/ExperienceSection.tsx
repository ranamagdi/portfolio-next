'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { Experience } from '@/lib/types';

interface ExperienceSectionProps {
  experiences: Experience[];
}

type Tab = 'work' | 'education';

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const [tab, setTab] = useState<Tab>('work');

  const work = experiences.filter((e) => e.type === 'work');
  const education = experiences.filter((e) => e.type === 'education');
  const visible = tab === 'work' ? work : education;

  return (
    <SectionWrapper id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-violet-500 uppercase tracking-widest mb-2">My Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 dark:bg-gray-900 rounded-xl p-1 border border-gray-200 dark:border-gray-800">
            {(['work', 'education'] as Tab[]).map((t) => (
              <motion.button
                key={t}
                onClick={() => setTab(t)}
                whileTap={{ scale: 0.97 }}
                className={`relative px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  tab === t
                    ? 'text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                {tab === t && (
                  <motion.div
                    layoutId="tab-pill"
                    className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-lg shadow-md shadow-violet-500/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 capitalize">
                  {t === 'work' ? '💼 Work' : '🎓 Education'}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {visible.length === 0 ? (
            <p className="text-center text-gray-400 dark:text-gray-600 py-16">
              No {tab} entries yet. Add them in Sanity Studio.
            </p>
          ) : (
            <div className="mt-4">
              {visible.map((exp, i) => (
                <TimelineItem key={exp._id} experience={exp} index={i} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
