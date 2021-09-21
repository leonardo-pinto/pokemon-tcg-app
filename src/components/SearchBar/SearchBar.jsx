import React from 'react';
import dataContext from '../../context/dataContext';

function SearchBar() {
  const {
    cards,
    filterByName,
    setFilterByName,
    filteredCards,
    setFilteredCards,
    filterByType,
    setFilterByType,
  } = React.useContext(dataContext);

  const lowerSearchByName = filterByName.toLowerCase();

  const handleFilters = () => {
    if (filterByName && filterByType === 'all') {
      const filterOnlyByName = cards.filter((card) => (
        card.name.toLowerCase().includes(lowerSearchByName)));
      setFilteredCards(filterOnlyByName);
    }

    if (!filterByName && filterByType !== 'all') {
      const filterOnlyByType = cards.filter((card) => card.types[0] === filterByType);
      setFilteredCards(filterOnlyByType);
    }

    if (filterByName && filterByType !== 'all') {
      const filterByNameAndType = filteredCards.filter((card) => (
        (card.name.toLowerCase().includes(lowerSearchByName) && card.types[0] === filterByType)
      ));
      setFilteredCards(filterByNameAndType);
    }

    if (!filterByName && filterByType === 'all') {
      setFilteredCards(cards);
    }
  };

  React.useEffect(() => {
    handleFilters();
  }, [filterByName, filterByType]);

  let cardTypes = [];
  if (cards) {
    cardTypes = [...new Set(cards.map((card) => (card.types[0])))];
  }

  return (
    <>
      <label htmlFor="name" className="relative block">
        <svg
          className="w-6 h-6 points-event-none absolute top-1/3 transform translate-x-5 left-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          id="name"
          className="border border-transparent rounded-lg px-10 py-2.5 m-4 focus:outline-none focus:ring-4 focus:ring-purple-800 focus:border-transparent"
          type="text"
          value={filterByName}
          onChange={(e) => setFilterByName(e.target.value)}
          placeholder="Search by pokémon name"
        />
      </label>
      <label htmlFor="type">
        <select
          id="type"
          className="bg-white rounded-lg p-3 m-4 border border-transparent focus:outline-none focus:ring-4 focus:ring-purple-800 focus:border-transparent"
          onChange={(e) => setFilterByType(e.target.value)}
        >
          <option value="all">All types</option>
          { cardTypes.map((cardType) => (
            <option key={cardType} value={cardType}>{cardType}</option>
          ))}
        </select>
      </label>
    </>
  );
}

export default SearchBar;
