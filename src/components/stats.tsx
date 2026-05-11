'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'motion/react'

const stats = [
  { value: 12000, suffix: '+', label: 'Engineers', description: 'building with NexusAI' },
  { value: 99.97, suffix: '%', label: 'Uptime SLA', description: 'guaranteed by contract' },
  { value: 284, suffix: 'K', label: 'Req / min', description: 'peak throughput handled' },
  { value: 40, suffix: '+', label: 'Regions', description: 'edge inference network' },
]

function Counter({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const isFloat = !Number.isInteger(target)

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * target)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, target, duration])

  const display = Number.isInteger(target)
    ? Math.round(count).toLocaleString()
    : count.toFixed(2)

  return <span ref={ref}>{display}{suffix}</span>
}

export function Stats() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 border-y border-white/6" />
      <div className="absolute inset-0 bg-gradient-to-r from-violet/5 via-transparent to-electric/5" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-1.5 p-8 bg-background"
            >
              <span className="text-3xl sm:text-4xl font-bold gradient-text-violet">
                <Counter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm font-semibold text-foreground">{stat.label}</span>
              <span className="text-xs text-muted-foreground">{stat.description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
