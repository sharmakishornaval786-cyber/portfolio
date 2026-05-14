"use client";

import { motion } from "motion/react";
import { SOCIAL_LINKS } from "@/lib/portfolio-data";

export default function Contact() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-4">
            {/* GitHub Button */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 p-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-lg px-6 py-4 text-center group-hover:bg-opacity-95 transition-all duration-300">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <h3 className="font-bold text-lg">GitHub</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">View My Projects</p>
              </div>
            </a>

            {/* LinkedIn Button */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 p-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-lg px-6 py-4 text-center group-hover:bg-opacity-95 transition-all duration-300">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.047-8.789 0-9.714h3.554v1.375c.427-.659 1.191-1.599 2.898-1.599 2.117 0 3.705 1.384 3.705 4.362v5.576zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.708 0-.955.771-1.71 1.956-1.71 1.184 0 1.915.755 1.937 1.71 0 .95-.753 1.708-1.937 1.708zm1.946 11.02H3.391V9.718h3.892v10.734zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <h3 className="font-bold text-lg">LinkedIn</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Connect With Me</p>
              </div>
            </a>

            {/* Resume Button */}
            <a
              href={SOCIAL_LINKS.resume}
              download
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 p-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-lg px-6 py-4 text-center group-hover:bg-opacity-95 transition-all duration-300">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-4m0 0V8m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-bold text-lg">Resume</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Download CV</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* CTA Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Open to internships, freelance projects, and collaboration opportunities.
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>
      </div>
    </div>
  );
}
