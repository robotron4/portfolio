import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

function RootLayout() {
  const [showNav, setShowNav] = useState(false);
  function handleShowNav() {
    setShowNav(!showNav);
  }

  return (
    <>
      <header className="bg-nav-color text-text-color text-xl h-20 flex ">
        <div className="container flex mx-auto justify-between ">
          <div className="block px-5 py-2 self-center transition hover:text-accent-color hover:tracking-wider">
            some nice logo
          </div>
          <button className="md:hidden px-5" onClick={handleShowNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
              className="w-8 h-8 hover:stroke-accent-color transition">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
          <nav
            className={`fixed self-center md:static md:w-auto top-16 bottom-0 bg-nav-color w-40 h-[140px] md:h-auto md:auto ${
              showNav ? "right-0" : "-right-full"
            } transition-all`}>
            <ul className="md:flex">
              <li className="block px-5 py-2 transition hover:text-accent-color hover:tracking-wider">
                <NavLink to="/">about </NavLink>
              </li>
              <li className="block px-5 py-2 transition hover:text-accent-color hover:tracking-wider">
                <NavLink to="/">projects </NavLink>
              </li>
              <li className="block px-5 py-2 transition hover:text-accent-color hover:tracking-wider">
                <NavLink to="/">contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="bg-body-color text-text-color font-mono min-h-screen text-lg ">
        <Outlet />
      </div>
      <footer>footer</footer>
    </>
  );
}

export default RootLayout;
