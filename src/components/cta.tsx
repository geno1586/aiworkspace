'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const perks = [
  'No credit card required',
  'Free tier forever',
  '5-minute setup',
]

export function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="pricing" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full bg-violet/12 blur-[160px]" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative glass-strong rounded-3xl border border-violet/20 glow-border overflow-hidden"
        >
          {/* Gradient top strip */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet to-transparent" />

          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-violet/10 blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-8 py-16 gap-6">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full border border-violet/30 bg-violet/10 text-violet text-sm font-medium"
            >
              Start for free today
            </motion.span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Ready to build the
              <br />
              <span className="gradient-text">future of AI?</span>
            </h2>

            <p className="max-w-md text-muted-foreground">
              Join 12,000+ engineers who ship AI-powered products faster with NexusAI.
              No infrastructure headaches, no hidden fees.
            </p>

            {/* Email form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-violet/15 border border-violet/30 text-foreground"
              >
                <CheckCircle2 className="w-5 h-5 text-violet shrink-0" />
                <span className="text-sm font-medium">You&apos;re on the list! We&apos;ll be in touch shortly.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="flex-1 px-4 py-3 rounded-xl glass border border-white/12 bg-transparent text-foreground placeholder-muted-foreground text-sm outline-none focus:border-violet/50 focus:ring-2 focus:ring-violet/20 transition-all"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-dim to-electric text-white font-semibold text-sm shadow-lg shadow-violet/25 hover:shadow-violet/40 transition-shadow whitespace-nowrap"
                >
                  Get early access
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            )}

            {/* Perks */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              {perks.map((perk) => (
                <span key={perk} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-violet/70" />
                  {perk}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
