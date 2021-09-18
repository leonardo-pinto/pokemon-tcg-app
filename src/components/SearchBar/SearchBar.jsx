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
