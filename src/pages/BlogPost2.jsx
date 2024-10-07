// pages/MysteriesOfSpace.jsx
import React from 'react';

const MysteriesOfSpace = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Mysteries Of Space</h1>
      <p className="text-gray-600 mb-4 text-center">2024-10-01</p>
      <div className="text-lg max-w-2xl text-center">
        <p>
        The vast expanse of space, dark and infinite, hangs over humanity like a silent question, a question to which we have no answer and yet cannot turn away from. It is as if the heavens themselves are a great enigma, placed just beyond our reach, tantalizing us with the promise of revelation and the terror of our insignificance. For all our science and technology, all our voyages beyond the earth, we remain mere children at the threshold of an incomprehensible universe, peering into the unknown with trembling hands.
        </p>
        
        {/* Centered Image */}
        <div className="flex justify-center">
          <img 
            src="/c1-1.gif" 
            alt="A conceptual illustration related to AGI" 
            className="max-w-full h-auto my-4 rounded-3xl" 
          />
        </div>

        <p>
        What compels us to gaze into the stars? Is it curiosity—a simple, childish longing to understand the mechanics of the universe? Or is it something deeper, something more primal? Perhaps we are haunted by a sense that, out there in the cold and silent void, lies the answer to the question of our own existence. Yet, with every discovery we make, with every planet or galaxy charted, the mystery only deepens, as if space itself were laughing at our attempts to comprehend it. The more we seek, the more it eludes us.
        </p>

        {/* Centered Image */}
        <div className="flex justify-center">
          <img 
            src="/c1-2.jpg" 
            alt="A representation of ethical considerations in AGI" 
            className="max-w-full h-auto my-4 rounded-3xl" 
          />
        </div>

        <p>
        And so, we are left in a strange paradox. Space, in its grandeur, offers the promise of knowledge, yet at the same time confronts us with the terrifying realization that there may be limits to what we can know. We are like men stumbling in the dark, grasping at fragments of truth, while the abyss stares back at us, indifferent and eternal. In this confrontation with the infinite, we are forced to reckon with our own finitude, our own fleeting place in the grand tapestry of the cosmos. Yet, despite it all—despite the fear, the uncertainty, the vastness—we continue our quest, driven by some indefinable need to understand. And perhaps, in this relentless pursuit, we find a reflection of the very mystery we seek to unravel: not the mysteries of space, but the mysteries of ourselves.
        </p>
      </div>
    </div>
  );
};

export default MysteriesOfSpace;
