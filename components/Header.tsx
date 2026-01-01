
import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] bg-[#d8b4fe] border-b-4 border-black px-4 py-3 md:py-4 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between relative">
        {/* Navigation - Hidden on Mobile */}
        <nav className="hidden lg:flex gap-8 font-display font-black text-sm tracking-wide">
          <a href="#" className="hover:text-white transition-all uppercase">Christmas</a>
          <a href="#" className="hover:text-white transition-all uppercase">Halloween</a>
          <a href="#" className="hover:text-white transition-all uppercase">Magazine</a>
          <a href="#" className="hover:text-white transition-all uppercase">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 bg-[#22c55e] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Brand Logo - Centered Responsively */}
        <div className="flex-1 flex justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black tracking-tighter text-black whitespace-nowrap">
            RÊVE
          </h1>
        </div>

        {/* Action Icons */}
        <div className="flex gap-2 sm:gap-3">
          <button className="p-2 bg-[#22c55e] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all hidden sm:block">
            <Search size={20} strokeWidth={2.5} />
          </button>
          <button className="p-2 bg-[#22c55e] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
            <User size={20} strokeWidth={2.5} />
          </button>
          <button 
            onClick={onOpenCart}
            className="p-2 bg-[#22c55e] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all relative"
          >
            <ShoppingBag size={20} strokeWidth={2.5} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-lute-pink border-2 border-black text-xs font-black px-1.5 rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="absolute top-[100%] left-[-16px] w-[calc(100%+32px)] bg-white border-b-4 border-black p-6 flex flex-col gap-6 font-display font-black text-xl lg:hidden animate-in slide-in-from-top">
            <a href="#" className="hover:text-lute-pink" onClick={() => setIsMenuOpen(false)}>CHRISTMAS</a>
            <a href="#" className="hover:text-lute-pink" onClick={() => setIsMenuOpen(false)}>HALLOWEEN</a>
            <a href="#" className="hover:text-lute-pink" onClick={() => setIsMenuOpen(false)}>MAGAZINE</a>
            <a href="#" className="hover:text-lute-pink" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
