"use client";

import { motion } from "motion/react";

interface SkillBadgeProps {
  label: string;
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors cursor-pointer">
        {label}
      </span>
    </motion.div>
  );
}
