"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  ClipboardCheck, 
  Settings, 
  Rocket,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "1. Sign Up",
    description: "Create your account in minutes with our simple onboarding process.",
    color: "from-violet-500/20 to-transparent"
  },
  {
    icon: Settings,
    title: "2. Configure",
    description: "Customize the platform to match your business needs and workflows.",
    color: "from-blue-500/20 to-transparent"
  },
  {
    icon: Rocket,
    title: "3. Launch",
    description: "Go live with your optimized workflow and start scaling your business.",
    color: "from-emerald-500/20 to-transparent"
  }
];

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="how-it-works" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-500"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Get started in three simple steps and transform your workflow
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="relative grid md:grid-cols-3 gap-12 mt-16"
        >
          {/* Connection Line */}
          <div className="absolute hidden md:block top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500/50 via-purple-500/50 to-violet-500/50 -translate-y-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 rounded-2xl bg-card border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-radial opacity-10" />
                <div className={`absolute inset-0 bg-gradient-to-b ${step.color} opacity-10 rounded-2xl`} />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl" />
                      <div className="relative p-4 rounded-xl bg-primary/10 text-primary">
                        <step.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-primary font-medium cursor-pointer"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </motion.div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="h-6 w-6 text-primary/50" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}