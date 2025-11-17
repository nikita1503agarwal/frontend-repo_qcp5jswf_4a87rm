import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/60 text-sm">© {new Date().getFullYear()} OnDemand. All rights reserved.</div>
        <div className="flex items-center gap-6 text-white/60 text-sm">
          <a href="#" className="hover:text-white/80">Privacy</a>
          <a href="#" className="hover:text-white/80">Terms</a>
          <a href="#" className="hover:text-white/80">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
