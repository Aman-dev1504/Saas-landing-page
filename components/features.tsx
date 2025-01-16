"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Zap,
  Shield,
  BarChart,
  Users,
  Cloud,
  Code
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized platform."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security to protect your sensitive business data."
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Gain deep insights with our powerful analytics tools."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless collaboration tools for your entire team."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Connect with your favorite cloud services effortlessly."
  },
  {
    icon: Code,
    title: "API Access",
    description: "Full API access for custom integrations and automation."
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="features" className="py-8 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Powerful Features
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Everything you need to scale your business
            </motion.p>
          </div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl backdrop-blur-sm border border-black/20 dark:border-white/20 bg-white/10 dark:bg-gray-900/50 hover:bg-white/20 dark:hover:bg-gray-900/60 transition-colors duration-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 rounded-lg bg-violet-600/10 text-blue-600 dark:text-blue-400">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}