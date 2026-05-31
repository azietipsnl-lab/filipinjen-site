import React from 'react';
import { BookingForm } from '../components/BookingForm';
import { motion } from 'motion/react';
import { ShieldCheck, Headphones, CreditCard } from 'lucide-react';

export function BookingPage() {
  return (
    <div className="pt-32 pb-24 bg-ph-sand">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left: Benefits/Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-12"
          >
            <div>
              <h1 className="text-4xl font-serif mb-6">Complete Your Booking</h1>
              <p className="text-gray-600 leading-relaxed italic border-l-4 border-ph-sun pl-6">
                "The journey of a thousand islands begins with a single form. We ensure every detail is handled with care."
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-ph-green shadow-sm shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Secure Reservation</h4>
                  <p className="text-sm text-gray-500">Your data is encrypted and handled by local travel experts.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-ph-green shadow-sm shrink-0">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">24/7 Support</h4>
                  <p className="text-sm text-gray-500">Dedicated assistance throughout your entire Philippine journey.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-ph-green shadow-sm shrink-0">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Flexible Payment</h4>
                  <p className="text-sm text-gray-500">Pay a small deposit now, settle the rest later.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <BookingForm isStandalone />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
