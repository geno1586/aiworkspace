'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ExternalLink } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

// ─── Mini website preview components ─────────────────────────────────────────

function ChauffeurPreview() {
  return (
    <div style={{ background: '#08080a', height: '100%', fontFamily: 'system-ui', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 10px', borderBottom: '1px solid #1e1800' }}>
        <span style={{ color: '#c9a84c', fontSize: 7, fontWeight: 700, letterSpacing: '0.15em' }}>APEX</span>
        <div style={{ display: 'flex', gap: 8 }}>
          {['Fleet', 'Services', 'Book'].map(l => <span key={l} style={{ color: '#555', fontSize: 5.5 }}>{l}</span>)}
        </div>
      </div>
      <div style={{ background: 'linear-gradient(160deg, #0f0c00, #0a0800, #080808)', padding: '12px 10px 8px', textAlign: 'center' }}>
        <div style={{ color: '#c9a84c', fontSize: 5, letterSpacing: '0.25em', marginBottom: 3, fontWeight: 500 }}>LUXURY CHAUFFEUR SERVICE</div>
        <div style={{ color: '#fff', fontSize: 10, fontWeight: 700, lineHeight: 1.2, marginBottom: 6 }}>
          Your Journey,<br /><span style={{ color: '#c9a84c' }}>Perfected.</span>
        </div>
        <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
          <div style={{ background: '#c9a84c', color: '#000', fontSize: 5.5, padding: '3.5px 10px', borderRadius: 20, fontWeight: 700 }}>Book a Ride</div>
          <div style={{ border: '0.5px solid #3a3000', color: '#c9a84c', fontSize: 5.5, padding: '3.5px 10px', borderRadius: 20 }}>Our Fleet</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 4, padding: '7px 10px 6px' }}>
        {[{ model: 'S-Class', tag: 'Executive' }, { model: 'Phantom', tag: 'Prestige' }, { model: 'Sprinter', tag: 'VIP Group' }].map((car, i) => (
          <div key={i} style={{ flex: 1, background: '#120c00', borderRadius: 4, border: '0.5px solid #2a2000', overflow: 'hidden' }}>
            <div style={{ height: 18, background: 'linear-gradient(135deg, #1e1600, #120c00)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 24, height: 7, background: '#2a2000', borderRadius: 2 }} />
            </div>
            <div style={{ padding: '3px 4px' }}>
              <div style={{ color: '#c9a84c', fontSize: 5, fontWeight: 600 }}>{car.model}</div>
              <div style={{ color: '#555', fontSize: 4.5 }}>{car.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SaasPreview() {
  const bars = [40, 65, 50, 80, 70, 90, 75, 60, 85, 95, 78, 88]
  return (
    <div style={{ background: '#070710', height: '100%', fontFamily: 'system-ui', overflow: 'hidden', display: 'flex' }}>
      <div style={{ width: 26, background: '#0b0b1a', borderRight: '0.5px solid #161628', padding: '7px 5px', flexShrink: 0 }}>
        <div style={{ width: 12, height: 12, background: 'oklch(0.65 0.27 290 / 50%)', borderRadius: 3, margin: '0 auto 6px' }} />
        {[true, false, false, false].map((active, i) => (
          <div key={i} style={{ height: 3, background: active ? 'oklch(0.65 0.27 290 / 60%)' : '#1e1e30', borderRadius: 1, marginBottom: 4, marginLeft: active ? 0 : 2, marginRight: active ? 0 : 2 }} />
        ))}
      </div>
      <div style={{ flex: 1, padding: '7px 8px', minWidth: 0 }}>
        <div style={{ display: 'flex', gap: 3, marginBottom: 5 }}>
          {[{ label: 'Requests', value: '2.4M', color: '#a78bfa' }, { label: 'Latency', value: '18ms', color: '#c9a84c' }, { label: 'Uptime', value: '99.9%', color: '#6ea8fe' }].map(s => (
            <div key={s.label} style={{ flex: 1, background: '#0f0f20', borderRadius: 4, padding: '3px 4px', border: '0.5px solid #1a1a30' }}>
              <div style={{ color: '#444', fontSize: 4 }}>{s.label}</div>
              <div style={{ color: s.color, fontSize: 8, fontWeight: 700, lineHeight: 1.2 }}>{s.value}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#0f0f20', borderRadius: 4, border: '0.5px solid #1a1a30', padding: '5px 5px 3px', marginBottom: 4 }}>
          <div style={{ color: '#333', fontSize: 4, marginBottom: 3 }}>API Traffic — Last 30 Days</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 1.5, height: 30 }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: 'linear-gradient(to top, oklch(0.65 0.27 290 / 80%), oklch(0.65 0.22 250 / 40%))', borderRadius: '1px 1px 0 0', minWidth: 0 }} />
            ))}
          </div>
        </div>
        {[80, 65, 50].map((w, i) => (
          <div key={i} style={{ display: 'flex', gap: 3, alignItems: 'center', marginBottom: 2 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: [' #6ea8fe', '#a78bfa', '#c9a84c'][i], flexShrink: 0 }} />
            <div style={{ height: 3, background: '#1a1a30', borderRadius: 1, flex: 1 }} />
            <div style={{ height: 3, background: '#141428', borderRadius: 1, width: `${w}%` }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function RealEstatePreview() {
  return (
    <div style={{ background: '#06060c', height: '100%', fontFamily: 'system-ui', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 9px', borderBottom: '0.5px solid #14141e', background: '#090910' }}>
        <span style={{ color: '#c9a84c', fontSize: 7, fontWeight: 700, letterSpacing: '0.1em' }}>PRESTIGE</span>
        <div style={{ background: '#c9a84c', color: '#000', fontSize: 4.5, padding: '2px 7px', borderRadius: 2, fontWeight: 700 }}>List Property</div>
      </div>
      <div style={{ background: 'linear-gradient(160deg, #0f0e1c, #08080f)', padding: '9px 9px 6px' }}>
        <div style={{ color: '#fff', fontSize: 9, fontWeight: 700, lineHeight: 1.2, marginBottom: 5 }}>
          Find Your<br /><span style={{ color: '#c9a84c' }}>Dream Home</span>
        </div>
        <div style={{ background: '#111120', borderRadius: 4, height: 14, display: 'flex', alignItems: 'center', padding: '0 6px', gap: 4, border: '0.5px solid #1e1e30' }}>
          <div style={{ flex: 1, height: 3, background: '#1e1e30', borderRadius: 1 }} />
          <div style={{ background: '#c9a84c', width: 16, height: 9, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 4, height: 4, border: '0.5px solid #000', borderRadius: '50%' }} />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 4, padding: '6px 9px' }}>
        {[{ price: '$2.4M', beds: '4 bd · 3 ba', loc: 'Beverly Hills' }, { price: '$1.8M', beds: '3 bd · 2 ba', loc: 'Malibu' }].map((p, i) => (
          <div key={i} style={{ flex: 1, background: '#0c0c1a', borderRadius: 5, border: '0.5px solid #18182a', overflow: 'hidden' }}>
            <div style={{ height: 24, background: `linear-gradient(135deg, #1a1a2e ${i * 20}%, #12122a)` }} />
            <div style={{ padding: '3px 5px' }}>
              <div style={{ color: '#c9a84c', fontSize: 7, fontWeight: 700 }}>{p.price}</div>
              <div style={{ color: '#555', fontSize: 4.5, marginTop: 1 }}>{p.beds}</div>
              <div style={{ color: '#666', fontSize: 4.5 }}>{p.loc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RestaurantPreview() {
  return (
    <div style={{ background: '#060402', height: '100%', fontFamily: 'Georgia, serif', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 9px', borderBottom: '0.5px solid #201200' }}>
        <span style={{ color: '#c9a84c', fontSize: 8, fontWeight: 400, fontStyle: 'italic' }}>Maison</span>
        <div style={{ display: 'flex', gap: 8 }}>
          {['Menu', 'Reserve', 'Events'].map(l => <span key={l} style={{ color: '#555', fontSize: 5 }}>{l}</span>)}
        </div>
      </div>
      <div style={{ height: 46, background: 'linear-gradient(160deg, #180c00, #0e0700, #150a00)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative' }}>
        <div style={{ color: '#c9a84c', fontSize: 4.5, letterSpacing: '0.2em', fontFamily: 'system-ui' }}>FINE DINING · EST. 2008</div>
        <div style={{ color: '#fff', fontSize: 9, fontWeight: 700, lineHeight: 1 }}>An Unforgettable</div>
        <div style={{ color: '#c9a84c', fontSize: 9, fontStyle: 'italic' }}>Experience.</div>
        <div style={{ marginTop: 3, border: '0.5px solid #c9a84c', color: '#c9a84c', fontSize: 4.5, padding: '2px 8px', letterSpacing: '0.1em', fontFamily: 'system-ui' }}>RESERVE A TABLE</div>
      </div>
      <div style={{ padding: '5px 9px' }}>
        <div style={{ color: '#c9a84c', fontSize: 4.5, letterSpacing: '0.15em', fontFamily: 'system-ui', marginBottom: 3, textAlign: 'center' }}>TONIGHT&apos;S MENU</div>
        {[['Seared Foie Gras', '$42'], ['Wagyu Tenderloin A5', '$89'], ['Lobster Bisque', '$28']].map(([name, price]) => (
          <div key={name} style={{ display: 'flex', justifyContent: 'space-between', padding: '2.5px 0', borderBottom: '0.5px solid #1a1000' }}>
            <span style={{ color: '#bbb', fontSize: 5 }}>{name}</span>
            <span style={{ color: '#c9a84c', fontSize: 5 }}>{price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function EcommercePreview() {
  return (
    <div style={{ background: '#060606', height: '100%', fontFamily: 'system-ui', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 9px', borderBottom: '0.5px solid #141414', background: '#090909' }}>
        <span style={{ color: '#fff', fontSize: 7.5, fontWeight: 700, letterSpacing: '0.1em' }}>LUX&Eacute;</span>
        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          <div style={{ height: 3, width: 18, background: '#1e1e1e', borderRadius: 1 }} />
          <div style={{ width: 7, height: 7, border: '0.5px solid #333', borderRadius: '50%' }} />
        </div>
      </div>
      <div style={{ display: 'flex', gap: 7, padding: '7px 9px' }}>
        <div style={{ width: 52, flexShrink: 0 }}>
          <div style={{ height: 52, background: 'linear-gradient(135deg, #1a1a1a, #111)', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 3, border: '0.5px solid #222' }}>
            <div style={{ width: 28, height: 28, background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)', borderRadius: '50%', border: '1px solid #333' }} />
          </div>
          <div style={{ display: 'flex', gap: 2 }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ flex: 1, height: 12, background: i === 0 ? '#1e1e1e' : '#111', borderRadius: 2, border: i === 0 ? '0.5px solid #c9a84c' : '0.5px solid #1a1a1a' }} />
            ))}
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: '#666', fontSize: 4.5, marginBottom: 1 }}>Limited Edition · 2024</div>
          <div style={{ color: '#fff', fontSize: 7, fontWeight: 600, lineHeight: 1.2, marginBottom: 3 }}>Obsidian<br />Chronograph</div>
          <div style={{ display: 'flex', gap: 1.5, marginBottom: 3 }}>
            {[...Array(5)].map((_, i) => <div key={i} style={{ width: 5, height: 5, background: '#c9a84c', borderRadius: 1 }} />)}
          </div>
          <div style={{ color: '#c9a84c', fontSize: 9, fontWeight: 700, marginBottom: 4 }}>$2,450</div>
          <div style={{ background: '#c9a84c', color: '#000', fontSize: 5.5, padding: '3px 10px', borderRadius: 3, fontWeight: 700, display: 'inline-block' }}>Add to Cart</div>
        </div>
      </div>
    </div>
  )
}

function LawFirmPreview() {
  return (
    <div style={{ background: '#040408', height: '100%', fontFamily: 'Georgia, serif', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 9px', borderBottom: '0.5px solid #12121e', background: '#070710' }}>
        <span style={{ color: '#e8e8f0', fontSize: 6.5, fontWeight: 700, letterSpacing: '0.08em', fontFamily: 'system-ui' }}>HARTWELL &amp; CO.</span>
        <div style={{ background: '#c9a84c', color: '#000', fontSize: 4.5, padding: '2px 7px', borderRadius: 2, fontWeight: 700, fontFamily: 'system-ui' }}>Consult</div>
      </div>
      <div style={{ padding: '10px 9px 6px', background: 'linear-gradient(160deg, #0c0c18, #060610)' }}>
        <div style={{ color: '#c9a84c', fontSize: 4.5, letterSpacing: '0.2em', fontFamily: 'system-ui', marginBottom: 3 }}>ESTABLISHED 1987</div>
        <div style={{ color: '#fff', fontSize: 9.5, fontWeight: 700, lineHeight: 1.2, marginBottom: 4 }}>
          Justice.<br /><span style={{ color: '#c9a84c' }}>Excellence.</span>
        </div>
        <div style={{ color: '#555', fontSize: 4.5, lineHeight: 1.6, fontFamily: 'system-ui' }}>
          Trusted by Fortune 500 companies<br />across 40+ jurisdictions worldwide.
        </div>
      </div>
      <div style={{ padding: '4px 9px' }}>
        <div style={{ color: '#444', fontSize: 4, letterSpacing: '0.15em', fontFamily: 'system-ui', marginBottom: 3 }}>PRACTICE AREAS</div>
        {['Corporate Law', 'M&A Advisory', 'Litigation', 'IP & Technology'].map(area => (
          <div key={area} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '2.5px 0', borderBottom: '0.5px solid #12121e' }}>
            <div style={{ width: 3, height: 3, background: '#c9a84c', borderRadius: '50%', flexShrink: 0 }} />
            <span style={{ color: '#aaa', fontSize: 5, fontFamily: 'system-ui' }}>{area}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PortfolioPreview() {
  const items = [
    { bg: 'oklch(0.65 0.27 290 / 35%)', w: '60%', label: 'Branding' },
    { bg: 'oklch(0.85 0.15 85 / 28%)', w: '37%', label: 'Motion' },
    { bg: 'oklch(0.65 0.22 250 / 30%)', w: '37%', label: 'Web' },
    { bg: 'oklch(0.65 0.27 290 / 22%)', w: '60%', label: 'Identity' },
  ]
  return (
    <div style={{ background: '#030305', height: '100%', fontFamily: 'system-ui', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 9px', borderBottom: '0.5px solid #0e0e14' }}>
        <span style={{ color: '#f0f0f8', fontSize: 7.5, fontWeight: 300, letterSpacing: '0.25em' }}>AXEL</span>
        <span style={{ color: '#555', fontSize: 4.5 }}>Creative Director</span>
      </div>
      <div style={{ padding: '7px 9px 4px' }}>
        <div style={{ color: '#777', fontSize: 4.5, marginBottom: 2 }}>Selected Works — 2024</div>
        <div style={{ color: '#fff', fontSize: 9, fontWeight: 700, lineHeight: 1.1, marginBottom: 5 }}>
          Design that<br />
          <span style={{ background: 'linear-gradient(90deg, oklch(0.65 0.27 290), oklch(0.65 0.22 250))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>moves.</span>
        </div>
      </div>
      <div style={{ padding: '0 9px', display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {items.map((item, i) => (
          <div key={i} style={{ width: item.w, height: 24, background: item.bg, borderRadius: 4, flexShrink: 0, minWidth: 0, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: 3, left: 4, color: 'rgba(255,255,255,0.45)', fontSize: 4 }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CoursePreview() {
  return (
    <div style={{ background: '#04050f', height: '100%', fontFamily: 'system-ui', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 9px', borderBottom: '0.5px solid #0e1020' }}>
        <span style={{ color: '#6ea8fe', fontSize: 7.5, fontWeight: 700, letterSpacing: '0.05em' }}>LEARN</span>
        <div style={{ background: 'oklch(0.65 0.22 250 / 80%)', color: '#fff', fontSize: 4.5, padding: '2px 8px', borderRadius: 20, fontWeight: 600 }}>Enroll Free</div>
      </div>
      <div style={{ display: 'flex', borderBottom: '0.5px solid #0e1020' }}>
        {[['2.4K', 'Students'], ['48', 'Courses'], ['4.9★', 'Rating']].map(([v, l], i) => (
          <div key={i} style={{ flex: 1, textAlign: 'center', padding: '4px 2px', borderRight: i < 2 ? '0.5px solid #0e1020' : 'none' }}>
            <div style={{ color: '#6ea8fe', fontSize: 7, fontWeight: 700 }}>{v}</div>
            <div style={{ color: '#444', fontSize: 4 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: '6px 9px 4px' }}>
        <div style={{ color: '#fff', fontSize: 8, fontWeight: 700, lineHeight: 1.2, marginBottom: 2 }}>
          Master AI<br /><span style={{ color: '#6ea8fe' }}>Engineering</span>
        </div>
        <div style={{ height: 3, background: '#0e1228', borderRadius: 2, overflow: 'hidden', marginBottom: 1 }}>
          <div style={{ width: '73%', height: '100%', background: 'oklch(0.65 0.22 250 / 80%)', borderRadius: 2 }} />
        </div>
        <div style={{ color: '#444', fontSize: 4, marginBottom: 5 }}>73% Complete · 14 modules remaining</div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[{ t: 'Prompt Eng.', p: 100, c: '#6ea8fe' }, { t: 'Fine-tuning', p: 60, c: '#a78bfa' }, { t: 'RAG Systems', p: 22, c: '#c9a84c' }].map((c, i) => (
            <div key={i} style={{ flex: 1, background: '#080b18', borderRadius: 4, border: '0.5px solid #0e1228', overflow: 'hidden' }}>
              <div style={{ height: 14, background: `linear-gradient(135deg, ${c.c}22, #080b18)` }} />
              <div style={{ padding: '2px 3px' }}>
                <div style={{ color: '#888', fontSize: 4, lineHeight: 1.3 }}>{c.t}</div>
                <div style={{ height: 2, background: '#0e1228', borderRadius: 1, marginTop: 1.5, overflow: 'hidden' }}>
                  <div style={{ width: `${c.p}%`, height: '100%', background: c.c }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Card data ────────────────────────────────────────────────────────────────

const GLOW_GOLD_BASE = '0 0 0 1px oklch(0.85 0.15 85 / 22%), 0 0 30px oklch(0.85 0.15 85 / 10%)'
const GLOW_GOLD_HOVER = '0 0 0 1px oklch(0.85 0.15 85 / 55%), 0 0 55px oklch(0.85 0.15 85 / 28%), 0 24px 48px oklch(0 0 0 / 50%)'
const GLOW_VIOLET_BASE = '0 0 0 1px oklch(0.65 0.27 290 / 22%), 0 0 30px oklch(0.65 0.27 290 / 10%)'
const GLOW_VIOLET_HOVER = '0 0 0 1px oklch(0.65 0.27 290 / 55%), 0 0 55px oklch(0.65 0.27 290 / 28%), 0 24px 48px oklch(0 0 0 / 50%)'
const GLOW_ELECTRIC_BASE = '0 0 0 1px oklch(0.65 0.22 250 / 22%), 0 0 30px oklch(0.65 0.22 250 / 10%)'
const GLOW_ELECTRIC_HOVER = '0 0 0 1px oklch(0.65 0.22 250 / 55%), 0 0 55px oklch(0.65 0.22 250 / 28%), 0 24px 48px oklch(0 0 0 / 50%)'

const sites = [
  {
    id: 1,
    title: 'Luxury Chauffeur Booking',
    industry: 'Transport & Automotive',
    description: 'White-glove chauffeur service with real-time booking, GPS fleet tracking, and a premium vehicle showcase.',
    glowBase: GLOW_GOLD_BASE,
    glowHover: GLOW_GOLD_HOVER,
    labelClass: 'border-gold/30 bg-gold/8 text-gold',
    Preview: ChauffeurPreview,
  },
  {
    id: 2,
    title: 'AI SaaS Dashboard',
    industry: 'Technology & AI',
    description: 'Enterprise-grade analytics platform with real-time API monitoring, latency dashboards, and workflow logs.',
    glowBase: GLOW_VIOLET_BASE,
    glowHover: GLOW_VIOLET_HOVER,
    labelClass: 'border-violet/30 bg-violet/8 text-violet',
    Preview: SaasPreview,
  },
  {
    id: 3,
    title: 'Real Estate Landing Page',
    industry: 'Real Estate & Property',
    description: 'Luxury property marketplace with AI-powered search, curated listings, and neighborhood intelligence.',
    glowBase: GLOW_GOLD_BASE,
    glowHover: GLOW_GOLD_HOVER,
    labelClass: 'border-gold/30 bg-gold/8 text-gold',
    Preview: RealEstatePreview,
  },
  {
    id: 4,
    title: 'Restaurant Website',
    industry: 'Food & Fine Dining',
    description: 'Sophisticated dining experience with online reservations, curated menus, and event management.',
    glowBase: GLOW_GOLD_BASE,
    glowHover: GLOW_GOLD_HOVER,
    labelClass: 'border-gold/30 bg-gold/8 text-gold',
    Preview: RestaurantPreview,
  },
  {
    id: 5,
    title: 'E-commerce Product Page',
    industry: 'Luxury Retail',
    description: 'High-conversion product pages with immersive galleries, social proof, and one-click checkout.',
    glowBase: GLOW_ELECTRIC_BASE,
    glowHover: GLOW_ELECTRIC_HOVER,
    labelClass: 'border-electric/30 bg-electric/8 text-electric',
    Preview: EcommercePreview,
  },
  {
    id: 6,
    title: 'Law Firm Website',
    industry: 'Legal Services',
    description: 'Authoritative legal presence with practice area showcases, attorney profiles, and consultation booking.',
    glowBase: GLOW_GOLD_BASE,
    glowHover: GLOW_GOLD_HOVER,
    labelClass: 'border-gold/30 bg-gold/8 text-gold',
    Preview: LawFirmPreview,
  },
  {
    id: 7,
    title: 'Creative Portfolio',
    industry: 'Design & Creative',
    description: 'Award-winning creative portfolio with motion-forward design, project case studies, and client inquiry flow.',
    glowBase: GLOW_VIOLET_BASE,
    glowHover: GLOW_VIOLET_HOVER,
    labelClass: 'border-violet/30 bg-violet/8 text-violet',
    Preview: PortfolioPreview,
  },
  {
    id: 8,
    title: 'Online Course Platform',
    industry: 'Education & E-Learning',
    description: 'Engaging learning platform with progress tracking, cohort management, and live session scheduling.',
    glowBase: GLOW_ELECTRIC_BASE,
    glowHover: GLOW_ELECTRIC_HOVER,
    labelClass: 'border-electric/30 bg-electric/8 text-electric',
    Preview: CoursePreview,
  },
]

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SampleGallery() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-28 px-4 overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gold/5 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-violet/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-electric/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-gold/25 bg-gold/8 text-gold text-sm font-medium mb-5"
          >
            Sample Website Gallery
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Websites we craft
            <br />
            <span className="gradient-text">for every industry.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed"
          >
            Premium, conversion-focused websites built for brands that refuse to
            blend in. Explore concept previews across eight high-value industries.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {sites.map((site) => {
            const Preview = site.Preview
            return (
              <motion.article
                key={site.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: site.glowHover,
                  transition: { duration: 0.25, ease: EASE },
                }}
                style={{ boxShadow: site.glowBase }}
                className="group relative flex flex-col glass-strong rounded-2xl overflow-hidden cursor-default"
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/8 bg-white/3 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  <div className="flex-1 mx-2">
                    <div className="h-4 rounded-md bg-white/5 max-w-[140px] mx-auto flex items-center justify-center">
                      <div className="w-16 h-1.5 rounded-sm bg-white/10" />
                    </div>
                  </div>
                </div>

                {/* Mini website preview */}
                <div className="relative h-[170px] overflow-hidden flex-shrink-0">
                  <Preview />
                  {/* Subtle bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Card info */}
                <div className="flex flex-col gap-3 p-4 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full border text-[11px] font-medium leading-none py-1 ${site.labelClass}`}>
                      {site.industry}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1.5 leading-snug">
                      {site.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {site.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-1">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="group/btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass border border-white/10 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors w-full justify-center"
                    >
                      Preview Concept
                      <ExternalLink className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
