"use client";

import { motion } from "motion/react";
import Image from "next/image";
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

        {/* Photo and Intro Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1 flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
              {/* Blue outer circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-lg"></div>
              {/* Inner circle with image */}
              <div className="relative w-44 h-44 md:w-60 md:h-60 m-2 overflow-hidden rounded-full border-4 border-white dark:border-gray-900">
                <Image
                  src="/images/profile.png"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {BIO.intro}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {BIO.summary}
            </p>
          </div>
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
      </div>
    </div>
  );
}
