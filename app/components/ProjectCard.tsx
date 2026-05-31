"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  powerbi?: string;
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
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
          {tech.length > 3 && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              +{tech.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {powerbi && (
            <a
              href={powerbi}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors text-sm font-semibold"
            >
              Power BI
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-semibold"
            >
              GitHub
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              Live Demo
            </a>
          )}
          {!github && !live && !powerbi && (
            <Link
              href={`/sections/projects/${id}`}
              className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
