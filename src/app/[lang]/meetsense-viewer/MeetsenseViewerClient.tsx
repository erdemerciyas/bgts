"use client";

import Image from 'next/image';

type MeetsenseViewerDict = {
    title: string;
    slides_label: string;
    other_images: string;
    main_image: string;
};

export default function MeetsenseViewerClient({ dict: d }: { dict: MeetsenseViewerDict }) {
  const slides = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="p-10 space-y-10 bg-white min-h-screen pt-24">
      <h1 className="text-3xl font-bold mb-8 text-black">{d.title}</h1>
      
      {slides.map((i) => (
        <div key={i} className="mb-12 border-b border-gray-300 pb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">{d.slides_label} {i}</h2>
          <div className="relative w-full overflow-hidden border border-gray-200 shadow-lg" style={{ height: '800px' }}>
            <Image 
              src={`/images/meetsense/slides/${i}.png`} 
              alt={`${d.slides_label} ${i}`} 
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
      
      <h2 className="text-3xl font-bold mt-16 mb-8 text-black">{d.other_images}</h2>
      <div className="space-y-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="relative w-full h-96 border border-gray-200">
             <Image 
              src={`/images/meetsense/image (${i}).png`} 
              alt={`${d.other_images} ${i}`} 
              fill
              className="object-contain"
            />
          </div>
        ))}
         <div className="relative w-full h-96 border border-gray-200">
             <Image 
              src={`/images/meetsense/image.png`} 
              alt={d.main_image} 
              fill
              className="object-contain"
            />
          </div>
      </div>
    </div>
  );
}
