import React from 'react'
import { motion, useInView } from 'framer-motion'
import { CalendarDays, Search, ShieldCheck, Sparkles, Wallet } from 'lucide-react'

const steps = [
  {
    icon: <Search className="h-5 w-5" />,
    title: 'Discover',
    desc: 'Tell us what you need and browse vetted pros instantly.',
  },
  {
    icon: <CalendarDays className="h-5 w-5" />,
    title: 'Schedule',
    desc: 'Pick a time that works. Real-time availability with instant confirmation.',
  },
  {
    icon: <Wallet className="h-5 w-5" />,
    title: 'Pay Securely',
    desc: 'Fintech-grade checkout with vaulting and transparent pricing.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Get It Done',
    desc: 'Pro arrives on time. Rate the experience and rebook in one tap.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } }
}

const HowItWorks = () => {
  return (
    <section className="relative w-full py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(500px_180px_at_20%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(500px_180px_at_90%_110%,rgba(99,102,241,0.15),transparent)]"/>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200 ring-1 ring-blue-400/20">
            <Sparkles size={14} /> How it works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">Book in 4 simple steps</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Designed for speed and clarity—no back-and-forth, just results.</p>
        </div>

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((s, i) => (
            <motion.li
              key={i}
              variants={item}
              className="group relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/20 flex items-center justify-center">
                  {s.icon}
                </div>
                <div className="text-white/60 text-sm">Step {i + 1}</div>
              </div>
              <h3 className="mt-4 text-white font-medium text-lg">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
              <motion.div
                className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
              />
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

export default HowItWorks
