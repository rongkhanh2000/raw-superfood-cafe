import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center bg-sand-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full pt-32 md:pt-20">
        
        {/* Text Content */}
        <div 
          className="order-2 md:order-1 flex flex-col items-start space-y-8 md:space-y-10 z-10"
          style={{ transform: `translateY(${offset * 0.15}px)`, opacity: 1 - offset / 700 }}
        >
          <span className="text-sand-500 font-bold tracking-[0.3em] uppercase text-sm md:text-base animate-fade-in">
            San Jose &bull; California
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-earth-900 leading-[0.95] tracking-tight">
            Nature's <br />
            Finest <span className="text-slate-blue italic font-light font-serif">Fuel</span>
          </h1>
          <p className="font-body text-gray-600 text-lg md:text-xl max-w-md leading-relaxed">
            Organic superfoods meticulously crafted for your vitality. Experience the purest flavors from the earth, served daily in the heart of San Jose.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 pt-6 w-full sm:w-auto">
             <button className="group bg-earth-900 text-white px-10 py-5 rounded-full text-lg font-semibold tracking-wide hover:bg-earth-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3">
              View Menu
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-full text-lg font-semibold tracking-wide text-earth-900 border-2 border-earth-900 hover:bg-earth-100 transition-colors">
              Our Story
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div 
          className="order-1 md:order-2 h-[40vh] md:h-full relative flex items-center justify-center"
          style={{ transform: `translateY(${offset * 0.08}px)` }}
        >
            {/* Abstract Background Shape */}
            <div className="absolute inset-0 bg-earth-100 rounded-[3rem] transform rotate-6 scale-90 md:scale-90 translate-y-10 md:translate-y-0 -z-10 opacity-60 transition-transform duration-1000 ease-out hover:rotate-3"></div>
            
            <div className="relative w-full aspect-square max-w-[500px] md:max-w-[650px] perspective-1000">
                <img 
                  src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800" 
                  alt="Signature Acai Bowl" 
                  className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl md:hover:scale-[1.02] transition-transform duration-700 ease-out"
                  // @ts-ignore
                  fetchpriority="high"
                />
                {/* Floating Badge */}
                <div 
                  className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl max-w-[240px]"
                  style={{ transform: `translateY(-${offset * 0.1}px)` }}
                >
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Daily Fresh</p>
                    <p className="text-earth-900 font-serif text-2xl leading-tight italic">Locally sourced organic ingredients.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;