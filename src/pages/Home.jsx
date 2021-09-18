import React from 'react';
import { ToastContainer } from 'react-toastify';
import CardsList from '../components/CardsList/CardsList';
import SearchBar from '../components/SearchBar/SearchBar';

function Home() {
  return (
    <>
      <ToastContainer autoClose={4000} />
      <SearchBar />
      <CardsList />
    </>
  );
}

export default Home;
