import React from 'react';
import dataContext from '../../context/dataContext';

function SortBar() {
  const {
    cards,
    filteredCards,
    setFilteredCards,
    sortOrder,
    setSortOrder,
  } = React.useContext(dataContext);

  const sortCards = () => {
    let cardsToSort = [...cards];
    if (filteredCards) cardsToSort = [...filteredCards];
    cardsToSort.sort((a, b) => (
      (sortOrder === 'asc')
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    ));
    setFilteredCards(cardsToSort);
  };

  React.useEffect(() => {
    if (sortOrder) {
      sortCards();
    }
  }, [sortOrder]);

  return (
    <div className="flex">
      <button
        type="button"
        onClick={() => setSortOrder('asc')}
      >
        <svg
          className="text-white w-12 h-12 m-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => setSortOrder('desc')}
      >
        <svg
          className="text-white w-12 h-12 m-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SortBar;
