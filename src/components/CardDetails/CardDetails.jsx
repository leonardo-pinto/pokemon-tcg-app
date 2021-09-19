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
    <div>
      <img className="w-60 h-60" src={images.small} alt={name} />
      <h1>{name}</h1>
      <ul>
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
  );
}

export default CardDetails;

CardDetails.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    evolvesFrom: PropTypes.string.isRequired,
    evolvesTo: PropTypes.string,
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
