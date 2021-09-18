import React from 'react';
import { ToastContainer } from 'react-toastify';
import FavoritesCardsList from '../components/FavoritesCardsList/FavoritesCardsList';

function Favorites() {
  return (
    <>
      <ToastContainer autoClose={4000} />
      <FavoritesCardsList />
    </>
  );
}

export default Favorites;
