import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import facts from './facts';

function FactsList() {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 300 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        { facts.map((fact) => (
          <div key={fact} className="flex flex-col items-center justify-center mx-16 p-10">
            <img
              className="w-120 h-80"
              src={fact.image}
              alt={fact}
            />
            <p className="text-white pt-4 text-justify text-base sm:text-lg md:text-lg">{fact.text}</p>
            <cite className="text-white py-4">Reference: https://www.thegamer.com/pokemon-tcg-things-true-fans-know/</cite>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default FactsList;
