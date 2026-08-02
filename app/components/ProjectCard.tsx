"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  powerbi?: string;
  role?: string;
  duration?: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  tech,
  github,
  live,
  powerbi,
  role,
  duration,
}: ProjectCardProps) {
  const hasExternalLinks = Boolean(github || live || powerbi);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              {title}
            </h3>
            {role && (
              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                {role}
              </span>
            )}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>

          {(role || duration) && (
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              {role && <span>Role: {role}</span>}
              {duration && <span>Duration: {duration}</span>}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative h-32 w-full overflow-hidden rounded-lg border border-gray-100 bg-gradient-to-br from-blue-400 to-purple-600 sm:w-44">
            {image && (
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 220px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {powerbi && (
          <a
            href={powerbi}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow-600 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-yellow-700"
          >
            Power BI
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Live Demo
          </a>
        )}
        <Link
          href={`/sections/projects/${id}`}
          className={`inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1.5 text-sm font-semibold text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-gray-600 dark:text-gray-200 dark:hover:border-blue-500 dark:hover:text-blue-400 ${hasExternalLinks ? "ml-auto" : ""}`}
        >
          View Details
          <ExternalLink size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
