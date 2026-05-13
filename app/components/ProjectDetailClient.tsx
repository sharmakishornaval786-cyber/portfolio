"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Project } from "@/lib/portfolio-data";

interface ProjectDetailClientProps {
  project: Project;
  otherProjects: Project[];
}

export default function ProjectDetailClient({
  project,
  otherProjects,
}: ProjectDetailClientProps) {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/sections/projects"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-flex items-center gap-2"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {project.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-8 py-6 border-y border-gray-200 dark:border-gray-800">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
              <p className="font-semibold">{project.role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
              <p className="font-semibold">{project.duration}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Tech Stack</p>
              <p className="font-semibold">{project.tech.join(", ")}</p>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="h-96 mb-12 rounded-lg overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600"
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div>
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6"
            >
              <h3 className="text-lg font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-semibold"
                >
                  View on GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Visit Live Site
                </a>
              )}
            </motion.div>
          </div>
        </div>

        {/* Related Projects */}
        {otherProjects.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 pt-20 border-t border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-3xl font-bold mb-8">Related Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {otherProjects.map((proj) => (
                <Link
                  key={proj.id}
                  href={`/sections/projects/${proj.id}`}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-600 group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="p-4">
                    <h3 className="font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {proj.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
