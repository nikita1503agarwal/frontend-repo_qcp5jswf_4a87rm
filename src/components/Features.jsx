import React from 'react'
import { Clock, CreditCard, Shield, Sparkles, Star, Truck } from 'lucide-react'

const features = [
  {
    icon: <Clock className="h-5 w-5" />, 
    title: 'Book in minutes',
    desc: 'Find, schedule, and manage bookings without the back-and-forth.'
  },
  {
    icon: <Shield className="h-5 w-5" />, 
    title: 'Verified pros',
    desc: 'All providers are vetted with ID checks and performance reviews.'
  },
  {
    icon: <CreditCard className="h-5 w-5" />, 
    title: 'Secure payments',
    desc: 'Protected checkout with instant receipts and refunds when needed.'
  },
]

const Features = () => {
  return (
    <section id="features" className="relative w-full py-20 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_-10%,rgba(59,130,246,0.18),transparent),radial-gradient(400px_160px_at_10%_110%,rgba(99,102,241,0.18),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200 ring-1 ring-blue-400/20">
            <Sparkles size={14} /> Why choose us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">Everything you need to get things done</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Browse categories, compare ratings, and book the right pro with confidence. We handle the logistics so you can focus on results.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/20">
                {f.icon}
              </div>
              <h3 className="mt-4 text-white font-medium text-lg">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-[1px]">
          <div className="rounded-2xl bg-slate-900 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-medium text-lg">Trusted by thousands</h3>
              <p className="text-white/70 text-sm">4.9 average rating across 25k+ bookings</p>
            </div>
            <div className="flex items-center gap-1 text-yellow-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} fill="currentColor" className="h-5 w-5" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
