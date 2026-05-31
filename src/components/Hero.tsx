import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with parallax-like effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1544211100-344403328e1b?auto=format&fit=crop&q=80&w=2000')`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-ph-sand" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="uppercase tracking-[0.3em] text-sm font-semibold mb-4 block text-ph-sun drop-shadow-md">
            MABUHAY! WELCOME TO PARADISE
          </span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-[1.1] drop-shadow-lg">
            Discover the Heart <br /> 
            <span className="italic">of the Philippines</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90 font-light leading-relaxed">
            From the crystal lagoons of Palawan to the emerald rice terraces of Banaue, 
            we curate unforgettable journeys across 7,641 islands.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#tours"
              className="px-8 py-4 bg-ph-sun text-white rounded-full font-medium flex items-center gap-2 hover:bg-ph-sun/90 transition-all shadow-xl shadow-ph-sun/30 group"
            >
              Explore Packages
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#tips"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all"
            >
              Travel Tips
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
