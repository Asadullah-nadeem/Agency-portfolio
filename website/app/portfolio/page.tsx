export default function PortfolioPage() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl font-bold">spatial_tracking</span>
            </div>
            <h2 className="text-xl font-black tracking-tighter uppercase">Spatial</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Work</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Services</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">About</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Journal</a>
          </nav>
          <button className="rounded-full bg-primary px-6 py-2 text-sm font-bold text-background-dark hover:scale-105 transition-transform">
            Hire Us
          </button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
              Case Studies
            </div>
            <h1 className="text-5xl font-black tracking-tight lg:text-7xl mb-6">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Pushing digital boundaries through immersive experiences and cutting-edge design. We transform ambitious ideas into world-class digital realities.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-full bg-primary px-6 py-2 text-sm font-bold text-background-dark">All Projects</button>
            <button className="rounded-full bg-slate-200 dark:bg-slate-800 px-6 py-2 text-sm font-bold hover:bg-primary/20 transition-colors">Web</button>
            <button className="rounded-full bg-slate-200 dark:bg-slate-800 px-6 py-2 text-sm font-bold hover:bg-primary/20 transition-colors">App</button>
            <button className="rounded-full bg-slate-200 dark:bg-slate-800 px-6 py-2 text-sm font-bold hover:bg-primary/20 transition-colors">3D</button>
            <button className="rounded-full bg-slate-200 dark:bg-slate-800 px-6 py-2 text-sm font-bold hover:bg-primary/20 transition-colors">Motion</button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 neon-glow transition-all duration-300">
                <div className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110 bg-gray-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="mb-2 inline-block rounded-md bg-primary/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-sm">Category</span>
                  <h3 className="text-xl font-bold text-white">Project Name {item}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">spatial_tracking</span>
                <span className="text-xl font-black uppercase tracking-tighter">Spatial</span>
              </div>
              <p className="max-w-xs text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                A global creative agency specialized in immersive digital experiences, high-fidelity UI/UX, and future-forward branding.
              </p>
            </div>
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">Links</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a className="hover:text-primary" href="#">Projects</a></li>
                <li><a className="hover:text-primary" href="#">The Agency</a></li>
                <li><a className="hover:text-primary" href="#">Our Process</a></li>
                <li><a className="hover:text-primary" href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">Follow</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a className="hover:text-primary" href="#">Instagram</a></li>
                <li><a className="hover:text-primary" href="#">Dribbble</a></li>
                <li><a className="hover:text-primary" href="#">LinkedIn</a></li>
                <li><a className="hover:text-primary" href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-200 dark:border-slate-800 pt-8 md:flex-row">
            <p className="text-xs text-slate-500">&copy; 2024 Spatial Design Agency. All rights reserved.</p>
            <div className="flex gap-8 text-xs text-slate-500">
              <a className="hover:text-primary" href="#">Privacy Policy</a>
              <a className="hover:text-primary" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
