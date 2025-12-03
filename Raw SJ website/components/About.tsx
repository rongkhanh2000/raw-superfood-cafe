import React from 'react';
import { Leaf, Heart, Sun } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
          
          {/* Image Grid */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&q=80&w=800" 
              alt="Avocado Toast Detail" 
              className="w-full h-64 md:h-80 object-cover rounded-2xl translate-y-8 shadow-lg"
            />
             <img 
              src="https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800" 
              alt="Fresh Smoothie" 
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="md:col-span-7 space-y-8">
            <h2 className="text-sm font-bold tracking-[0.2em] text-sand-500 uppercase">Our Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-earth-900 leading-tight">
              Sophisticated <br/> Simplicity.
            </h3>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              At RĀW, we believe that food should be vibrant, nourishing, and beautiful. We strip away the unnecessary, focusing strictly on high-quality, nutrient-dense ingredients sourced from local California farms.
            </p>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              Located in the bustling heart of San Jose, we offer a sanctuary of calm. Our menu is designed to energize your body and mind without compromise. No fillers, no refined sugars—just pure, whole food.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                <div className="flex flex-col items-start space-y-3">
                    <div className="bg-earth-100 p-3 rounded-xl text-earth-900"><Leaf size={24}/></div>
                    <h4 className="font-bold text-earth-900">100% Organic</h4>
                </div>
                <div className="flex flex-col items-start space-y-3">
                    <div className="bg-earth-100 p-3 rounded-xl text-earth-900"><Heart size={24}/></div>
                    <h4 className="font-bold text-earth-900">Heart Healthy</h4>
                </div>
                 <div className="flex flex-col items-start space-y-3">
                    <div className="bg-earth-100 p-3 rounded-xl text-earth-900"><Sun size={24}/></div>
                    <h4 className="font-bold text-earth-900">Plant Based</h4>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;