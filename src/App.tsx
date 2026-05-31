/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { TourDetails } from './pages/TourDetails';
import { BookingPage } from './pages/BookingPage';
import { Chatbot } from './components/Chatbot';
import { Palmtree } from 'lucide-react';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tour/:id" element={<TourDetails />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-white border-t border-black/5 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="md:col-span-2">
                <a href="/" className="flex items-center gap-2 mb-6">
                  <Palmtree className="w-8 h-8 text-ph-sun" />
                  <span className="font-serif text-3xl font-bold tracking-tight text-ph-green">
                    FILIPIJNEN<span className="text-ph-sun">.NL</span>
                  </span>
                </a>
                <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
                  Your premier gateway to the Philippine islands. We organize high-end private tours, 
                  group expeditions, and authentic cultural experiences across the archipelago.
                </p>
              </div>
              <div>
                <h5 className="font-bold uppercase tracking-widest text-xs text-ph-green mb-6">Destinations</h5>
                <ul className="space-y-4 text-sm text-gray-500 font-medium">
                  <li><a href="#" className="hover:text-ph-sun transition-colors">Palawan</a></li>
                  <li><a href="#" className="hover:text-ph-sun transition-colors">Siargao</a></li>
                  <li><a href="#" className="hover:text-ph-sun transition-colors">Cebu & Bohol</a></li>
                  <li><a href="#" className="hover:text-ph-sun transition-colors">Boracay</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold uppercase tracking-widest text-xs text-ph-green mb-6">Company</h5>
                <ul className="space-y-4 text-sm text-gray-500 font-medium">
                  <li><a href="#" className="hover:text-ph-sun transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-ph-sun transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-ph-sun transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-ph-sun transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <p>&copy; 2026 FILIPIJNEN.NL • All Rights Reserved</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-ph-green transition-colors">Instagram</a>
                <a href="#" className="hover:text-ph-green transition-colors">Facebook</a>
                <a href="#" className="hover:text-ph-green transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </footer>

        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

