"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from 'lucide-react';

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 sm:py-26 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      {/* <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[1000px] w-[800px] -translate-x-1/2 bg-gradient-radial from-violet-500/20 via-transparent to-transparent opacity-20 blur-[1000px]" /> */}
      {/* Enhanced Background Effects */}
      {/* Dotted Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15]" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orb */}
        <motion.div
          className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-gradient-to-r from-violet-500/30 to-purple-500/30 dark:from-violet-500/20 dark:to-purple-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Secondary gradient orb */}
        <motion.div
          className="absolute -right-1/4 top-1/4 w-[600px] h-[600px] bg-gradient-to-l from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-30 mix-blend-soft-light" />

      {/* Radial Gradient Spotlight */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/[0.06] dark:to-black/[0.15]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Experience Seamless Purchase Order Automation</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block bg-gradient-to-b from-white to-gray-200 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Revolutionize Your Workflow with
            </span>{" "}
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                className="relative inline-flex items-center justify-center"
                initial={{ rotate: 0 }}
                animate={{ rotate: -5 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Main AutoPO Text */}
                <span className="relative z-10 bg-gradient-to-r from-violet-600 via-purple-500 to-violet-600 text-white px-6 py-2 rounded-lg shadow-lg">
                  AutoPO

                  {/* Shine Effect */}
                  <motion.span
                    className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12"
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 0.3, x: "200%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                </span>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 -z-10 bg-violet-500 rounded-lg blur-xl"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [0.85, 1, 0.85]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.span>
            </motion.div>{" "}
            <span className="inline-block bg-gradient-to-b from-white to-gray-200 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              for Effortless Approvals
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Automate purchase orders, streamline multi-level approvals, and empower your manufacturing operations with AutoPO.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg text-white group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600"
                initial={false}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg group relative overflow-hidden"
            >
              <span className="relative z-10">Book a Demo</span>
              <motion.div
                className="absolute inset-0 bg-primary/10 translate-y-[101%]"
                whileHover={{ translateY: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>

          {/* Demo Preview Box */}
          <motion.div
            className="relative mx-auto w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden border bg-background/50 backdrop-blur-sm border-violet-500/20">
              {/* Video Preview/Thumbnail */}
              <div className="absolute inset-0">
                <img
                  src="https://media.gettyimages.com/id/1354909508/video/business-technology-internet-and-network-concept-automation-software-technology-process-system.jpg?s=640x640&k=20&c=WH8TEqbUdcghcw830pMNY1UdtZKyFS5sXTsfE4oNbyc="
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
              </div>

              {/* Animated Grid Overlay */}
              <motion.div
                className="absolute inset-0 bg-grid-white/[0.02]"
                animate={{
                  backgroundPosition: ["0px 0px", "100px 100px"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />

              {/* Video Player or Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                {isVideoPlaying ? (
                  <div className="w-full h-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Product Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsVideoPlaying(true)}
                    className="z-50 relative group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors rounded-full p-6 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white group-hover:text-primary transition-colors" />
                    </div>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg whitespace-nowrap">
                      Watch Demo
                    </div>
                  </motion.button>
                )}
              </div>
            </div>

            {/* Gradient effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl opacity-30 blur-xl -z-10"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}