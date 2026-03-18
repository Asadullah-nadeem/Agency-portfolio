export default function ServicesPage() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 bg-primary flex items-center justify-center rounded-lg">
              <span className="material-symbols-outlined text-background-dark font-bold">deployed_code</span>
            </div>
            <h2 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">SPATIAL</h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Services</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Work</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Process</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center justify-center px-6 py-2.5 bg-primary text-background-dark text-sm font-bold rounded-xl glow-hover transition-all">
              Contact Us
            </button>
            <div className="size-10 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center overflow-hidden">
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/30 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
              Minimalist Precision
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-500">
              Our Specialized <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Pushing the boundaries of digital design through immersive experiences, performance-driven architecture, and minimalist precision.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-primary text-background-dark font-bold rounded-xl glow-hover">View Our Portfolio</button>
              <button className="px-8 py-4 bg-transparent border border-slate-300 dark:border-primary/30 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-primary/5">Request Quote</button>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-slate-50 dark:bg-neutral-dark/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group p-8 rounded-3xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-neutral-dark/50 hover:border-primary/50 transition-all duration-500">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary text-3xl">view_in_ar</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Spatial Web</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Immersive 3D web experiences that redefine how users browse.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> 3D Environments &amp; Modeling</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> WebGL / Three.js Performance</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> Interactive Narrative Design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
