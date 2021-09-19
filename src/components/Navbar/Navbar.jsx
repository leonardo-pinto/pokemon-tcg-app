import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import NavbarLinks from './NavbarLinks';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="absolute left-0">
      <svg
        onClick={handleSidebar}
        data-testid="sidebarIcon"
        className="text-white w-10 h-10 ml-3 sm:w-12 sm:h-12 cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <OutsideClickHandler
        onOutsideClick={() => {
          if (sidebarOpen) handleSidebar();
        }}
      >
        <nav
          className={sidebarOpen
            ? 'bg-purple-800 w-auto h-screen flex justify-center fixed top-0 transition duration-350 ease-in-out left-0 z-10' : 'w-250 h-screen flex justify-center fixed top-0 transition duration-800 -left-full'}
        >
          <NavbarLinks handleSidebar={handleSidebar} />
        </nav>
      </OutsideClickHandler>
    </div>
  );
}

export default Navbar;
