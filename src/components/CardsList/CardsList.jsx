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
    return <p>Loading...</p>;
  }

  if (error !== '') {
    return <p>Something wrong happenned</p>;
  }

  if (cards) {
    return (
      <div className="flex flex-wrap justify-evenly mt-28 mx-4 border">
        { (!filteredCards)
          ? cards.map((card) => <Cards card={card} />)
          : filteredCards.map((card) => <Cards card={card} />)}
      </div>
    );
  }
}

export default CardsList;
