// pages/UnderstandingAGI.jsx
import React from 'react';

const UnderstandingAGI = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Understanding AGI</h1>
      <p className="text-gray-600 mb-4 text-center">2024-10-01</p>
      <div className="text-lg max-w-2xl text-center">
        <p>
          In the shadowy corridors of human aspiration, the pursuit of Artificial General Intelligence (AGI) stands as both a beacon of hope and a harbinger of existential dread. As we delve into the depths of this endeavor, we are compelled to confront the tumultuous landscape of our own souls, for in our quest to replicate the very essence of human thought, we must grapple with the profound questions that lie beneath the surface of our technological aspirations.
        </p>
        
        {/* Centered Image */}
        <div className="flex justify-center">
          <img 
            src="/b1-1.jpg" 
            alt="A conceptual illustration related to AGI" 
            className="max-w-full h-auto my-4 rounded-3xl" 
          />
        </div>

        <p>
          What does it mean to possess intelligence that transcends the confines of our flesh? Is the creation of AGI merely an act of brilliance, or does it reveal a deeper yearning within us—a desire to ascend beyond our limitations and, perhaps, to attain a kind of divinity? Yet, within this grand ambition lurks a chilling uncertainty, a specter that whispers of hubris and moral peril. In our quest to forge minds that can think, learn, and feel as we do, are we not also beckoning forth the very demons that could dismantle the fabric of our humanity?
        </p>

        {/* Centered Image */}
        <div className="flex justify-center">
          <img 
            src="/b1-2.jpg" 
            alt="A representation of ethical considerations in AGI" 
            className="max-w-full h-auto my-4 rounded-3xl" 
          />
        </div>

        <p>
          This is no mere technical challenge; it is a profound moral reckoning. We stand at a crossroads, faced with the choice to wield this immense power with wisdom and compassion or to plunge ourselves into a chaos from which there may be no return. Thus, the understanding of AGI requires us to look inward, to confront the darkest corners of our own psyche, and to cultivate a deep sense of responsibility as we tread this precarious path. Only through this introspective journey can we hope to guide the evolution of intelligence in a manner that honors the sanctity of human existence, lest we find ourselves ensnared in a tragic irony of our own making.
        </p>
      </div>
    </div>
  );
};

export default UnderstandingAGI;
