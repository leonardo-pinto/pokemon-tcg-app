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
          <div key={fact}>
            <img src={fact.image} alt={fact} />
            <p>{fact.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default FactsList;
