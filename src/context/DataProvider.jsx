import React from 'react';
import PropTypes from 'prop-types';
import dataContext from './dataContext';
import useAxios from '../hooks/useAxios';

function DataProvider({ children }) {
  const { cards, error, loading } = useAxios();

  return (
    <dataContext.Provider
      value={{
        cards,
        error,
        loading,
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
