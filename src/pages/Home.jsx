import React from 'react';
import { ToastContainer } from 'react-toastify';
import CardsList from '../components/CardsList/CardsList';
import SearchBar from '../components/SearchBar/SearchBar';
import SortBar from '../components/SortBar/SortBar';

function Home() {
  return (
    <>
      <ToastContainer autoClose={4000} />
      <SearchBar />
      <SortBar />
      <CardsList />
    </>
  );
}

export default Home;
