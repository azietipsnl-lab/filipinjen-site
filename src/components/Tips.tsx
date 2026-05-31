import { TIPS } from '../constants';

export function Tips() {
  return (
    <section id="tips" className="py-24 bg-ph-green text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ph-sun/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-ph-sun font-bold uppercase tracking-widest text-sm mb-4 block">Pro Traveler Guide</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Essential Tips for Your Philippines Trip</h2>
            <p className="text-ph-sand/70 text-lg mb-10 font-light leading-relaxed">
              Navigating 7,000+ islands can be a challenge. We've compiled the most important 
              information to ensure your journey is smooth, safe, and truly authentic.
            </p>
            <button className="px-8 py-4 bg-white text-ph-green rounded-full font-bold uppercase tracking-widest text-xs hover:bg-ph-sun hover:text-white transition-all shadow-xl shadow-black/10">
              Download Full Guide
            </button>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TIPS.map((tip, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 bg-ph-sun/20 text-ph-sun rounded-2xl flex items-center justify-center mb-6 border border-ph-sun/30 group-hover:scale-110 transition-transform">
                  {tip.icon}
                </div>
                <h4 className="text-xl font-serif mb-3 italic">{tip.title}</h4>
                <p className="text-sm text-ph-sand/60 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
