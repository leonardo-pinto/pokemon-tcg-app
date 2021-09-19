import React from 'react';
import { ToastContainer } from 'react-toastify';
import CardsList from '../components/CardsList/CardsList';
import SearchBar from '../components/SearchBar/SearchBar';
import SortBar from '../components/SortBar/SortBar';

function Home() {
  return (
    <>
      <ToastContainer autoClose={4000} />
      <div className="flex flex-col sm:flex-row md:justify-center md:items-center md:flex-row flex-justify-center items-center p-4">
        <SearchBar />
        <SortBar />
      </div>
      <CardsList />
    </>
  );
}

export default Home;
