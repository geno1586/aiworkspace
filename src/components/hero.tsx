'use client'

import { motion } from 'motion/react'
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16">
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid animate-grid" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-violet/20 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-electric/15 blur-[100px] animate-pulse-glow pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-violet/10 blur-[140px] animate-pulse-glow pointer-events-none" style={{ animationDelay: '1s' }} />

      {/* Floating accent orbs */}
      <div className="absolute top-40 left-[15%] w-3 h-3 rounded-full bg-violet/60 animate-float blur-sm" />
      <div className="absolute top-60 right-[20%] w-2 h-2 rounded-full bg-gold/60 animate-float-delay blur-sm" />
      <div className="absolute bottom-40 left-[25%] w-2 h-2 rounded-full bg-electric/60 animate-float-slow blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto gap-6">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet/20 text-sm text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-violet" />
            Introducing NexusAI 2.0
            <span className="flex items-center gap-1 text-violet font-medium">
              What&apos;s new <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
        >
          <span className="text-foreground">Intelligence</span>
          <br />
          <span className="gradient-text">redefined.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.35}
          className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed"
        >
          Deploy enterprise-grade AI workflows in minutes. NexusAI gives your team
          the power to automate, reason, and act — at any scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-dim via-violet to-electric text-white font-semibold text-base shadow-xl shadow-violet/30 hover:shadow-violet/50 transition-shadow"
          >
            Start building free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass border border-white/10 text-foreground font-semibold text-base hover:bg-white/8 transition-colors"
          >
            Watch demo
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.65}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4 text-sm text-muted-foreground"
        >
          <div className="flex -space-x-2">
            {[
              'bg-violet/40',
              'bg-electric/40',
              'bg-gold/40',
              'bg-violet/30',
              'bg-electric/30',
            ].map((color, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full ${color} border-2 border-background ring-1 ring-white/10`}
              />
            ))}
          </div>
          <span>
            Trusted by <strong className="text-foreground">12,000+</strong> engineers
            at leading companies
          </span>
        </motion.div>

        {/* Floating card — mock UI preview */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.8}
          className="w-full max-w-3xl mt-12"
        >
          <div className="relative glass-strong rounded-2xl overflow-hidden border border-white/10 glow-violet">
            {/* Fake window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-3">
                <div className="h-5 rounded-md bg-white/5 max-w-[180px] mx-auto" />
              </div>
            </div>
            {/* Mock content */}
            <div className="p-6 grid grid-cols-3 gap-4">
              {[
                { label: 'Requests / min', value: '284K', color: 'text-violet' },
                { label: 'Avg latency', value: '18ms', color: 'text-gold' },
                { label: 'Accuracy', value: '99.7%', color: 'text-electric' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1 p-4 rounded-xl bg-white/4 border border-white/6">
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                  <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
              <div className="col-span-3 h-28 rounded-xl bg-white/4 border border-white/6 overflow-hidden flex items-end px-4 pb-3 gap-1">
                {Array.from({ length: 28 }, (_, i) => {
                  const heights = [40, 55, 35, 70, 45, 80, 60, 90, 75, 50, 65, 85, 70, 55, 40, 80, 95, 70, 60, 85, 75, 90, 65, 80, 70, 88, 95, 100]
                  return (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-violet/60 to-electric/40"
                      style={{ height: `${heights[i]}%` }}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
