import { useParams, Link } from 'react-router-dom';
import { TOURS } from '../constants';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, MapPin, CheckCircle, Info, Calendar, Users, CalendarDays, Star, ShieldCheck, Map } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export function TourDetails() {
  const { id } = useParams();
  const tour = TOURS.find(t => t.id === id);
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState(2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-4xl font-serif mb-4">Tour Not Found</h2>
        <p className="text-gray-500 mb-8">The adventure you're looking for doesn't exist yet.</p>
        <Link to="/" className="px-8 py-4 bg-ph-green text-white rounded-full font-bold uppercase tracking-widest text-xs">
          Back to Home
        </Link>
      </div>
    );
  }

  const totalPrice = tour.price * guests;

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-ph-green font-bold uppercase tracking-widest text-xs mb-8 hover:text-ph-sun transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to all tours
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {tour.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white border border-black/5 rounded-full text-[10px] uppercase font-bold text-ph-green tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">{tour.title}</h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
              {tour.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-3xl border border-black/5 flex items-center gap-4">
                <div className="w-12 h-12 bg-ph-sand rounded-2xl flex items-center justify-center text-ph-green">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Duration</p>
                  <p className="font-bold">{tour.duration}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-black/5 flex items-center gap-4">
                <div className="w-12 h-12 bg-ph-sand rounded-2xl flex items-center justify-center text-ph-green">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Location</p>
                  <p className="font-bold">{tour.location}</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {/* Itinerary */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-serif flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-ph-sun" />
                    Detailed Itinerary
                  </h3>
                  <div className="px-4 py-1 bg-ph-sun/10 text-ph-sun rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Fully Guided
                  </div>
                </div>
                <div className="space-y-6">
                  {tour.itinerary.map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-ph-green text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">
                          {i + 1}
                        </div>
                        {i !== tour.itinerary.length - 1 && (
                          <div className="w-[2px] grow bg-ph-green/10 my-2" />
                        )}
                      </div>
                      <div className="pb-8">
                        <p className="text-ph-sun font-bold uppercase tracking-widest text-[10px] mb-1">{item.day}</p>
                        <h4 className="text-xl font-serif mb-3 italic">{item.title}</h4>
                        <ul className="space-y-2">
                          {item.activities.map((act, j) => (
                            <li key={j} className="text-sm text-gray-500 flex items-center gap-2">
                              <span className="w-1 h-1 bg-ph-sun rounded-full" />
                              {act}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tips & Safety */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="bg-ph-sand p-8 rounded-[40px] border border-black/5 shadow-inner">
                  <h3 className="text-2xl font-serif mb-6 flex items-center gap-3">
                    <Info className="w-6 h-6 text-ph-sun" />
                    Expert Tips
                  </h3>
                  <ul className="space-y-4">
                    {tour.travelTips.map((tip, i) => (
                      <li key={i} className="flex gap-4 text-sm text-gray-600 leading-relaxed italic">
                        <span className="text-ph-sun tracking-tighter shrink-0">✨</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="bg-ph-green/5 p-8 rounded-[40px] border border-ph-green/10">
                  <h3 className="text-2xl font-serif mb-6 flex items-center gap-3 text-ph-green">
                    <ShieldCheck className="w-6 h-6" />
                    Safety First
                  </h3>
                  <ul className="space-y-3 text-sm text-ph-green/80 font-medium">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-ph-green rounded-full" />
                      Licensed local guides only
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-ph-green rounded-full" />
                      Comprehensive travel insurance
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-ph-green rounded-full" />
                      24/7 Emergency support
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-ph-green rounded-full" />
                      Reef-safe environmental focus
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image & Booking summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:sticky lg:top-32"
          >
            <div className="rounded-[48px] overflow-hidden shadow-2xl mb-12 aspect-[4/5] relative group">
              <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-ph-sun mb-2">Private Expedition</p>
                <h2 className="text-4xl font-serif leading-tight">{tour.title}</h2>
                <div className="flex items-center gap-2 mt-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-ph-sun text-ph-sun" />)}
                  <span className="text-xs font-bold ml-2">4.9 (120+ Reviews)</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-ph-green/5 border border-black/5">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Per Person</p>
                  <p className="text-5xl font-serif text-ph-green">${tour.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Price</p>
                  <p className="text-3xl font-serif text-ph-sun">${totalPrice}</p>
                </div>
              </div>

              {/* Interactive Booking Pre-selection */}
              <div className="space-y-6 mb-10 p-6 bg-ph-sand rounded-3xl border border-black/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  <div className="space-y-2 md:col-span-2 lg:col-span-1 xl:col-span-2">
                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ph-green">
                      <Users className="w-3 h-3" /> Number of Pax
                    </label>
                    <select 
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/5 text-sm font-medium focus:outline-none focus:border-ph-sun transition-all"
                    >
                      {[1,2,3,4,5,6,8,10].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ph-green">
                      <CalendarDays className="w-3 h-3" /> Check-in
                    </label>
                    <input 
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/5 text-[10px] md:text-xs font-medium focus:outline-none focus:border-ph-sun transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ph-green">
                      <CalendarDays className="w-3 h-3" /> Check-out
                    </label>
                    <input 
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/5 text-[10px] md:text-xs font-medium focus:outline-none focus:border-ph-sun transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-10">
                <p className="font-bold text-sm uppercase tracking-widest text-ph-green border-b border-black/5 pb-2">What's Included</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-y-3">
                  {tour.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500 shrink-0" />
                      {inc}
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                to={`/booking?tour=${tour.id}&guests=${guests}&start=${startDate}&end=${endDate}`}
                className="w-full py-5 bg-ph-sun text-white rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-ph-sun/90 transition-all shadow-xl shadow-ph-sun/20"
              >
                Proceed to Booking
              </Link>
              <p className="text-center text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-6 flex items-center justify-center gap-2">
                <Map className="w-3 h-3" /> Custom routes available
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
