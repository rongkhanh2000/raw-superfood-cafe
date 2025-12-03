import React from 'react';
import { Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="location" className="bg-earth-900 text-sand-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">RĀW<span className="text-sand-500">.</span></h2>
            <p className="font-body text-earth-100 text-sm leading-relaxed max-w-xs">
              Nourishing San Jose with organic, whole-food plant-based meals. Designed for vitality, crafted with care.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-sand-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-sand-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wide uppercase text-sm">Visit Us</h4>
            <div className="space-y-4 font-body text-earth-100 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-sand-500" />
                <p>1041 E Capitol Expy Unit 40,<br/>San Jose, CA 95121</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-sand-500" />
                <p>(408) 320-5609</p>
              </div>
            </div>
          </div>

          {/* Hours */}
           <div>
            <h4 className="font-bold text-white mb-6 tracking-wide uppercase text-sm">Opening Hours</h4>
            <div className="space-y-4 font-body text-earth-100 text-sm">
               <div className="flex items-start gap-3">
                <Clock size={18} className="shrink-0 mt-0.5 text-sand-500" />
                <div>
                    <p className="flex justify-between w-48"><span>Mon - Sun:</span> <span>9:00 AM - 7:30 PM</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
             <h4 className="font-bold text-white mb-6 tracking-wide uppercase text-sm">Stay Nourished</h4>
             <p className="font-body text-earth-100 text-sm mb-4">Join our community for seasonal specials and wellness tips.</p>
             <form className="flex flex-col gap-3">
                 <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-earth-800 border-none rounded-lg px-4 py-3 text-sm text-white placeholder-earth-100/50 focus:ring-1 focus:ring-sand-500 outline-none"
                />
                <button type="button" className="bg-sand-500 text-earth-900 font-bold text-sm py-3 px-4 rounded-lg hover:bg-sand-100 transition-colors">
                    Subscribe
                </button>
             </form>
          </div>

        </div>

        <div className="border-t border-earth-800 pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-earth-100/60 font-body">
            <p>&copy; {new Date().getFullYear()} RĀW Superfood Café. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;