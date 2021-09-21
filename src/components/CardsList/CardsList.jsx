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
          className="animate-spin -ml-1 mr-3 h-20 w-20 p-4 sm:h-26 sm:w-26 md:h-30 md:w-30 text-white"
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
        <p className="text-white sm:text-4xl md:text-5xl text-2xl p-4">Loading...</p>
      </div>
    );
  }

  if (error !== '') {
    return (
      <div className="m-auto bg-purple-800 flex flex-wrap rounded-lg w-1/2 justify-center items-center">
        <svg
          className="-ml-1 mr-3 h-20 w-20 p-2 sm:h-28 sm:w-28 md:h-32 md:w-32 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-center text-white sm:text-4xl md:text-4xl text-2xl p-4">Something wrong happenned. Please try again.</p>
      </div>
    );
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
