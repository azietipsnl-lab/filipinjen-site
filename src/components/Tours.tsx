import { TOURS } from '../constants';
import { TourCard } from './TourCard';

export function Tours() {
  return (
    <section id="tours" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-ph-sun font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Hand-picked Journeys</span>
          <h2 className="text-5xl md:text-6xl font-serif">Curated Tour Packages</h2>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Whether you're looking for luxury retreats, high-adrenaline surfing, or cultural immersion, 
            our expert-designed packages offer the best of the archipelago.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-full border border-black/10 text-sm font-medium hover:bg-black/5 transition-colors">
            All Packages
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TOURS.map(tour => (
          <div key={tour.id}>
            <TourCard tour={tour} />
          </div>
        ))}
      </div>
    </section>
  );
}
