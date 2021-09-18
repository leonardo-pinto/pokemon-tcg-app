import React from 'react';

function useLocalStorage(key) {
  const [favoriteCards, setFavoriteCards] = React.useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  });

  let currentStorage;
  const setFavorite = React.useCallback((character) => {
    currentStorage = JSON.parse(localStorage.getItem(key)) || [];
    const updatedStorage = [...currentStorage, character];
    localStorage.setItem(key, JSON.stringify(updatedStorage));
    setFavoriteCards(updatedStorage);
  }, [key]);

  const removeFavorite = React.useCallback((character) => {
    currentStorage = JSON.parse(localStorage.getItem(key));
    const filterStorage = currentStorage.filter((value) => value.name !== character.name);
    localStorage.setItem(key, JSON.stringify(filterStorage));
    setFavoriteCards(filterStorage);
  });

  return { favoriteCards, setFavorite, removeFavorite };
}

export default useLocalStorage;
