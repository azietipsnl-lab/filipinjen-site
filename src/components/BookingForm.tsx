import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { TOURS } from '../constants';
import { useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

type FormStep = 'details' | 'destination' | 'success';

export function BookingForm({ isStandalone = false }: { isStandalone?: boolean }) {
  const location = useLocation();
  const [step, setStep] = useState<FormStep>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '2',
    tourId: TOURS[0].id
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tourId = params.get('tour');
    const guests = params.get('guests');
    const start = params.get('start');

    if (tourId || guests || start) {
      setFormData(prev => ({
        ...prev,
        tourId: tourId || prev.tourId,
        guests: guests || prev.guests,
        date: start || prev.date
      }));
    }
  }, [location.search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'details') {
      setStep('destination');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStep('success');
    setIsSubmitting(false);
  };

  const content = (
    <div className={cn(
      "bg-white rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden",
      !isStandalone && "bg-ph-sand shadow-ph-green/5 border border-black/5"
    )}>
      {/* Progress Indicators */}
      {step !== 'success' && (
        <div className="flex items-center gap-4 mb-10">
          <div className={`p-3 rounded-2xl ${step === 'details' ? 'bg-ph-green text-white' : 'bg-ph-sand text-ph-green'}`}>
            <User className="w-5 h-5" />
          </div>
          <div className="h-[2px] flex-grow bg-black/5" />
          <div className={`p-3 rounded-2xl ${step === 'destination' ? 'bg-ph-green text-white' : 'bg-ph-sand text-ph-green'}`}>
            <MapPin className="w-5 h-5" />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 'details' && (
          <motion.form 
            key="step-details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-ph-green">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full px-6 py-4 rounded-2xl bg-ph-sand border border-black/5 focus:outline-none focus:border-ph-sun transition-colors"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-ph-green">Email Address</label>
              <input 
                required
                type="email" 
                className="w-full px-6 py-4 rounded-2xl bg-ph-sand border border-black/5 focus:outline-none focus:border-ph-sun transition-colors"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-ph-green">Travel Date</label>
              <input 
                required
                type="date" 
                className="w-full px-6 py-4 rounded-2xl bg-ph-sand border border-black/5 focus:outline-none focus:border-ph-sun transition-colors"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-ph-green">Number of Guests</label>
              <select 
                className="w-full px-6 py-4 rounded-2xl bg-ph-sand border border-black/5 focus:outline-none focus:border-ph-sun transition-colors appearance-none"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              >
                {[1,2,3,4,5,6,10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
              </select>
            </div>
            <div className="md:col-span-2 pt-6">
              <button className="w-full py-5 bg-ph-green text-white rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-ph-green/90 transition-all shadow-lg shadow-ph-green/20">
                Next Step
              </button>
            </div>
          </motion.form>
        )}

        {step === 'destination' && (
          <motion.form 
            key="step-dest"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-wider text-ph-green">Select Your Package</label>
              <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                {TOURS.map(tour => (
                  <label 
                    key={tour.id} 
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                      formData.tourId === tour.id ? 'border-ph-sun bg-white shadow-md' : 'border-transparent bg-ph-sand hover:bg-white'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="tour" 
                      className="hidden" 
                      checked={formData.tourId === tour.id}
                      onChange={() => setFormData({...formData, tourId: tour.id})}
                    />
                    <img src={tour.image} alt="" className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <p className="font-bold">{tour.title}</p>
                      <p className="text-xs text-gray-500">{tour.duration} • From ${tour.price}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex gap-4 pt-6">
              <button 
                type="button" 
                onClick={() => setStep('details')}
                className="flex-1 py-5 border-2 border-ph-green text-ph-green rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-ph-green/5 transition-all"
              >
                Back
              </button>
              <button 
                disabled={isSubmitting}
                className="flex-[2] py-5 bg-ph-sun text-white rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-ph-sun/90 transition-all disabled:opacity-50 shadow-lg shadow-ph-sun/20"
              >
                {isSubmitting ? 'Confirming...' : 'Place Booking'}
              </button>
            </div>
          </motion.form>
        )}

        {step === 'success' && (
          <motion.div 
            key="step-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-green-600 rounded-full mb-8">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="text-4xl font-serif mb-4 text-ph-green">Request Sent!</h3>
            <p className="text-gray-600 max-w-sm mx-auto mb-10 leading-relaxed">
              We've received your booking details for <strong>{TOURS.find(t => t.id === formData.tourId)?.title}</strong>. 
              Our local guide will contact you within 24 hours.
            </p>
            <button 
              onClick={() => setStep('details')}
              className="px-8 py-4 bg-ph-green text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-ph-green/90 transition-all shadow-lg shadow-ph-green/20"
            >
              Make Another Booking
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (isStandalone) {
    return content;
  }

  return (
    <section id="booking" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-ph-sun font-bold uppercase tracking-widest text-sm mb-4 block">Booking System</span>
          <h2 className="text-4xl md:text-5xl font-serif">Plan Your Unforgettable Trip</h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Ready to explore? Fill out our quick form and our travel experts will handle the rest.
          </p>
        </div>
        {content}
      </div>
    </section>
  );
}
