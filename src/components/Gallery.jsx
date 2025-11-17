import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1567016546367-c3e5290ca36b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505576552414-210f3ce9b7a1?q=80&w=1600&auto=format&fit=crop',
]

const Gallery = () => {
  return (
    <section className="relative w-full py-20 bg-slate-950">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Visual gallery</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">A glimpse of outcomes across categories—clean, pro, delightful.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <div key={i} className={`relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5 ${i % 5 === 0 ? 'col-span-2' : ''}`}>
              <img src={src} alt="gallery" className="h-full w-full object-cover aspect-[4/3] sm:aspect-[16/10] transition-transform duration-500 hover:scale-105" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
