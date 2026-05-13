"use client";

import { motion } from "motion/react";
import { PUBLICATIONS } from "@/lib/portfolio-data";

export default function Publications() {
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
          <h1 className="text-5xl font-bold mb-4">Research Publications</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </motion.div>

        {/* Publications Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            {PUBLICATIONS.length > 0 ? (
              PUBLICATIONS.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2">{pub.title}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                    {pub.authors.join(", ")}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {pub.description}
                  </p>
                  <div className="flex gap-4">
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                      >
                        DOI: {pub.doi}
                      </a>
                    )}
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                      >
                        Read More →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No publications yet. Check back soon!
              </p>
            )}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
