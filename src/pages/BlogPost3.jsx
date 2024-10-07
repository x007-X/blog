// pages/FusionEnergyRevolution.jsx
import React from 'react';

const FusionEnergyRevolution = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Fusion Energy Revolution</h1>
      <p className="text-gray-600 mb-4 text-center">2024-10-01</p>
      <div className="text-lg max-w-2xl text-center">
        <p>
        The dream of fusion energy, like an elusive promise whispered across the ages, has captivated the hearts and minds of generations. It is a vision of unparalleled power, a force capable of transforming civilization, unlocking the secrets of the stars, and delivering humanity from the shackles of its own limitations. Fusion energy represents more than just an abundant power source; it is the key to transcending our dependence on finite resources and fossil fuels, a promise of limitless energy drawn from the same force that fuels the sun. Yet, as with all great ambitions, the pursuit of this vision is fraught with uncertainty, toil, and an overwhelming sense that what we seek may forever lie just beyond our grasp.
        </p>
        
        {/* Centered Image */}
        <div className="flex justify-center">
          <img 
            src="/d1-1.gif" 
            alt="A conceptual illustration related to AGI" 
            className="max-w-full h-auto my-4 rounded-3xl" 
          />
        </div>

        <p>
        There is a certain tragedy in our relentless quest for fusion, a quiet despair in knowing that we toil endlessly to bring forth a revolution that remains, even now, just out of reach. Experiments flicker with moments of success, and breakthroughs seem tantalizingly close, but the final key to unlocking sustained fusion eludes us. The road to harnessing this power has been littered with setbacks and dashed hopes, as if the universe itself conspires to keep this secret hidden, guarding the tremendous energy that could reshape the future of humanity. With each passing year, despite our advancements, the horizon of true, scalable fusion energy stretches further, challenging our resolve.
        </p>

        {/* Centered Image */}
        <div className="flex justify-center">
          <img 
            src="/d1-2.jpg" 
            alt="A representation of ethical considerations in AGI" 
            className="max-w-full h-auto my-4 rounded-3xl" 
          />
        </div>

        <p>
        And yet, we press on—not out of folly, but because we must. The promise of fusion is not merely a scientific challenge, but a necessity for a world on the brink of energy and environmental collapse. This pursuit forces us to confront profound moral questions about our ability to wield such power responsibly. Can we, as a species, harness the energy of the stars without falling victim to the hubris of playing gods? The fusion energy revolution is not only about science; it is a test of our patience, wisdom, and ethical maturity, reminding us that the most powerful forces in the universe demand not just technological mastery but reverence and humility.
        </p>
      </div>
    </div>
  );
};

export default FusionEnergyRevolution;
