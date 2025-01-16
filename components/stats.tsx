"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { icon: "👥", number: 10000, label: "Active Users", suffix: "+" },
  { icon: "🚀", number: 99.9, label: "Uptime", suffix: "%" },
  { icon: "👨‍💻", number: 50, label: "Team Members", suffix: "+" },
  { icon: "🔄", number: 10000, label: "API Requests", suffix: "/day" }
]

export default function ModernStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="stats" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Discover the scale of our operations and the trust our users place in us
          </motion.p>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="h-full bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center">
                  <div className="text-3xl sm:text-4xl mb-3">{stat.icon}</div>
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold mb-2 tabular-nums bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
                  >
                    {inView && (
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix}
                      />
                    )}
                  </motion.div>
                  <p className="text-sm sm:text-base text-muted-foreground font-medium text-center">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}