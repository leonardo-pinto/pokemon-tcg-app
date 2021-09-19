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
      <>
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
      </>
    );
  }
}

export default CardsList;
