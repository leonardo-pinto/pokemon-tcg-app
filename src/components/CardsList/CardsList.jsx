import React from 'react';
import dataContext from '../../context/dataContext';
import Cards from '../Cards/Cards';

function CardsList() {
  const {
    cards,
    error,
    loading,
    filteredCards,
  } = React.useContext(dataContext);

  if (loading) {
    return (
      <div className="m-auto bg-purple-800 flex flex-wrap rounded-lg w-1/2 justify-center items-center">
        <svg
          className="animate-spin -ml-1 mr-3 h-32 w-32 p-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <p className="text-white text-6xl p-4">Loading...</p>
      </div>
    );
  }

  if (error !== '') {
    return <p>Something wrong happenned</p>;
  }

  if (cards) {
    return (
      <div className="flex flex-wrap justify-evenly">
        { (!filteredCards)
          ? cards.map((card) => (
            <div key={card.id}>
              <Cards card={card} />
            </div>
          ))
          : filteredCards.map((card) => (
            <div key={card.id}>
              <Cards card={card} />
            </div>
          ))}
      </div>
    );
  }
}

export default CardsList;
