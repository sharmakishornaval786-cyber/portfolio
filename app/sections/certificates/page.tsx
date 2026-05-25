'use client';

import { CERTIFICATES } from '@/lib/portfolio-data';
import CertificateCard from '@/app/components/CertificateCard';
import { motion } from 'motion/react';

export default function CertificatesPage() {
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

  // Separate certificates by type
  const professionalCerts = CERTIFICATES.filter(cert => cert.type === 'professional');
  const academicCerts = CERTIFICATES.filter(cert => cert.type === 'academic');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Credentials
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Professional certifications and academic qualifications
          </p>
        </motion.div>

        {/* Professional Certificates Section */}
        {professionalCerts.length > 0 && (
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-blue-600 dark:bg-blue-400 rounded"></span>
              Professional Certificates
            </h2>
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {professionalCerts.map((certificate) => (
                <motion.div key={certificate.id} variants={itemVariants}>
                  <CertificateCard certificate={certificate} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Academic Certificates Section */}
        {academicCerts.length > 0 && (
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-green-600 dark:bg-green-400 rounded"></span>
              Academic Qualifications
            </h2>
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {academicCerts.map((certificate) => (
                <motion.div key={certificate.id} variants={itemVariants}>
                  <CertificateCard certificate={certificate} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Empty State */}
        {CERTIFICATES.length === 0 && (
          <motion.div
            variants={itemVariants}
            className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <p className="text-gray-600 dark:text-gray-400">
              No certifications to display yet. Check back soon!
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
