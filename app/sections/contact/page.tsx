"use client";

import type { Metadata } from "next";
import { motion } from "motion/react";
import ContactForm from "@/app/components/ContactForm";

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
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            I'd love to hear from you. Whether you have a project in mind or just
            want to chat, feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <a
              href="mailto:sharmakishornaval@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              sharmakishornaval@gmail.com
            </a>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">Gwalior, India</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg mb-2">Social</h3>
            <div className="flex justify-center gap-3">
              <a
                href="https://github.com"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Send me a Message</h2>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}
