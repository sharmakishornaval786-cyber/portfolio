"use client";

import { motion } from "motion/react";
import ProjectCard from "@/app/components/ProjectCard";
import { PROJECTS } from "@/lib/portfolio-data";

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
