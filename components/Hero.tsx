
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#38bdf8] border-b-4 border-black py-16 md:py-32 lg:py-48 overflow-hidden">
      {/* Background Decor - Controlled placement */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[30vw] h-[30vw] max-w-[400px] bg-[#d946ef] border-4 border-black rounded-none rotate-12 opacity-50 lg:opacity-100" />
        <div className="absolute bottom-[20%] left-[5%] w-32 h-32 bg-lute-orange border-4 border-black rotate-[-15deg]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-3/5 space-y-10 text-center lg:text-left">
            {/* Boxed Heading */}
            <div className="relative inline-block max-w-full">
              <div className="bg-[#facc15] border-4 md:border-8 lg:border-[10px] border-black p-6 md:p-10 lg:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative z-10 -rotate-1">
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] uppercase text-black tracking-tighter break-words">
                  HANDMADE SKETCHES FOR KIDS.
                </h2>
              </div>
            </div>

            {/* Description Box */}
            <div className="bg-[#bae6fd] border-4 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none max-w-2xl mx-auto lg:mx-0 rotate-1">
               <p className="text-lg md:text-2xl lg:text-3xl font-black leading-tight text-black italic">
                A wonderful way to express joy for the most wonderful time. Our unique and witty cards are sure to put a smile on their faces.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-lute-pink border-4 border-black px-10 py-5 md:px-14 md:py-7 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] font-display font-black text-xl md:text-3xl lg:text-4xl uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95 text-white">
                VIEW ALL PRODUCTS
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image Container */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative group max-w-[500px] w-full">
              {/* Decorative stacked layers */}
              <div className="absolute inset-0 bg-lute-orange border-4 border-black translate-x-6 translate-y-6 rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-white border-4 border-black -translate-x-3 -translate-y-3 -rotate-2"></div>
              
              {/* Main Image Frame */}
              <div className="relative aspect-[4/5] bg-white border-4 md:border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-2 overflow-hidden transition-transform duration-500 hover:rotate-0">
                <img 
                  src="https://images.unsplash.com/photo-1541480601022-2308c0f02487?q=80&w=1200&auto=format&fit=crop" 
                  alt="Playful Kid Sketch Illustration"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* New Arrivals Badge - Anchored to the image box */}
              <div className="absolute -bottom-8 -left-6 md:-bottom-12 md:-left-12 bg-[#22c55e] border-4 md:border-6 border-black px-6 py-4 md:px-10 md:py-6 font-display font-black text-xl md:text-4xl -rotate-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-20 whitespace-nowrap">
                NEW ARRIVALS!
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
