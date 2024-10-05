import React, { useState, useEffect } from 'react';

const Myself = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = ['/s1.jpg', '/s2.jpg', '/s3.jpg', '/s4.jpg', '/s5.jpg','/s6.jpg','/s7.jpg','/s8.jpg','/s9.jpg','/s10.jpg','/s11.jpg'];

  // Automatic slideshow effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800">About Myself</h2>
      <p className="mt-4 text-gray-600">
        I walk a path where the boundaries between technology and human thought blur.
      </p>
      <p className="mt-4 text-gray-600">
        The lure of AGI, the mysteries of space, and the promise of fusion energy—these fascinate me not because of their finality, but because they represent the unknown, the unconquered.
      </p>
      <p className="mt-4 text-gray-600">
         My work in web development is, at its core, an extension of this desire to understand, to create meaning in a world driven by logic yet guided by emotion.
      </p>
      <p className='mt-4 text-gray-600'>
      Through code, I build not just applications, but windows into the mind.
      </p>
      {/* Slideshow Component */}
      <div className="slideshow-container relative w-[800px] h-[400px] mx-auto overflow-hidden my-6 rounded-3xl mt-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out  ${
              index === slideIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-semibold text-gray-800">The Instruments of My Craft</h2>
      <ul className="mt-10 text-gray-600 list-inside pl-4 flex justify-center items-center flex-wrap space-x-4 text-center">
  <li>🐍 Python</li>
  <li>💻 C</li>
  <li>⚛️ React</li>
  <li>🌐 HTML</li>
  <li>🎨 CSS</li>
  <li>✨ JavaScript</li>
  <li>🔗 Next.js</li>
  <li>🖼️ Vue</li>
  <li>🛢️ MySQL</li>
</ul>


    </div>
  );
};

export default Myself;
