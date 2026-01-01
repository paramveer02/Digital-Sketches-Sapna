
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface FeaturedSectionProps {
  onAddToCart: (product: Product) => void;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<'Christmas' | 'Halloween' | 'Bestsellers'>('Christmas');

  const filteredProducts = PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section className="py-16 md:py-24 bg-[#7dd3fc] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-10 mb-16 flex flex-col items-center">
          <div className="inline-block">
            <div className="bg-[#facc15] border-4 md:border-6 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl md:text-5xl font-display font-black uppercase text-black">
                Featured Collections
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {(['Christmas', 'Halloween', 'Bestsellers'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 font-display font-black text-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all uppercase ${
                  activeTab === tab ? 'bg-[#d946ef] translate-x-1 translate-y-1 shadow-none text-black' : 'bg-white hover:bg-[#facc15]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {filteredProducts.map(product => (
            <div key={product.id} className="group flex flex-col">
              {/* Product Card Image with Playful Hovering Effect */}
              <div className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden h-[300px] md:h-[400px] mb-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]">
                {/* Primary Image */}
                <img 
                  src={product.image} 
                  alt={product.title}
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${product.hoverImage ? 'group-hover:opacity-0' : ''}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800';
                  }}
                />
                {/* Secondary/Hover Image */}
                {product.hoverImage && (
                  <img 
                    src={product.hoverImage} 
                    alt={`${product.title} alternate`}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100"
                  />
                )}
                
                {/* Playful Floating Badge on Hover */}
                <div className="absolute top-4 right-4 bg-lute-yellow border-2 border-black px-3 py-1 font-display font-black text-[10px] uppercase rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  Love this!
                </div>
              </div>

              <div className="space-y-4 flex-grow flex flex-col">
                <h4 className="text-2xl font-display font-black uppercase leading-tight min-h-[2.4em] flex items-center group-hover:text-lute-pink transition-colors">{product.title}</h4>
                <div className="mt-auto pt-4 border-t-4 border-black flex flex-col gap-4">
                  <p className="font-display font-black text-3xl text-black leading-none">${product.price.toFixed(2)}</p>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="w-full py-3 bg-[#facc15] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all text-lg font-display font-black uppercase hover:bg-[#22c55e]"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
