import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import dataContext from '../../context/dataContext';

function Cards(props) {
  const { card } = props;

  const { images: { small }, name, id } = card;

  const { favoriteCards, setFavorite, removeFavorite } = React.useContext(dataContext);

  const [isFavorite, setIsFavorite] = React.useState(
    favoriteCards.some((favorite) => favorite.id === card.id),
  );

  React.useEffect(() => {
    setIsFavorite(favoriteCards.some((favorite) => favorite.id === card.id));
  }, [favoriteCards]);

  const favoriteToast = () => {
    if (!isFavorite) {
      toast.success('Card selected as favorite successfully!', {
        draggable: true,
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success('Card removed from favorite successfully!', {
        draggable: true,
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div key={name} className="m-4 p-5 border">
      <img src={small} alt={name} />
      <Link to={`/details/${id}`}>
        <button type="button">
          Details
        </button>
      </Link>
      { !isFavorite
        ? (
          <button
            type="button"
            onClick={() => setFavorite(card)}
          >
            <svg
              onClick={favoriteToast}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </button>
        )
        : (
          <button
            type="button"
            onClick={() => removeFavorite(card)}
          >
            <svg
              onClick={favoriteToast}
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </button>
        )}
    </div>
  );
}

export default Cards;

Cards.propTypes = {
  card: PropTypes.shape({
    images: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
