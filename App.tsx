
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ScrollingBanner from './components/ScrollingBanner';
import CartDrawer from './components/CartDrawer';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setNotification(`${product.title} added to bag!`);
    setIsCartOpen(true);
    setTimeout(() => setNotification(null), 3000);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col selection:bg-lute-yellow selection:text-black overflow-x-hidden bg-[#fefce8]">
      <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onAddToCart={handleAddToCart}
      />

      {notification && (
        <div className="fixed bottom-8 left-4 md:left-12 z-[300] bg-lute-yellow border-4 border-black p-4 shadow-hard-lg font-display font-black uppercase animate-in slide-in-from-bottom">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-black rounded-full animate-pulse"></span>
            {notification}
          </div>
        </div>
      )}

      <main className="flex-grow">
        <ScrollingBanner />

        <Hero />
        
        <section className="bg-lute-orange border-b-4 border-black py-8 overflow-hidden whitespace-nowrap relative">
          <div className="flex gap-12 animate-scroll-super-slow">
            {Array.from({ length: 12 }).map((_, i) => (
              <p key={i} className="text-3xl md:text-5xl font-display font-black uppercase flex-shrink-0 tracking-tighter">
                Free shipping on all orders • Limited time offer • Hand-drawn with love •
              </p>
            ))}
          </div>
        </section>

        <FeaturedSection onAddToCart={handleAddToCart} />

        {/* Mid-page Promo - Refined for stability on all devices */}
        <section className="bg-lute-green py-20 md:py-32 border-b-4 border-black relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
             <div className="w-full lg:w-5/12 aspect-[16/10] bg-white border-4 border-black shadow-hard-lg -rotate-2 lg:-rotate-3 overflow-hidden shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Cartoon Pumpkin Monster" 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1603356022744-9f935324671b?auto=format&fit=crop&w=1200';
                  }}
                />
             </div>
             <div className="w-full lg:w-7/12 space-y-8 md:space-y-12 text-center lg:text-left flex flex-col items-center lg:items-start overflow-visible">
                <div className="inline-block max-w-full">
                  <div className="bg-[#facc15] border-4 md:border-8 border-black p-5 md:p-8 lg:p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative z-10 -rotate-1">
                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black uppercase leading-[0.85] text-black tracking-tighter whitespace-normal">
                      SPOOKY SEASON
                    </h2>
                  </div>
                </div>
                
                <div className="space-y-6 max-w-2xl">
                   <p className="text-xl md:text-2xl lg:text-3xl font-black leading-tight border-l-8 lg:border-l-[12px] border-black pl-6 lg:pl-10 text-left">
                    It's the most wonderful time of the year! Send your family and friends a special greeting card to spread the season's cheer.
                  </p>
                </div>
                
                <div className="pt-4 md:pt-6">
                  <button className="px-12 py-6 md:px-16 md:py-8 bg-lute-yellow border-4 border-black shadow-hard-lg font-display font-black text-2xl lg:text-4xl uppercase hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all active:scale-95">
                    Shop Halloween
                  </button>
                </div>
             </div>
          </div>
        </section>

        <Reviews />
        
        <Newsletter />
      </main>

      <Footer />

      <style>{`
        @keyframes scroll-super-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-super-slow {
          animation: scroll-super-slow 80s linear infinite;
          width: max-content;
        }
        @media (max-width: 640px) {
          .animate-scroll-super-slow {
            animation-duration: 40s;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
