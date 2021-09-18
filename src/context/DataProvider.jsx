import React from 'react';
import PropTypes from 'prop-types';
import dataContext from './dataContext';
import useAxios from '../hooks/useAxios';
import useLocalStorage from '../hooks/useLocalStorage';

function DataProvider({ children }) {
  const { cards, error, loading } = useAxios();
  const { favoriteCards, setFavorite, removeFavorite } = useLocalStorage('favoriteCharacters');

  return (
    <dataContext.Provider
      value={{
        cards,
        error,
        loading,
        favoriteCards,
        setFavorite,
        removeFavorite,
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
