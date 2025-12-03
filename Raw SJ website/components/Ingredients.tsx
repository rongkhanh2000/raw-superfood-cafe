import React from 'react';

const Ingredients: React.FC = () => {
  return (
    <section id="ingredients" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10">
            <div>
                 <span className="text-sand-500 font-bold tracking-[0.2em] uppercase text-sm block mb-4">The Source</span>
                <h2 className="text-4xl md:text-5xl font-bold text-earth-900 mb-6">
                Pure Ingredients.<br/>
                Powerful Benefits.
                </h2>
                <p className="font-body text-gray-600 text-lg leading-relaxed">
                We source only the highest quality superfoods. Our ingredients are chosen not just for their taste, but for their functional benefits to your health.
                </p>
            </div>

            <div className="space-y-8">
                <div className="flex items-start gap-6">
                    <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=200" alt="Chia Seeds" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-earth-900 mb-1">Organic Chia Seeds</h4>
                        <p className="font-body text-gray-500 text-sm">Packed with omega-3 fatty acids, antioxidants, and fiber for sustained energy.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-6">
                    <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&q=80&w=200" alt="Matcha" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-earth-900 mb-1">Ceremonial Grade Matcha</h4>
                        <p className="font-body text-gray-500 text-sm">Direct from Kyoto. High in L-Theanine for calm, focused alertness without the jitters.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-6">
                    <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1549466872-69019d659a8c?auto=format&fit=crop&q=80&w=200" alt="Raw Cacao" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-earth-900 mb-1">Peruvian Raw Cacao</h4>
                        <p className="font-body text-gray-500 text-sm">A mood-boosting superfood rich in magnesium and essential minerals.</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="relative h-[600px] w-full hidden lg:block">
            <div className="absolute top-0 right-0 w-3/4 h-full bg-sand-100 rounded-l-[4rem] -z-10"></div>
            <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" 
                alt="Ingredients Flatlay" 
                className="absolute inset-y-10 left-10 w-3/4 h-[90%] object-cover rounded-3xl shadow-2xl"
            />
             <div className="absolute bottom-20 right-20 bg-earth-900 text-white p-8 rounded-2xl max-w-xs shadow-xl">
                 <p className="font-serif italic text-lg leading-relaxed">"Let food be thy medicine and medicine be thy food."</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ingredients;