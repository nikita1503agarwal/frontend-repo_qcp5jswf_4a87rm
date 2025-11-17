import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15 backdrop-blur">
          <Sparkles size={14} />
          Services on Demand
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]">
          Get anything done, on your schedule
        </h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80">
          From home cleaning to expert consulting — book trusted professionals in minutes. Secure payments, clear pricing, and instant confirmations.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a href="#get-started" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white px-6 py-3 text-sm sm:text-base font-medium shadow-lg shadow-blue-600/20 transition-colors">
            Get Started
            <ArrowRight size={18} />
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-6 py-3 text-sm sm:text-base font-medium ring-1 ring-white/20 transition-colors">
            <ShieldCheck size={18} />
            How it works
          </a>
        </div>

        <div className="mt-8 flex items-center gap-6 text-white/70 text-sm">
          <div>Secure • Fintech-grade payments</div>
          <div className="hidden sm:block h-4 w-px bg-white/20" />
          <div className="hidden sm:block">Transparent pricing</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
