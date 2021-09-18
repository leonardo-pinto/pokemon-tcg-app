import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import dataContext from '../../context/dataContext';

function Cards(props) {
  const { card } = props;

  const { images: { small }, name } = card;

  return (
    <div key={name} className="m-4 p-5 border">
      <img src={small} alt={name} />
      <Link to={`/details/${name}`}>
        <button type="button">
          Details
        </button>
      </Link>
    </div>
  );
}

export default Cards;

Cards.propTypes = {
  card: PropTypes.shape({
    images: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
