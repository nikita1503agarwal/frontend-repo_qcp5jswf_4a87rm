import React from 'react'
import { Brush, Briefcase, Home, Laptop, Wrench, Stethoscope } from 'lucide-react'

const categories = [
  { icon: <Home className="h-5 w-5" />, title: 'Home Cleaning' },
  { icon: <Wrench className="h-5 w-5" />, title: 'Repairs' },
  { icon: <Laptop className="h-5 w-5" />, title: 'Tech Support' },
  { icon: <Brush className="h-5 w-5" />, title: 'Design' },
  { icon: <Briefcase className="h-5 w-5" />, title: 'Consulting' },
  { icon: <Stethoscope className="h-5 w-5" />, title: 'Wellness' },
]

const Categories = () => {
  return (
    <section className="relative w-full py-20 bg-slate-950">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Popular categories</h2>
          <a href="#get-started" className="text-sm text-blue-300 hover:text-blue-200">Browse all</a>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c, i) => (
            <button key={i} className="group w-full rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 text-left hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/20 flex items-center justify-center">
                {c.icon}
              </div>
              <div className="mt-3 text-white font-medium text-sm">{c.title}</div>
              <div className="text-white/50 text-xs">Tap to explore</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
