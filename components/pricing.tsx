"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Starter",
    price: { monthly: 29, annual: 290 },
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "24/7 support",
      "API access"
    ]
  },
  {
    name: "Professional",
    highlight: true,
    price: { monthly: 99, annual: 990 },
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
      "Advanced security"
    ]
  },
  {
    name: "Enterprise",
    price: { monthly: 299, annual: 2990 },
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "Dedicated support",
      "API access",
      "Custom integrations",
      "Advanced security",
      "Custom contracts",
      "SLA guarantee"
    ]
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent"
            >
              Simple, Transparent Pricing
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center gap-4 text-lg"
            >
              <span className={!isAnnual ? "text-blue-600 font-medium" : "text-muted-foreground"}>
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-blue-600"
              />
              <span className={isAnnual ? "text-blue-600 font-medium" : "text-muted-foreground"}>
                Annual
              </span>
            </motion.div>
          </div>

          <motion.div
            ref={ref}
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group relative"
              >
                {/* Card with glass effect */}
                <div className={`h-full p-8 rounded-xl backdrop-blur-sm border transition-all duration-300
                  ${plan.highlight
                    ? 'border-violet-500/30 bg-blue-500/5 hover:bg-blue-500/10'
                    : 'border-white/20 bg-white/10 dark:bg-gray-900/50 hover:bg-white/20 dark:hover:bg-gray-900/60'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5" />
                      Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    {plan.name}
                  </h3>

                  <motion.div
                    className="mb-6"
                    initial={false}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-4xl font-bold text-blue-600">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      /{isAnnual ? "year" : "month"}
                    </span>
                  </motion.div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <div className="rounded-full p-1 bg-blue-600/10">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full group relative overflow-hidden
                      ${plan.highlight
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700'
                      }`}
                  >
                    <span className="relative z-10">Get Started</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}