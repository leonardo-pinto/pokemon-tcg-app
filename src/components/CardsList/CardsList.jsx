import React from 'react';
import dataContext from '../../context/dataContext';
import Cards from '../Cards/Cards';

function CardsList() {
  const {
    cards,
    error,
    loading,
  } = React.useContext(dataContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error !== '') {
    return <p>Something wrong happenned</p>;
  }

  if (cards) {
    return (
      <div>
        { cards.map((card) => <Cards card={card} />)}
      </div>
    );
  }
}

export default CardsList;
