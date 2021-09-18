import React from 'react';
import dataContext from '../../context/dataContext';

function SearchBar() {
  const {
    cards,
    filterByName,
    setFilterByName,
    setFilteredCards,
  } = React.useContext(dataContext);

  const lowerSearchByName = filterByName.toLowerCase();

  React.useEffect(() => {
    if (filterByName) {
      setFilteredCards(
        cards.filter((card) => (
          card.name.toLowerCase().includes(lowerSearchByName))),
      );
    } else {
      setFilteredCards(cards);
    }
  }, [filterByName]);

  // if (cards) {
  //   const cardTypes = (cards.map((card) => [...new Set(card.types)]));
  // }

  return (
    <>
      <input
        type="text"
        value={filterByName}
        onChange={(e) => setFilterByName(e.target.value)}
        placeholder="Search by character name"
      />
    </>
  );
}

export default SearchBar;
