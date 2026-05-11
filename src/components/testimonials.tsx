'use client'

import { motion } from 'motion/react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "NexusAI cut our inference infrastructure costs by 60% while doubling throughput. The observability suite alone saved us weeks of debugging.",
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "Meridian Health",
    avatar: "SC",
    avatarColor: "from-violet/50 to-electric/40",
  },
  {
    quote: "We went from prototype to 1M daily users in 6 weeks. The workflow orchestration is the best abstraction I've seen in the AI tooling space.",
    name: "Marcus Rivera",
    role: "CTO",
    company: "Flowstate Labs",
    avatar: "MR",
    avatarColor: "from-gold/50 to-violet/40",
  },
  {
    quote: "Our compliance team signed off in a single call. The SOC 2 documentation and data residency controls are exactly what enterprise buyers need.",
    name: "Priya Nair",
    role: "Head of AI Platform",
    company: "Arcturus Finance",
    avatar: "PN",
    avatarColor: "from-electric/50 to-violet/40",
  },
]

export function Testimonials() {
  return (
    <section className="relative py-28 px-4 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-gold/25 bg-gold/8 text-gold text-sm font-medium mb-5"
          >
            Customer stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            Loved by teams
            <br />
            <span className="gradient-text">at every scale.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 border border-white/10 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-xs font-semibold text-white`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
