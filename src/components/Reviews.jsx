import React from 'react'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Ava M.',
    role: 'Homeowner',
    text: 'Booked a deep clean and it was spotless. Payment and scheduling were effortless.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Daniel K.',
    role: 'Startup Founder',
    text: 'Got same-day IT setup in our new office. Super fast and professional.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Maya R.',
    role: 'Designer',
    text: 'Loved the transparent pricing and the ability to rebook my favorite pro in a tap.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop'
  }
]

const Reviews = () => {
  return (
    <section className="relative w-full py-20 bg-slate-900">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">What customers say</h2>
            <p className="mt-2 text-white/70">Real stories from people who got it done with us.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <Quote className="absolute -top-3 -left-3 h-8 w-8 text-white/10" />
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="text-white font-medium">{r.name}</div>
                  <div className="text-white/60 text-xs">{r.role}</div>
                </div>
              </div>
              <p className="mt-4 text-white/80 text-sm">“{r.text}”</p>
              <div className="mt-4 flex items-center gap-1 text-yellow-300">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} fill="currentColor" className="h-4 w-4" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
