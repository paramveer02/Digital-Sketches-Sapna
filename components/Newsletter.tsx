
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-lute-pink overflow-hidden border-b-4 border-black">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden flex flex-wrap gap-4 md:gap-8 p-4">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-black rotate-45 whitespace-nowrap">RÊVE</span>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-white border-4 border-black p-6 md:p-12 shadow-hard md:shadow-hard-lg text-center flex flex-col items-center">
          <div className="inline-block mb-6">
            <div className="bg-[#facc15] border-4 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-display font-black uppercase leading-tight text-black">
                Subscribe to our emails
              </h3>
            </div>
          </div>
          <p className="text-lg md:text-xl font-bold mb-8 opacity-80 max-w-lg">
            Be the first to know about new collections and exclusive offers from Rêve.
          </p>
          
          <form className="w-full max-w-md flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 md:px-6 md:py-4 bg-white border-2 md:border-4 border-black font-bold text-lg focus:outline-none focus:ring-4 focus:ring-lute-green transition-all"
              required
            />
            <button type="submit" className="px-8 py-3 md:px-10 md:py-4 bg-lute-yellow border-2 md:border-4 border-black font-display font-black text-lg md:text-xl shadow-hard hover:translate-x-1 md:hover:translate-x-2 hover:translate-y-1 md:hover:translate-y-2 hover:shadow-none transition-all uppercase whitespace-nowrap">
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
