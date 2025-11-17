import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Categories from './components/Categories'
import Showcase from './components/Showcase'
import HowItWorks from './components/HowItWorks'
import VideoPreviews from './components/VideoPreviews'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero with Spline background */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Showcase with images */}
      <Showcase />

      {/* How it works (animated) */}
      <HowItWorks />

      {/* Video previews */}
      <VideoPreviews />

      {/* Categories */}
      <Categories />

      {/* Gallery */}
      <Gallery />

      {/* CTA */}
      <section id="get-started" className="relative w-full py-20 bg-slate-900">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Ready to book your next service?</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Tell us what you need and we’ll match you with vetted professionals in seconds.</p>
          <form className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="e.g., Deep clean my apartment this weekend"
              className="flex-1 rounded-xl bg-white/10 text-white placeholder-white/50 px-4 py-3 ring-1 ring-white/15 focus:outline-none focus:ring-blue-400/40"
            />
            <button className="rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white px-6 py-3 font-medium shadow-lg shadow-blue-600/20 transition-colors">
              Find Pros
            </button>
          </form>
          <div className="mt-4 text-xs text-white/60">No sign-up required</div>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
