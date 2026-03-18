export default function PricingPage() {
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
          <a className="hover:text-brand transition-colors" href="#pricing">Pricing</a>
          <a className="hover:text-brand transition-colors" href="#about">About</a>
          <a className="px-5 py-2 bg-brand text-charcoal-900 rounded-custom font-bold hover:bg-white transition-all transform hover:scale-105 active:scale-95" href="#contact">Let&apos;s Talk</a>
        </div>
        <button aria-label="Menu" className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
        </button>
      </nav>

      <main>
        {/* Pricing Section */}
        <section className="py-32 px-6 bg-charcoal-800 border-b border-white/5" id="pricing">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="text-brand font-bold tracking-widest text-xs uppercase mb-4 block">Pricing Models</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Scalable investment plans.</h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-light">Transparent pricing tailored for startups and global enterprises. No hidden fees, just high-performance delivery.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Tier */}
              <div className="p-10 glass-card rounded-custom flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
                  <p className="text-gray-500 text-sm">Perfect for MVP launches</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold">$4.5k</span>
                  <span className="text-gray-500 text-sm">/ project start</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="w-5 h-5 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Core Spatial Website
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="w-5 h-5 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    3 Custom 3D Assets
                  </li>
                </ul>
                <a className="w-full py-4 glass-card text-center rounded-custom font-bold hover:bg-white/5 transition-all" href="#contact">Get Started</a>
              </div>

              {/* Professional Tier */}
              <div className="p-10 glass-card rounded-custom flex flex-col h-full border-brand/30 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-charcoal-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Most Popular</div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">Professional</h3>
                  <p className="text-gray-500 text-sm">For scaling digital brands</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-brand text-glow">$12k</span>
                  <span className="text-gray-500 text-sm">/ avg project</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="w-5 h-5 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Full Spatial Ecosystem
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="w-5 h-5 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Unlimited 3D Assets
                  </li>
                </ul>
                <a className="w-full py-4 bg-brand text-charcoal-900 text-center rounded-custom font-bold cyan-glow hover:brightness-110 transition-all" href="#contact">Select Pro</a>
              </div>

              {/* Enterprise Tier */}
              <div className="p-10 glass-card rounded-custom flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <p className="text-gray-500 text-sm">Custom high-spec solutions</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold">Custom</span>
                  <span className="text-gray-500 text-sm">/ tailored</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="w-5 h-5 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Custom Architecture
                  </li>
                  <li className="flex items-center text-sm text-gray-300">
                    <svg className="w-5 h-5 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Dedicated Project Team
                  </li>
                </ul>
                <a className="w-full py-4 glass-card text-center rounded-custom font-bold hover:bg-white/5 transition-all" href="#contact">Contact Us</a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
