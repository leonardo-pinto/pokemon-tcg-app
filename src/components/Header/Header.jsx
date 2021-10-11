import React from 'react';
import Navbar from '../Navbar/Navbar';

// span with className invisible for a better elements positioning

function Header() {
  return (
    <header className="bg-purple-800 p-5 flex justify-center relative items-center">
      <Navbar />
      <h1 className="text-white text-2xl sm:text-5xl">Pokémon TCG App</h1>
    </header>
  );
}

export default Header;
