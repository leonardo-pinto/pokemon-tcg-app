import React from 'react';
import PropTypes from 'prop-types';

function CardDetails(state) {
  const {
    state: {
      name,
      images,
      evolvesFrom,
      evolvesTo,
      artist,
      rarity,
      nationalPokedexNumbers,
      cardmarket: { updatedAt, prices: { averageSellPrice } },
    },
  } = state;

  return (
    <div className="m-4 p-4 flex flex-col md:flex-row sm:flex-row justify-center items-center">
      <img className="w-1/2 h-1/2 sm:w-1/3 sm:h-1/4 md:w-1/3 md:h-1/4" src={images.large} alt={name} />
      <div className="text-center m-10 p-4 flex-col justify-center items-center">
        <h1 className="text-white text-3xl leading-loose">{name}</h1>
        <ul className="text-white text-2xl leading-loose">
          <li>{`Pokédex number: ${nationalPokedexNumbers}`}</li>
          <li>{`Artist: ${artist}`}</li>
          <li>{`Rarity: ${rarity}`}</li>
          {
              (evolvesFrom)
                ? <li>{`Evolves from: ${evolvesFrom}`}</li>
                : null
            }
          {
              (evolvesTo)
                ? <li>{`Evolves to: ${evolvesTo}`}</li>
                : null
            }
          <li>{`Card average sell price (${updatedAt}): ${averageSellPrice}\u20AC`}</li>
        </ul>
      </div>
    </div>
  );
}

export default CardDetails;

CardDetails.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    evolvesFrom: PropTypes.string,
    evolvesTo: PropTypes.arrayOf(PropTypes.string),
    artist: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    nationalPokedexNumbers: PropTypes.arrayOf(PropTypes.number),
    cardmarket: PropTypes.shape({
      updatedAt: PropTypes.string.isRequired,
      prices: PropTypes.shape({
        averageSellPrice: PropTypes.number.isRequired,
      }),
    }).isRequired,
  }).isRequired,
};
