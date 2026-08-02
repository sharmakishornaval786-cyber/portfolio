"use client";

import { motion } from "motion/react";
import { PUBLICATIONS } from "@/lib/portfolio-data";

export default function Publications() {
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
            Research Publications
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Academic and industry-focused research contributions
          </p>
        </motion.div>

        <motion.section variants={itemVariants} className="space-y-4">
          {PUBLICATIONS.length > 0 ? (
            PUBLICATIONS.map((pub) => (
              <motion.article
                key={pub.id}
                variants={itemVariants}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6 transition-colors hover:border-blue-600 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-400"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
                      {pub.authors.join(", ")}
                    </p>
                  </div>
                  {pub.year ? (
                    <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300">
                      {pub.year}
                    </span>
                  ) : null}
                </div>

                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {pub.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {pub.doi ? (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                      View Publication
                    </a>
                  ) : null}
                  <a
                    href={`https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    Google Scholar
                  </a>
                </div>
              </motion.article>
            ))
          ) : (
            <p className="rounded-2xl border border-dashed border-gray-300 bg-white/70 p-8 text-center text-gray-600 dark:border-gray-700 dark:bg-gray-950/60 dark:text-gray-400">
              No publications yet. Check back soon!
            </p>
          )}
        </motion.section>
      </motion.div>
    </div>
  );
}
