import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Home Deep Cleaning',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop',
    badge: 'Top-rated',
  },
  {
    title: 'Appliance Repair',
    img: 'https://images.unsplash.com/photo-1581093458791-9d09f12a7c3b?q=80&w=1600&auto=format&fit=crop',
    badge: 'Same-day',
  },
  {
    title: 'IT & Device Setup',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    badge: 'Popular',
  },
  {
    title: 'Personal Training',
    img: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop',
    badge: 'Wellness',
  },
  {
    title: 'Interior Painting',
    img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop',
    badge: 'Trending',
  },
  {
    title: 'Business Consulting',
    img: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop',
    badge: 'Expert',
  },
]

const card = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i, type: 'spring', stiffness: 140, damping: 16 } })
}

const Showcase = () => {
  return (
    <section className="relative w-full py-20 bg-slate-900">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Explore services</h2>
            <p className="mt-2 text-white/70">A curated selection with visuals for quick decisions.</p>
          </div>
          <a href="#get-started" className="text-sm text-blue-300 hover:text-blue-200">See more</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={card}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-black/60 text-white text-xs px-2 py-1 ring-1 ring-white/20 backdrop-blur">
                  {s.badge}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium">{s.title}</h3>
                <p className="text-white/60 text-sm mt-1">Starting from $39 • 1-2h avg</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
