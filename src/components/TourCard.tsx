import { MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Tour } from '../constants';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden border border-black/5 flex flex-col h-full group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-ph-green uppercase tracking-wider">
          {tour.location}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-serif leading-tight">{tour.title}</h3>
          <div className="text-right">
            <span className="text-sm text-gray-500 block">From</span>
            <span className="text-xl font-bold text-ph-green">${tour.price}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
          {tour.description}
        </p>
        
        <div className="flex items-center gap-4 mb-6 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {tour.duration}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {tour.location}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tour.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-ph-sand rounded-md text-[10px] uppercase font-bold text-ph-green/60 tracking-wider">
              {tag}
            </span>
          ))}
        </div>

        <Link 
          to={`/tour/${tour.id}`}
          className="w-full py-3 bg-ph-sand text-ph-green rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-ph-green hover:text-white transition-all group/btn text-center"
        >
          View Details
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
