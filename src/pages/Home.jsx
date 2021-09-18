import React from 'react';
import { ToastContainer } from 'react-toastify';
import CardsList from '../components/CardsList/CardsList';

function Home() {
  return (
    <>
      <ToastContainer autoClose={4000} />
      <CardsList />
      ola
    </>
  );
}

export default Home;
