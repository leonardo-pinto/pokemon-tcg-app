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
      <input
        type="text"
        value={filterByName}
        onChange={(e) => setFilterByName(e.target.value)}
        placeholder="Search by pokémon name"
      />
      <select onChange={(e) => setFilterByType(e.target.value)}>
        <option value="all">All types</option>
        { cardTypes.map((cardType) => (
          <option value={cardType}>{cardType}</option>
        ))}
      </select>
    </>
  );
}

export default SearchBar;
