"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from 'lucide-react';

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 lg:py-24 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      {/* Single Optimized Gradient */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={false}
      >
        <div className="absolute -left-1/4 -top-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/40 to-blue-500/20 rounded-full blur-[80px]" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Experience Seamless Purchase Order Automation</span>
            </div>
          </motion.div>

          {/* Heading with improved contrast */}
          <motion.h1
            className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-gray-900 dark:text-gray-100">
              Revolutionize Your Workflow with{' '}
            </span>
            <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-600 text-transparent bg-clip-text px-2">
              AutoPO
            </span>
            <span className="text-gray-900 dark:text-gray-100">
              {' '}for Effortless Approvals
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Automate purchase orders, streamline multi-level approvals, and empower your manufacturing operations with AutoPO.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-600 text-white hover:opacity-90 transition-opacity"
            >
              <span className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Book a Demo
            </Button>
          </motion.div>

          {/* Simplified Demo Section */}
          <motion.div
            className="relative w-full max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
              {!isVideoPlaying && (
                <>
                  <img
                    src="/api/placeholder/1280/720"
                    alt="Demo preview"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsVideoPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="relative rounded-full p-4 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                      <Play className="h-8 w-8 text-white" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.button>
                </>
              )}
              {isVideoPlaying && (
                <div className="absolute inset-0">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Product Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}