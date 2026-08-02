"use client";

import { motion } from "motion/react";
import ProjectCard from "@/app/components/ProjectCard";
import { PROJECTS } from "@/lib/portfolio-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Projects() {
  const analyticsProjects = PROJECTS.filter((project) => project.section === "analytics").sort((a, b) => {
    if (a.title === "End-to-End Supply Chain Analytics Project") return -1;
    if (b.title === "End-to-End Supply Chain Analytics Project") return 1;
    return 0;
  });
  const developmentProjects = PROJECTS.filter((project) => project.section === "projects");

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 dark:bg-gray-900">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mx-auto max-w-4xl"
      >
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Selected work spanning analytics, dashboards, and web development
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
            <span className="inline-block h-6 w-1 rounded bg-purple-600 dark:bg-purple-400"></span>
            Analytics Case Study
          </h2>
          <motion.div variants={containerVariants} className="space-y-4">
            {analyticsProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
            <span className="inline-block h-6 w-1 rounded bg-blue-600 dark:bg-blue-400"></span>
            Projects
          </h2>
          <motion.div variants={containerVariants} className="space-y-4">
            {developmentProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
