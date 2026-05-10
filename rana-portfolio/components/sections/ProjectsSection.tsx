'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Project } from '@/lib/types';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Build filter list from all unique tech stacks
  const filters = useMemo(() => {
    const all = new Set<string>();
    projects.forEach((p) => p.techStack.forEach((t) => all.add(t)));
    return ['All', ...Array.from(all)];
  }, [projects]);

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((p) => p.techStack.includes(activeFilter)),
    [projects, activeFilter]
  );

  return (
    <SectionWrapper
      id="projects"
      className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-violet-500 uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Filter tabs */}
        {filters.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-violet-500 border-violet-500 text-white shadow-md shadow-violet-500/30'
                    : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-500'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        )}

        {/* Project grid */}
        <AnimatePresence mode="popLayout">
          {projects.length === 0 ? (
            /* Empty state */
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-gray-400 dark:text-gray-600"
            >
              <p className="text-lg font-medium">No projects added yet.</p>
              <p className="text-sm mt-1">Add your projects in Sanity Studio.</p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project._id} project={project} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
