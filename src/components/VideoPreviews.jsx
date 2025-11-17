import React from 'react'
import { PlayCircle } from 'lucide-react'

const videos = [
  {
    title: 'Professional Home Cleaning',
    thumb: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1600&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    title: 'Fast Appliance Repair',
    thumb: 'https://images.unsplash.com/photo-1581091014534-8987c1d1d23a?q=80&w=1600&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=oHg5SJYRHA0'
  },
  {
    title: 'IT Setup Walkthrough',
    thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  }
]

const VideoPreviews = () => {
  return (
    <section className="relative w-full py-20 bg-slate-950">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">See it in action</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Quick service previews to set expectations and build trust.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <a key={i} href={v.url} target="_blank" rel="noreferrer" className="group relative block overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
              <div className="aspect-video overflow-hidden">
                <img src={v.thumb} alt={v.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/60 text-white px-3 py-2 ring-1 ring-white/20 backdrop-blur">
                  <PlayCircle className="h-5 w-5" />
                  <span className="text-sm">Play</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium">{v.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoPreviews
