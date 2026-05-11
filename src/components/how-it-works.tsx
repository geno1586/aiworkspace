'use client'

import { motion } from 'motion/react'
import { Upload, Cpu, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Connect your data',
    description: 'Ingest from any source — databases, APIs, documents, streams. NexusAI handles schema inference, chunking, and embedding automatically.',
    tag: 'Setup in minutes',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Build your workflow',
    description: 'Compose multi-step pipelines using our visual editor or SDK. Chain models, tools, and human reviews with drag-and-drop simplicity.',
    tag: 'Zero boilerplate',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Deploy and scale',
    description: 'One-click deploy to our global edge network. Auto-scales to millions of requests with built-in observability and cost controls.',
    tag: 'Production-ready',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-electric/25 bg-electric/8 text-electric text-sm font-medium mb-5"
          >
            How it works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            From idea to production
            <br />
            <span className="gradient-text">in three steps.</span>
          </motion.h2>
        </div>

        <div className="relative flex flex-col lg:flex-row gap-6">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-16 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-violet/30 via-electric/30 to-violet/30" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Step icon with number */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl glass-strong border border-white/12 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-violet to-electric text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                {/* Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground mb-3">
                  {step.tag}
                </span>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
