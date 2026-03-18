// app/page.tsx
export default function Home() {
  return (
    <>
      {/* NavigationBar */}
      <nav className="fixed top-0 w-full z-50 glass-nav" data-purpose="main-navigation">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-custom flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-dark-900 rounded-sm rotate-45"></div>
            </div>
            <span className="text-xl font-extrabold tracking-tighter">SPATIAL</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400">
            <a className="hover:text-brand transition-colors" href="#work">Work</a>
            <a className="hover:text-brand transition-colors" href="#process">Process</a>
            <a className="hover:text-brand transition-colors" href="#services">Services</a>
            <a className="px-5 py-2 border border-brand text-brand rounded-custom hover:bg-brand hover:text-dark-900 transition-all duration-300" href="#">
              Contact
            </a>
          </div>
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 8h16M4 16h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </nav>

      <main>
        {/* HeroSection */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden grid-bg" data-purpose="hero-landing">
          {/* Glow Gradients */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Hero Text */}
            <div>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-none mb-8">
                DIGITAL <br/>
                <span className="text-brand">SPATIAL</span> <br/>
                EXPERIENCE.
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                We build immersive digital interfaces and high-performance products that redefine how users interact with the web.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-brand text-dark-900 font-bold rounded-custom hover:scale-105 transition-transform">
                  Get Started
                </button>
                <button className="px-8 py-4 border border-white/10 hover:border-white/30 rounded-custom font-bold transition-all">
                  View Showcase
                </button>
              </div>
            </div>

            {/* 3D Layered Cards */}
            <div className="relative h-[500px] hidden lg:block" data-purpose="hero-visual">
              {/* Main Floating Card */}
              <div className="absolute top-1/4 left-1/4 w-[400px] h-[280px] glass-card rounded-custom z-30 p-8 flex flex-col justify-between animate-float">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center">
                    <div className="w-4 h-4 bg-brand rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">01 // CORE_UI</div>
                </div>
                <div>
                  <div className="h-2 w-32 bg-white/10 rounded mb-4"></div>
                  <div className="h-8 w-full bg-white/5 border border-white/10 rounded"></div>
                </div>
              </div>

              {/* Secondary Card (Behind) */}
              <div className="absolute top-0 right-0 w-[300px] h-[200px] glass-card rounded-custom z-20 p-6 animate-float-delayed opacity-60">
                <div className="space-y-4">
                  <div className="h-1 bg-brand/30 w-1/2"></div>
                  <div className="h-1 bg-white/10 w-full"></div>
                  <div className="h-1 bg-white/10 w-3/4"></div>
                </div>
              </div>

              {/* Tertiary Card (Lower) */}
              <div className="absolute bottom-10 left-0 w-[250px] h-[150px] glass-card rounded-custom z-10 p-6 animate-float opacity-40">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand"></div>
                  <div className="h-1 bg-white/10 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PortfolioSection */}
        <section className="py-32 bg-dark-900 border-t border-white/5" data-purpose="portfolio-grid" id="work">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-brand text-sm font-mono tracking-widest uppercase mb-4 block">Case Studies</span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">SELECTED WORK.</h2>
              </div>
              <a className="text-gray-400 hover:text-brand transition-colors border-b border-transparent hover:border-brand pb-1 text-sm font-medium" href="#">View all projects &rarr;</a>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Portfolio Item 1 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-custom aspect-video bg-dark-800 border border-white/10 mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Project Alpha" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzMoKCTd0XPap4tRLpvpdU1r34Q7GCl6QqnhvTk6wG-Sw15xOOiJU7K-Dh0CoR0ZWhKAbghxijEikKmxg2xbDLe_KeyXFcShnZ-nLAXqmJv2pfuuEQQxPrz2ga2JDp9KCaRXA6CGgNehdnDXArITWoAocMEEGvwvgRWHH76U9MTcyuqibXbMr-pzsssrzFmFbFLTTmSvRIWLJVS8Ml0RUGy24OaY3eXLUQMvkiktEyGOHMUshQVFvmpzf6Z-J2KZ0isrNfKox59Lu3"/>
                  <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-6 py-3 bg-brand text-dark-900 font-bold rounded-custom">View Case Study</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">NEON ARCHITECTURE</h3>
                <p className="text-gray-400">Spatial UI / Web Platform</p>
              </div>

              {/* Portfolio Item 2 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-custom aspect-video bg-dark-800 border border-white/10 mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Project Omega" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUXZNo4qgOa77Wj8WMMutV644HsR-QAqGOiCeVwuNudVmTjRBj_6HQzUxGf5HsbixZIMwQI3mcrTc20Sa9-sNzO9l-rb7q44i13NXAkgGfhQ_SattMWJw2fCmc8TY3ZTBW1mmX5y5KDJDd8_EJoLEuvdv-QgEgYttsAQIyujTmxoSah9m8ZpXsXU6AX7qQOraEWld8mWufbOfDQvdI36mttw1tO-i49QXldj3Dxolw1GeD7iVeI7sFF5k_UlXAtCq2Yqm-DbQw59Sg"/>
                  <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-6 py-3 bg-brand text-dark-900 font-bold rounded-custom">View Case Study</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">VIRTUAL OS</h3>
                <p className="text-gray-400">Design System / UX Research</p>
              </div>
            </div>
          </div>
        </section>

        {/* ProcessSection */}
        <section className="py-32 bg-dark-800/50" data-purpose="process-flow" id="process">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">OUR METHOD.</h2>
              <p className="text-gray-400">A rigorous approach to building digital products that balance aesthetic beauty with high-performance engineering.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="p-10 glass-card rounded-custom relative group">
                <span className="text-6xl font-extrabold text-white/5 absolute top-4 right-6 group-hover:text-brand/10 transition-colors">01</span>
                <div className="w-12 h-12 rounded-custom bg-brand/10 flex items-center justify-center mb-8">
                  <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4">Discovery</h4>
                <p className="text-gray-400 text-sm leading-relaxed">We analyze your project requirements, target audience, and market landscape to define a clear trajectory.</p>
              </div>

              {/* Step 2 */}
              <div className="p-10 glass-card rounded-custom relative group">
                <span className="text-6xl font-extrabold text-white/5 absolute top-4 right-6 group-hover:text-brand/10 transition-colors">02</span>
                <div className="w-12 h-12 rounded-custom bg-brand/10 flex items-center justify-center mb-8">
                  <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4">Architecture</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Designing the skeletal structure and interactive blueprints. We focus on spatial hierarchy and intuitive flows.</p>
              </div>

              {/* Step 3 */}
              <div className="p-10 glass-card rounded-custom relative group">
                <span className="text-6xl font-extrabold text-white/5 absolute top-4 right-6 group-hover:text-brand/10 transition-colors">03</span>
                <div className="w-12 h-12 rounded-custom bg-brand/10 flex items-center justify-center mb-8">
                  <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4">Execution</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Bringing designs to life with clean code and smooth animations, ensuring a premium finish every time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CallToAction */}
        <section className="py-32 relative overflow-hidden" data-purpose="cta-section">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="p-16 glass-card rounded-custom relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter">READY TO SYNC?</h2>
              <p className="text-xl text-gray-400 mb-10">Let&apos;s build the future of your digital identity together.</p>
              <button className="px-12 py-5 bg-brand text-dark-900 font-extrabold rounded-custom hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all">
                Start A Project
              </button>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand/10 blur-[100px] rounded-full pointer-events-none"></div>
        </section>
      </main>

      {/* MainFooter */}
      <footer className="py-20 border-t border-white/10 bg-dark-900" data-purpose="site-footer">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-brand rounded-sm"></div>
                <span className="text-lg font-extrabold tracking-tighter uppercase">Spatial</span>
              </div>
              <p className="text-gray-500 max-w-sm">
                A premium creative studio specializing in high-performance digital interfaces and spatial design systems.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-brand">Connect</h5>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a className="hover:text-white transition-colors" href="#">X / Twitter</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Dribbble</a></li>
                <li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-brand">Legal</h5>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600 font-mono">
            <p>&copy; 2024 SPATIAL_STUDIO. ALL RIGHTS RESERVED.</p>
            <p>BUILD_VERSION_2.0.4</p>
          </div>
        </div>
      </footer>
    </>
  );
}
