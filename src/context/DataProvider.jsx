import React from 'react';
import PropTypes from 'prop-types';
import dataContext from './dataContext';
import useAxios from '../hooks/useAxios';
import useLocalStorage from '../hooks/useLocalStorage';

function DataProvider({ children }) {
  const { cards, error, loading } = useAxios();
  const { favoriteCards, setFavorite, removeFavorite } = useLocalStorage('favoriteCharacters');
  const [filteredCards, setFilteredCards] = React.useState('');
  const [filterByName, setFilterByName] = React.useState('');
  const [sortOrder, setSortOrder] = React.useState('');

  return (
    <dataContext.Provider
      value={{
        cards,
        error,
        loading,
        favoriteCards,
        setFavorite,
        removeFavorite,
        filteredCards,
        setFilteredCards,
        filterByName,
        setFilterByName,
        sortOrder,
        setSortOrder,
      }}
    >
      { children }
    </dataContext.Provider>
  );
}

export default DataProvider;

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
