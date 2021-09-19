import React from 'react';
import { ToastContainer } from 'react-toastify';
import CardDetails from '../components/CardDetails/CardDetails';

function Details() {
  return (
    <>
      <ToastContainer autoClose={4000} />
      <CardDetails />
    </>
  );
}

export default Details;
