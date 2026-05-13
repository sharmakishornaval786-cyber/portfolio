"use client";

import type { Metadata } from "next";
import { motion } from "motion/react";
import SkillBadge from "@/app/components/SkillBadge";
import { BIO } from "@/lib/portfolio-data";

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </motion.div>

        {/* Intro Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {BIO.intro}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {BIO.summary}
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>

          {/* Group skills by category */}
          {Array.from(
            new Set(BIO.skills.map((s) => s.category))
          ).map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {BIO.skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <SkillBadge key={skill.name} label={skill.name} />
                  ))}
              </div>
            </div>
          ))}
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {[].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                  {index !== 2 && (
                    <div className="w-1 h-24 bg-gray-300 dark:bg-gray-700 my-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {exp.duration}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
