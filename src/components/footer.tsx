import { Zap } from 'lucide-react'

const links = {
  Product: ['Platform', 'Pricing', 'Changelog', 'Roadmap'],
  Developers: ['Documentation', 'API Reference', 'SDKs', 'Status'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy', 'Terms', 'Security', 'Compliance'],
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 pt-16 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-dim to-electric flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-base font-semibold">
                Nexus<span className="gradient-text-violet">AI</span>
              </span>
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">
              The intelligence layer for modern enterprises.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-3">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider">{category}</p>
              {items.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/8">
          <p className="text-xs text-muted-foreground">
            © 2026 NexusAI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
