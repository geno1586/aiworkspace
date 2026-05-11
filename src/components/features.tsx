'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Brain, Zap, Shield, GitBranch, BarChart3, Globe } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Reasoning Engine',
    description: 'Multi-step chain-of-thought reasoning that breaks down complex problems into structured, auditable decisions.',
    gradient: 'from-violet/20 to-transparent',
    iconBg: 'bg-violet/15',
    iconColor: 'text-violet',
    accent: 'border-violet/20',
  },
  {
    icon: Zap,
    title: 'Sub-20ms Latency',
    description: 'Edge-deployed inference network spanning 40+ regions. Your users experience AI as fast as a button click.',
    gradient: 'from-gold/15 to-transparent',
    iconBg: 'bg-gold/15',
    iconColor: 'text-gold',
    accent: 'border-gold/20',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified. Data never leaves your VPC. Fine-grained RBAC and full audit trails.',
    gradient: 'from-electric/15 to-transparent',
    iconBg: 'bg-electric/15',
    iconColor: 'text-electric',
    accent: 'border-electric/20',
  },
  {
    icon: GitBranch,
    title: 'Workflow Orchestration',
    description: 'Build complex multi-agent pipelines with branching logic, retries, and human-in-the-loop checkpoints.',
    gradient: 'from-violet/20 to-transparent',
    iconBg: 'bg-violet/15',
    iconColor: 'text-violet',
    accent: 'border-violet/20',
  },
  {
    icon: BarChart3,
    title: 'Observability Suite',
    description: 'Real-time tracing, token attribution, cost dashboards, and A/B prompt experiments — all in one view.',
    gradient: 'from-gold/15 to-transparent',
    iconBg: 'bg-gold/15',
    iconColor: 'text-gold',
    accent: 'border-gold/20',
  },
  {
    icon: Globe,
    title: 'Any Model, Any API',
    description: 'Unified interface across 30+ model providers. Switch models mid-workflow without rewriting your code.',
    gradient: 'from-electric/15 to-transparent',
    iconBg: 'bg-electric/15',
    iconColor: 'text-electric',
    accent: 'border-electric/20',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

export function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" className="relative py-28 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-violet/5 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-violet/25 bg-violet/8 text-violet text-sm font-medium mb-5"
          >
            Platform capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            Everything you need to ship
            <br />
            <span className="gradient-text-violet">production AI.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg"
          >
            One platform for the entire AI lifecycle — from prototype to petabyte scale.
          </motion.p>
        </div>

        {/* Feature cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative glass rounded-2xl p-6 border ${feat.accent} overflow-hidden cursor-default`}
              >
                {/* Gradient tint */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feat.gradient} opacity-50 group-hover:opacity-80 transition-opacity`} />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className={`w-11 h-11 rounded-xl ${feat.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${feat.iconColor}`} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1.5">{feat.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
