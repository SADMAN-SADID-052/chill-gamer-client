import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HeroBanner = () => {
  return (
    <div className="text-center mt-6">
      <h1 className="text-4xl font-bold">
        Welcome to <span className="text-blue-600">Chill Gamer</span>
      </h1>
      <p className="text-xl mt-4 mb-3">
        <Typewriter
          words={[
            'Explore Highest-Rated Games!',
            'Review Your Favorite Games!',
            'Discover New Adventures!',
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
    </div>
  );
};

export default HeroBanner;
