import React from 'react';
import Navbar from '../Navbar/Navbar';

// span with className invisible for a better elements positioning

function Header() {
  return (
    <header className="bg-gray-400 p-3 flex justify-center relative">
      <Navbar />
      <h1 className="text-3xl sm:text-5xl">Pokémon TCG App</h1>
    </header>
  );
}

export default Header;
