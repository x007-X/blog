import React, { useState, useEffect } from 'react';

const Myself = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = ['/s1.jpg', '/s2.jpg', '/s3.jpg', '/s4.jpg', '/s5.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n + slides.length) % slides.length);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800">About Myself</h2>
      <p className="mt-4 text-gray-600">
        I walk a path where the boundaries between technology and human thought blur. The lure of AGI, the mysteries of space, and the promise of fusion energy—these fascinate me not because of their finality, but because they represent the unknown, the unconquered. My work in web development is, at its core, an extension of this desire to understand, to create meaning in a world driven by logic yet guided by emotion. Through code, I build not just applications, but windows into the mind.
      </p>

      {/* Slideshow Component */}
      <div className="slideshow-container relative w-full max-w-screen-lg mx-auto overflow-hidden my-6">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === slideIndex ? '' : 'hidden'}`}>
            <img src={slide} alt={`Image ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
        
        <a
          className="prev absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl font-bold cursor-pointer select-none"
          onClick={() => plusSlides(-1)}
        >
          &#10094;
        </a>
        <a
          className="next absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl font-bold cursor-pointer select-none"
          onClick={() => plusSlides(1)}
        >
          &#10095;
        </a>
      </div>

      <h2 className="mt-6 text-2xl font-semibold text-gray-800">The Instruments of My Craft</h2>
      <ul className="mt-4 text-gray-600 list-inside space-y-1 pl-4">
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
