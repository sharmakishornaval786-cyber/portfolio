'use client';

import { Certificate } from '@/lib/portfolio-data';
import { ExternalLink } from 'lucide-react';

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <div className="group relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {certificate.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-300">
            {certificate.issuer}
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {certificate.date}
          </p>
          {certificate.description && (
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              {certificate.description}
            </p>
          )}
        </div>
        {certificate.credentialUrl && (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 transition-colors"
            aria-label="View credential"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
  );
}
