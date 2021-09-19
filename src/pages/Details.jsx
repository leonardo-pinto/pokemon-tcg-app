import React from 'react';
import PropTypes from 'prop-types';
import CardDetails from '../components/CardDetails/CardDetails';

function Details(props) {
  const { location: { state } } = props;

  return (
    <>
      <CardDetails state={state} />
    </>
  );
}

export default Details;

Details.propTypes = {
  location: PropTypes.shape({
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
  }).isRequired,
};
