
import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem, Product } from '../types';
import { PRODUCTS } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onAddToCart: (product: Product) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove, onAddToCart }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  // Simple related products logic: pick 2 random items not in cart
  const relatedProducts = PRODUCTS.filter(p => !items.find(item => item.id === p.id)).slice(0, 2);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[200] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Side Panel */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#fefce8] border-l-4 border-black z-[250] transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        {/* Header */}
        <div className="p-6 border-b-4 border-black bg-[#d8b4fe] flex justify-between items-center">
          <h2 className="text-3xl font-display font-black uppercase tracking-tighter">Your Bag</h2>
          <button onClick={onClose} className="p-2 bg-white border-2 border-black shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {items.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="flex justify-center">
                <ShoppingBag size={64} className="text-zinc-300" />
              </div>
              <p className="text-xl font-black uppercase italic">Your bag is empty!</p>
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-lute-yellow border-4 border-black shadow-hard font-display font-black uppercase"
              >
                Go Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-white border-4 border-black shadow-hard">
                  <div className="w-24 h-24 border-2 border-black overflow-hidden shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h4 className="font-display font-black text-sm uppercase leading-none">{item.title}</h4>
                    <p className="font-black text-lg">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border-2 border-black bg-[#bae6fd]">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 hover:bg-white/50 border-r-2 border-black"
                        >
                          <Minus size={14} strokeWidth={3} />
                        </button>
                        <span className="px-3 font-black text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 hover:bg-white/50 border-l-2 border-black"
                        >
                          <Plus size={14} strokeWidth={3} />
                        </button>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Related Suggestions Section */}
          <div className="pt-8 border-t-4 border-black">
            <h3 className="text-xl font-display font-black uppercase mb-6 bg-lute-yellow inline-block px-4 py-1 border-2 border-black shadow-hard">You'll love these too</h3>
            <div className="grid grid-cols-2 gap-4">
              {relatedProducts.map(p => (
                <div key={p.id} className="bg-white border-2 border-black p-2 shadow-hard flex flex-col">
                  <img src={p.image} alt={p.title} className="w-full aspect-square object-cover border-b-2 border-black mb-2" />
                  <h5 className="font-black text-[10px] uppercase truncate">{p.title}</h5>
                  <button 
                    onClick={() => onAddToCart(p)}
                    className="mt-2 text-[10px] font-black uppercase bg-[#22c55e] border-2 border-black py-1 hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                  >
                    Add +
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t-4 border-black bg-white space-y-4">
            <div className="flex justify-between items-center text-2xl font-display font-black uppercase">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs font-bold text-zinc-500 uppercase italic">Taxes and shipping calculated at checkout.</p>
            <button className="w-full py-5 bg-[#22c55e] border-4 border-black shadow-hard-lg font-display font-black text-2xl uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
