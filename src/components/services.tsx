'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Layers, Globe, BarChart3, Calendar, ShoppingCart, Palette, Check, ArrowRight } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const services = [
  {
    icon: Layers,
    title: 'Custom Landing Pages',
    description: 'Single-page experiences engineered for maximum conversion, tailored to your audience and campaign goal.',
    features: ['Speed-optimised', 'A/B test ready', 'CRO-focused design'],
    from: '$1,200',
    gradient: 'from-violet/20 to-transparent',
    iconBg: 'bg-violet/15',
    iconColor: 'text-violet',
    accent: 'border-violet/20',
    fromColor: 'text-violet',
  },
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Multi-page professional sites that establish credibility, rank on search, and turn visitors into clients.',
    features: ['CMS-powered', 'SEO-ready', 'Analytics wired in'],
    from: '$2,800',
    gradient: 'from-gold/15 to-transparent',
    iconBg: 'bg-gold/15',
    iconColor: 'text-gold',
    accent: 'border-gold/20',
    fromColor: 'text-gold',
  },
  {
    icon: BarChart3,
    title: 'AI SaaS Dashboards',
    description: 'Data-rich applications with real-time feeds, role-based access, and the performance users demand from AI products.',
    features: ['Real-time data', 'Role-based access', 'API integration'],
    from: '$5,500',
    gradient: 'from-electric/15 to-transparent',
    iconBg: 'bg-electric/15',
    iconColor: 'text-electric',
    accent: 'border-electric/20',
    fromColor: 'text-electric',
  },
  {
    icon: Calendar,
    title: 'Booking Platforms',
    description: 'End-to-end reservation systems with calendar sync, automated reminders, and frictionless payment flows.',
    features: ['Calendar sync', 'Payment processing', 'Automated reminders'],
    from: '$3,200',
    gradient: 'from-violet/20 to-transparent',
    iconBg: 'bg-violet/15',
    iconColor: 'text-violet',
    accent: 'border-violet/20',
    fromColor: 'text-violet',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Stores',
    description: 'High-converting storefronts built for luxury and lifestyle brands, optimised from product page to checkout.',
    features: ['Product catalog', 'Checkout optimised', 'Inventory management'],
    from: '$4,000',
    gradient: 'from-gold/15 to-transparent',
    iconBg: 'bg-gold/15',
    iconColor: 'text-gold',
    accent: 'border-gold/20',
    fromColor: 'text-gold',
  },
  {
    icon: Palette,
    title: 'Brand Web Kits',
    description: 'A complete design system — tokens, components, and a flagship site — so every touchpoint feels intentional.',
    features: ['Design system', 'Component library', 'Brand guidelines'],
    from: '$2,200',
    gradient: 'from-electric/15 to-transparent',
    iconBg: 'bg-electric/15',
    iconColor: 'text-electric',
    accent: 'border-electric/20',
    fromColor: 'text-electric',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-28 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-gold/4 blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-gold/25 bg-gold/8 text-gold text-sm font-medium mb-5"
          >
            What we build
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            Services built for
            <br />
            <span className="gradient-text">results, not resumes.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg"
          >
            Every service is scoped, priced, and delivered to move the needle —
            not to pad a portfolio.
          </motion.p>
        </div>

        {/* Service cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group relative glass rounded-2xl p-6 border ${svc.accent} overflow-hidden flex flex-col cursor-default`}
              >
                {/* Gradient tint */}
                <div className={`absolute inset-0 bg-gradient-to-br ${svc.gradient} opacity-50 group-hover:opacity-90 transition-opacity duration-300`} />

                <div className="relative z-10 flex flex-col gap-4 flex-1">
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl ${svc.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${svc.iconColor}`} strokeWidth={1.75} />
                  </div>

                  {/* Title + description */}
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1.5">{svc.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
                  </div>

                  {/* Feature list */}
                  <ul className="flex flex-col gap-1.5 mt-auto">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className={`w-3.5 h-3.5 flex-shrink-0 ${svc.iconColor}`} strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Footer: price + arrow */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/8 mt-1">
                    <div>
                      <span className="text-[10px] text-muted-foreground/60 uppercase tracking-widest">From</span>
                      <p className={`text-lg font-bold ${svc.fromColor}`}>{svc.from}</p>
                    </div>
                    <motion.div
                      className={`w-8 h-8 rounded-full ${svc.iconBg} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowRight className={`w-4 h-4 ${svc.iconColor}`} />
                    </motion.div>
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
