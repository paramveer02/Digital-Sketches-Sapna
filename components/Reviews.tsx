
import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-amber-400 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="inline-block">
            <div className="bg-[#facc15] border-4 md:border-6 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl md:text-5xl font-display font-black text-center uppercase text-black">
                Our Store Reviews
              </h3>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-[#fffbeb] border-2 border-black p-8 shadow-hard flex flex-col justify-between h-full hover:-rotate-1 transition-transform">
              <p className="text-lg font-bold leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-2 border-black shadow-hard overflow-hidden rounded-full">
                  <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" />
                </div>
                <p className="font-display font-black text-sm uppercase">{review.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
