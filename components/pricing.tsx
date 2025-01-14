"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
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
    <section id="pricing" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-4 text-lg"
          >
            <span className={!isAnnual ? "text-primary" : "text-muted-foreground"}>Monthly</span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <span className={isAnnual ? "text-primary" : "text-muted-foreground"}>Annual</span>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative p-8 bg-card rounded-lg border hover:border-primary transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isAnnual ? plan.price.annual : plan.price.monthly}
                </span>
                <span className="text-muted-foreground">
                  /{isAnnual ? "year" : "month"}
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Get Started</Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}