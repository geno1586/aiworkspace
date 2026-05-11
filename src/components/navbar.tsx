'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Zap, Menu, X } from 'lucide-react'

const links = [
  { label: 'Platform', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`w-full max-w-6xl rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'glass-strong shadow-2xl shadow-black/40'
            : 'bg-transparent border border-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-3.5">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-violet/20 blur-sm group-hover:bg-violet/30 transition-colors" />
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-violet-dim to-electric flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-base font-semibold tracking-tight text-foreground">
              Nexus<span className="gradient-text-violet">AI</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-xl transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign in
            </a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-violet-dim to-electric text-white shadow-lg shadow-violet/25 hover:shadow-violet/40 transition-shadow"
            >
              Get started free
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-white/8"
            >
              <div className="flex flex-col gap-1 px-5 py-4">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-xl hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-white/8">
                  <a href="#" className="px-3 py-2.5 text-sm text-muted-foreground text-center">Sign in</a>
                  <a href="#" className="px-5 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-violet-dim to-electric text-white text-center">
                    Get started free
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
