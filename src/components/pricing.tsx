'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Check, Star } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const plans = [
  {
    name: 'Starter Concept',
    price: '$1,200',
    tagline: 'Launch fast, look sharp.',
    description: 'For new businesses that need a polished online presence without the enterprise price tag.',
    featured: false,
    features: [
      '1 custom page design',
      'Mobile-first responsive',
      'Basic SEO setup',
      'Contact form integration',
      '2 revision rounds',
      '14-day delivery',
    ],
    cta: 'Get started',
    glowBase: '0 0 0 1px oklch(0.85 0.15 85 / 18%), 0 0 28px oklch(0.85 0.15 85 / 7%)',
    glowHover: '0 0 0 1px oklch(0.85 0.15 85 / 48%), 0 0 52px oklch(0.85 0.15 85 / 22%), 0 20px 40px oklch(0 0 0 / 40%)',
    cardClass: 'glass',
    priceClass: 'text-gold',
    checkClass: 'text-gold',
    borderClass: 'border-gold/22',
    ctaClass: 'glass border border-gold/30 text-foreground hover:border-gold/55 hover:bg-gold/5 transition-colors',
  },
  {
    name: 'Business Launch',
    price: '$3,500',
    tagline: 'The complete growth package.',
    description: 'A full-featured site built to convert. The choice for growing businesses serious about results.',
    featured: true,
    features: [
      'Up to 8 custom pages',
      'CMS integration',
      'Advanced SEO & analytics',
      'Blog & content system',
      'Payment-ready structure',
      '3 revision rounds',
      '21-day delivery',
      '30-day post-launch support',
    ],
    cta: 'Start your project',
    glowBase: '0 0 0 1px oklch(0.65 0.27 290 / 32%), 0 0 55px oklch(0.65 0.27 290 / 18%)',
    glowHover: '0 0 0 1px oklch(0.65 0.27 290 / 65%), 0 0 80px oklch(0.65 0.27 290 / 35%), 0 24px 48px oklch(0 0 0 / 50%)',
    cardClass: 'glass-strong',
    priceClass: 'text-foreground',
    checkClass: 'text-violet',
    borderClass: 'border-violet/30',
    ctaClass: 'bg-gradient-to-r from-violet-dim via-violet to-electric text-white shadow-lg shadow-violet/30 hover:shadow-violet/50 transition-shadow',
  },
  {
    name: 'Premium Platform',
    price: '$8,500',
    tagline: 'Enterprise power, boutique craft.',
    description: 'Complex platforms, AI dashboards, and e-commerce stores engineered to perform at scale.',
    featured: false,
    features: [
      'Unlimited pages',
      'AI / SaaS dashboard',
      'Custom APIs & integrations',
      'Auth & user management',
      'Performance monitoring',
      'Unlimited revisions',
      'Dedicated project manager',
      '6-month support included',
    ],
    cta: 'Get started',
    glowBase: '0 0 0 1px oklch(0.65 0.22 250 / 18%), 0 0 28px oklch(0.65 0.22 250 / 7%)',
    glowHover: '0 0 0 1px oklch(0.65 0.22 250 / 48%), 0 0 52px oklch(0.65 0.22 250 / 22%), 0 20px 40px oklch(0 0 0 / 40%)',
    cardClass: 'glass',
    priceClass: 'text-electric',
    checkClass: 'text-electric',
    borderClass: 'border-electric/22',
    ctaClass: 'glass border border-electric/30 text-foreground hover:border-electric/55 hover:bg-electric/5 transition-colors',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-28 px-4 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-violet/6 blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-gold/5 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-gold/25 bg-gold/8 text-gold text-sm font-medium mb-5"
          >
            Pricing
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            Invest once,
            <br />
            <span className="gradient-text">own it forever.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-xl mx-auto text-muted-foreground text-lg"
          >
            No subscriptions, no surprises. You own the code, the design,
            and the domain — forever.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: plan.glowHover,
                transition: { duration: 0.22, ease: EASE },
              }}
              style={{ boxShadow: plan.glowBase }}
              className={`relative flex flex-col rounded-2xl border ${plan.borderClass} ${plan.cardClass} overflow-hidden`}
            >
              {/* Most Popular ribbon */}
              {plan.featured && (
                <div className="flex justify-center pt-5 pb-0 px-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet/35 bg-violet/12 text-violet text-xs font-semibold">
                    <Star className="w-3 h-3 fill-violet" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`flex flex-col gap-5 p-6 ${plan.featured ? 'pt-4' : ''} flex-1`}>
                {/* Plan name + tagline */}
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-0.5">{plan.name}</h3>
                  <p className={`text-xs font-medium ${plan.checkClass} mb-3`}>{plan.tagline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1.5">
                  <span className={`text-4xl font-bold tracking-tight ${plan.priceClass}`}>{plan.price}</span>
                  <span className="text-sm text-muted-foreground mb-1">/ project</span>
                </div>

                {/* Divider */}
                <div className="border-t border-white/8" />

                {/* Features */}
                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <Check className={`w-4 h-4 flex-shrink-0 ${plan.checkClass}`} strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 rounded-xl text-sm font-semibold ${plan.ctaClass}`}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground/60 mt-10"
        >
          Need something custom?{' '}
          <span className="text-muted-foreground underline underline-offset-4 cursor-pointer hover:text-foreground transition-colors">
            Let&apos;s talk scope.
          </span>
        </motion.p>
      </div>
    </section>
  )
}
