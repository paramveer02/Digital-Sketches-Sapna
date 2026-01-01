
import React from 'react';

const ScrollingBanner: React.FC = () => {
  // Fix: Added '?' to children prop to resolve TypeScript error 'Property children is missing' when used as a JSX component
  const BannerRow = ({ bgColor, children, speed = '120s', reverse = false }: { bgColor: string, children?: React.ReactNode, speed?: string, reverse?: boolean }) => (
    <div className={`${bgColor} border-b-2 border-black py-5 md:py-8 overflow-hidden whitespace-nowrap relative select-none`}>
      <div className={`flex gap-16 md:gap-40 items-center ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`} style={{ animationDuration: speed }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex gap-16 md:gap-40 items-center shrink-0">
            {children}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="border-b-2 border-black font-sans font-black text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-tighter italic">
      {/* Row 1: Purple - Christmas Sketch Theme */}
      <BannerRow bgColor="bg-[#d8b4fe]" speed="180s">
        <span className="shrink-0 uppercase">Christmas season. It's the</span>
        <img 
          src="https://images.unsplash.com/photo-1576919228236-a097c32a5 its-5cd4?q=80&w=400&auto=format&fit=crop" 
          className="h-16 md:h-28 w-auto border-4 border-black shadow-hard rounded-none object-cover bg-white" 
          alt="Christmas Tree Sketch" 
        />
        <span className="shrink-0 uppercase">most wonderful time.</span>
        <img 
          src="https://images.unsplash.com/photo-1543589077-47d816067f70?q=80&w=400&auto=format&fit=crop" 
          className="h-16 md:h-28 w-auto border-4 border-black shadow-hard rounded-none object-cover bg-white rotate-2" 
          alt="Winter Drawing" 
        />
        <span className="shrink-0 uppercase">A wonderful way to</span>
      </BannerRow>

      {/* Row 2: Coral Red - Animal Sketch Theme */}
      <BannerRow bgColor="bg-[#fb7185]" speed="240s" reverse={true}>
        <span className="shrink-0 uppercase">Happy faces.</span>
        <img 
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop" 
          className="h-16 md:h-28 w-auto border-4 border-black shadow-hard rounded-none object-cover bg-white -rotate-3" 
          alt="Animal Sketch" 
        />
        <span className="shrink-0 uppercase">Our unique and</span>
        <img 
          src="https://images.unsplash.com/photo-1607171076534-83b1378d0537?q=80&w=400&auto=format&fit=crop" 
          className="h-16 md:h-28 w-auto border-4 border-black shadow-hard rounded-none object-cover bg-white rotate-6" 
          alt="Reindeer Illustration" 
        />
        <span className="shrink-0 uppercase">witty Christmas cards</span>
        <span className="shrink-0 uppercase">are sure to please</span>
      </BannerRow>

      {/* Row 3: Golden Yellow - Gift & Kid Sketch Theme */}
      <BannerRow bgColor="bg-[#fbbf24]" speed="200s">
        <span className="shrink-0 uppercase">Send a card that</span>
        <img 
          src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=400&auto=format&fit=crop" 
          className="h-16 md:h-28 w-auto border-4 border-black shadow-hard rounded-none object-cover bg-white -rotate-1" 
          alt="Santa Sketch" 
        />
        <span className="shrink-0 uppercase">will put a smile</span>
        <img 
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=400&auto=format&fit=crop" 
          className="h-16 md:h-28 w-auto border-4 border-black shadow-hard rounded-none object-cover bg-white" 
          alt="Child Drawing" 
        />
        <span className="shrink-0 uppercase">on your loved ones</span>
      </BannerRow>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll linear infinite;
          width: fit-content;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse linear infinite;
          width: fit-content;
        }
      `}</style>
    </section>
  );
};

export default ScrollingBanner;
