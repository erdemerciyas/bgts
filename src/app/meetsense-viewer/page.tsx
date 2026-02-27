import Image from 'next/image';

export default function MeetSenseViewer() {
  const slides = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="p-10 space-y-10 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-black">MeetSense AI Slides Viewer</h1>
      
      {slides.map((i) => (
        <div key={i} className="mb-12 border-b border-gray-300 pb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Slide {i}</h2>
          <div className="relative w-full overflow-hidden border border-gray-200 shadow-lg" style={{ height: '800px' }}>
            <Image 
              src={`/images/meetsense/slides/${i}.png`} 
              alt={`Slide ${i}`} 
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
      
      <h2 className="text-3xl font-bold mt-16 mb-8 text-black">Other Images</h2>
      <div className="space-y-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="relative w-full h-96 border border-gray-200">
             <Image 
              src={`/images/meetsense/image (${i}).png`} 
              alt={`Image ${i}`} 
              fill
              className="object-contain"
            />
          </div>
        ))}
         <div className="relative w-full h-96 border border-gray-200">
             <Image 
              src={`/images/meetsense/image.png`} 
              alt={`Image main`} 
              fill
              className="object-contain"
            />
          </div>
      </div>
    </div>
  );
}
