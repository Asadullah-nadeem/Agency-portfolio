export default function FinalPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 py-6 px-8 flex justify-between items-center transition-all duration-300 bg-charcoal-900/80 backdrop-blur-md border-b border-white/5" data-purpose="main-nav" id="main-nav">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand rounded-custom cyan-glow"></div>
          <span className="text-xl font-extrabold tracking-tighter uppercase">Spatial</span>
        </div>
        <div className="hidden md:flex gap-10 items-center text-sm font-medium tracking-wide">
          <a className="hover:text-brand transition-colors" href="#services">Services</a>
          <a className="hover:text-brand transition-colors" href="#portfolio">Portfolio</a>
          <a className="hover:text-brand transition-colors" href="#about">About</a>
          <a className="px-5 py-2 bg-brand text-charcoal-900 rounded-custom font-bold hover:bg-white transition-all transform hover:scale-105 active:scale-95" href="#contact">Let&apos;s Talk</a>
        </div>
        <button aria-label="Menu" className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
        </button>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden" id="hero">
          <div className="spatial-layer top-1/4 -left-20 w-64 h-64 bg-brand opacity-10 blur-[120px] rounded-full animate-pulse-slow"></div>
          <div className="spatial-layer bottom-1/4 -right-20 w-96 h-96 bg-brand opacity-5 blur-[150px] rounded-full animate-pulse-slow"></div>
          <div className="spatial-layer top-[20%] right-[15%] w-16 h-16 border border-brand/20 rounded-custom rotate-12 animate-float z-10"></div>
          <div className="spatial-layer bottom-[15%] left-[10%] w-24 h-24 border border-white/10 rounded-full animate-float-delayed z-10"></div>
          <div className="spatial-layer top-[50%] left-[5%] w-12 h-12 bg-white/5 backdrop-blur-sm rounded-custom -rotate-12 animate-float z-10"></div>

          <div className="container mx-auto px-6 text-center relative z-20">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-none">
              CRAFTING THE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-white text-glow">SPATIAL FUTURE</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 font-light tracking-wide leading-relaxed">
              High-performance digital products built for the next generation of web and 3D experiences. Clean, minimalist, and undeniably futuristic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a className="px-10 py-4 bg-brand text-charcoal-900 font-bold rounded-custom cyan-glow hover:brightness-110 transition-all flex items-center justify-center group" href="#portfolio">
                Explore Work
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </a>
              <a className="px-10 py-4 glass-card font-bold rounded-custom hover:bg-white/10 transition-all flex items-center justify-center" href="#services">
                Our Expertise
              </a>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 bg-charcoal-800" id="services">
          <div className="container mx-auto">
            <div className="mb-16">
              <span className="text-brand font-bold tracking-widest text-xs uppercase mb-4 block">Our Capabilities</span>
              <h2 className="text-4xl font-bold">Cutting-edge services for modern brands.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-purpose="services-grid">
              <div className="p-8 glass-card rounded-custom group">
                <div className="w-12 h-12 bg-charcoal-700 flex items-center justify-center rounded-custom mb-6 group-hover:bg-brand transition-colors duration-300">
                  <svg className="w-6 h-6 text-brand group-hover:text-charcoal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Spatial Web</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Immersive 3D web experiences optimized for high-performance interaction and accessibility.</p>
              </div>
              <div className="p-8 glass-card rounded-custom group">
                <div className="w-12 h-12 bg-charcoal-700 flex items-center justify-center rounded-custom mb-6 group-hover:bg-brand transition-colors duration-300">
                  <svg className="w-6 h-6 text-brand group-hover:text-charcoal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">App Design</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Sleek, minimalist mobile interfaces built with a focus on usability and aesthetic precision.</p>
              </div>
              <div className="p-8 glass-card rounded-custom group">
                <div className="w-12 h-12 bg-charcoal-700 flex items-center justify-center rounded-custom mb-6 group-hover:bg-brand transition-colors duration-300">
                  <svg className="w-6 h-6 text-brand group-hover:text-charcoal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Motion Systems</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Strategic animations and micro-interactions that bring digital brand identities to life.</p>
              </div>
              <div className="p-8 glass-card rounded-custom group">
                <div className="w-12 h-12 bg-charcoal-700 flex items-center justify-center rounded-custom mb-6 group-hover:bg-brand transition-colors duration-300">
                  <svg className="w-6 h-6 text-brand group-hover:text-charcoal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Architecture</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Robust technical architecture designed for scalability, speed, and cross-platform reliability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="py-24 px-6" id="portfolio">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-brand font-bold tracking-widest text-xs uppercase mb-4 block">Case Studies</span>
                <h2 className="text-4xl font-bold">Selected Works</h2>
              </div>
              <a className="text-sm font-bold border-b border-brand pb-1 hover:text-brand transition-colors" href="#">View All Projects</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <article className="group relative overflow-hidden rounded-custom" data-purpose="portfolio-item">
                <div className="aspect-video bg-charcoal-700 overflow-hidden rounded-custom mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Project Titan Visualization" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuncPKtGeFk5__QecEt0eSmW4CZoIPLdsKrJI3bJhsFwWMKyxJ1zVolnEpfyyryJTSkHdihdCtprf5DEvr6zaF5xwnVXj7c3incjvIlMT8tme6E4ms19sa6jZhVxnVcWIzwh6ef0e-G1fLhiYhHI060KZaLLptQ_YzT5Xcr9bzmxHJAlxpkI-AfsxjJldegzqPiPwnwyqzx46gbZuaqS41snFJUCcpUJrsFXPO6KKGTFV0SZ9VElz1EZUD6CTLHBqitDtIQJLJvck5"/>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Titan Ecosystem</h3>
                    <p className="text-gray-500 text-sm uppercase tracking-widest">Fintech &bull; 2023</p>
                  </div>
                  <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-charcoal-900 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </button>
                </div>
              </article>
              <article className="group relative overflow-hidden rounded-custom" data-purpose="portfolio-item">
                <div className="aspect-video bg-charcoal-700 overflow-hidden rounded-custom mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Nebula UI Interface" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0ESF25vkdafgYsrKERkgSvC2m6kYtiFW_RHGXEyZhaEhQ7_5KQXOX5_bNHEgbwYbqUQ5cbhYIy-s3zo-5Jfw9o3E4slSLNJcDdqRDDvA1ZDT3URpn13YjXRptommBOjXHVtNXvxH9J0fTXhaTAlz15CSdJw_NXkw1LbhB8Ck5ojQYX6B97xLvyxJ14Xt3Ot3Zvozv4CFU5YKOB6qcOEFj9PURI6EuJ60Ae-iVe0uHDIi0dhivA8EyYbF-T9rmiIRmbQExC68DvvaT"/>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Nebula UI Design System</h3>
                    <p className="text-gray-500 text-sm uppercase tracking-widest">E-Commerce &bull; 2024</p>
                  </div>
                  <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-charcoal-900 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-brand/5 relative" id="contact">
          <div className="container mx-auto text-center py-12">
            <h2 className="text-4xl md:text-6xl font-black mb-8">READY TO SHIP?</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">We are currently taking on new projects for Q3 2024. Let&apos;s build something exceptional together.</p>
            <a className="inline-block px-12 py-5 bg-brand text-charcoal-900 font-bold rounded-custom text-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand/20" href="mailto:hello@spatial.agency">
              hello@spatial.agency
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-charcoal-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-brand rounded-custom"></div>
                <span className="text-lg font-bold tracking-tighter uppercase">Spatial</span>
              </div>
              <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
                Minimalist tech agency pushing the boundaries of spatial computing and digital design. High-performance by default.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a className="hover:text-brand transition-colors" href="#">Home</a></li>
                <li><a className="hover:text-brand transition-colors" href="#services">Services</a></li>
                <li><a className="hover:text-brand transition-colors" href="#portfolio">Portfolio</a></li>
                <li><a className="hover:text-brand transition-colors" href="#">Process</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a className="hover:text-brand transition-colors" href="#">Twitter (X)</a></li>
                <li><a className="hover:text-brand transition-colors" href="#">LinkedIn</a></li>
                <li><a className="hover:text-brand transition-colors" href="#">Dribbble</a></li>
                <li><a className="hover:text-brand transition-colors" href="#">Github</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 text-[10px] uppercase tracking-widest">
            <p>&copy; 2024 SPATIAL DIGITAL AGENCY. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
