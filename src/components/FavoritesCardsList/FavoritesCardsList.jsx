import React from 'react';
import Cards from '../Cards/Cards';
import dataContext from '../../context/dataContext';

function FavoritesCardsList() {
  const { favoriteCards } = React.useContext(dataContext);

  return (
    <>
      { favoriteCards
        && (
          <div className="flex flex-wrap justify-evenly mt-28 mx-4 border">
            { favoriteCards.map((favoriteCard) => <Cards card={favoriteCard} />) }
          </div>
        )}
    </>
  );
}

export default FavoritesCardsList;
