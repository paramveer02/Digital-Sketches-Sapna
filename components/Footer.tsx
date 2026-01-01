
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#18181b] text-white pt-16 md:pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-16">
          {/* Logo and Description */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-7xl font-display font-black tracking-tighter text-[#d946ef] leading-tight">
              RÊVE
            </h2>
            <p className="text-zinc-400 font-bold max-w-xs text-lg">
              Quality materials, hand-drawn designs, and vibrant colors to bring joy to every child's world.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, color: 'bg-[#22c55e]' },
                { Icon: Twitter, color: 'bg-[#22c55e]' },
                { Icon: Instagram, color: 'bg-[#22c55e]' },
                { Icon: Youtube, color: 'bg-[#22c55e]' }
              ].map(({ Icon, color }, i) => (
                <a key={i} href="#" className={`p-3 ${color} text-black border-2 border-black shadow-[4px_4px_0px_0px_white] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all`}>
                  <Icon size={24} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 1 */}
          <div className="space-y-8">
            <h4 className="font-display font-black text-2xl uppercase tracking-tighter text-[#facc15]">Information</h4>
            <ul className="space-y-4 font-bold text-zinc-400 text-lg">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            <h4 className="font-display font-black text-2xl uppercase tracking-tighter text-[#facc15]">Help</h4>
            <ul className="space-y-4 font-bold text-zinc-400 text-lg">
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Promo Card - Orange as in screenshot */}
          <div className="relative group">
            <div className="bg-[#f97316] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-3 transition-transform group-hover:rotate-0">
              <h4 className="font-display font-black text-black text-3xl mb-6 uppercase leading-none">Special Offer!</h4>
              <p className="text-black font-black text-xl mb-8 italic leading-snug">Get 20% off your first digital sketch order.</p>
              <button className="w-full py-4 bg-white text-black border-4 border-black font-black uppercase text-xl hover:bg-[#facc15] transition-colors shadow-none">
                GRAB CODE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="font-black text-zinc-500 text-lg">© 2024 Rêve. Hand-crafted with passion.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['VISA', 'MASTERCARD', 'AMEX', 'PAYPAL'].map(p => (
              <span key={p} className="text-xs font-black uppercase text-zinc-500 px-4 py-2 border-2 border-zinc-700 tracking-widest">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
