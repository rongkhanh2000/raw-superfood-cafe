import React from 'react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'The Classic Acai',
    category: 'Bowl',
    price: '$14',
    description: 'Pure acai topped with gluten-free granola, banana, strawberries, and local honey.',
    image: 'https://images.unsplash.com/photo-1596460107916-430662021049?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: 'Green Goddess',
    category: 'Smoothie',
    price: '$11',
    description: 'Kale, spinach, mango, pineapple, coconut water, and a touch of spirulina.',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    name: 'Avo Smash',
    category: 'Toast',
    price: '$12',
    description: 'Sourdough, smashed heirloom avocado, chili flakes, radish, and microgreens.',
    image: 'https://images.unsplash.com/photo-1603046891744-1f7636440a8d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    name: 'Blue Majik',
    category: 'Bowl',
    price: '$15',
    description: 'Blue spirulina blend, pineapple, banana, kiwi, blueberries, and coconut flakes.',
    image: 'https://images.unsplash.com/photo-1587825027966-c42e225ce82d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 5,
    name: 'Cacao Power',
    category: 'Smoothie',
    price: '$12',
    description: 'Raw cacao, banana, almond butter, dates, almond milk, and maca root.',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 6,
    name: 'Almond Berry',
    category: 'Toast',
    price: '$11',
    description: 'Toasted artisan bread, almond butter, sliced strawberries, hemp seeds, and honey.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=600'
  }
];

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-24 md:py-32 bg-sand-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sand-500 font-bold tracking-[0.2em] uppercase text-sm block mb-4">Curated Selections</span>
          <h2 className="text-4xl md:text-5xl font-bold text-earth-900 mb-6">Menu Highlights</h2>
          <p className="font-body text-gray-600 text-lg">Designed to nourish. Prepared with precision. Enjoy our most popular selections.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {menuItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-6 relative shadow-md">
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <div>
                    <span className="text-xs font-bold text-sand-500 uppercase tracking-widest mb-1 block">{item.category}</span>
                    <h3 className="text-xl font-bold text-earth-900 group-hover:text-earth-700 transition-colors">{item.name}</h3>
                </div>
                <span className="text-lg font-semibold text-earth-900">{item.price}</span>
              </div>
              <p className="font-body text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="inline-flex items-center justify-center border-b-2 border-earth-900 pb-1 text-earth-900 font-bold tracking-wide hover:text-sand-500 hover:border-sand-500 transition-colors text-lg">
                View Full Menu
            </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;