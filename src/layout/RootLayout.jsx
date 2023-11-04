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
          <div className="block px-5 py-2 self-center underline-offset-4 hover:transition-all decoration-accent-color hover:underline hover:underline-offset-8">
            <NavLink to="/">home</NavLink>
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
            className={`fixed self-center md:static md:w-auto top-16 bottom-0 bg-nav-color w-40 h-[100px] md:h-auto md:auto ${
              showNav ? "right-0" : "-right-full"
            } transition-all`}>
            <ul className="md:flex">
              <li className="block px-5 py-2 hover:transition-all underline-offset-4 decoration-accent-color hover:underline hover:underline-offset-8">
                <NavLink to="/projects">projects </NavLink>
              </li>
              <li className="block px-5 py-2 hover:transition-all underline-offset-4 decoration-accent-color hover:underline hover:underline-offset-8">
                <NavLink to="/">contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="bg-body-color text-text-color font-mono min-h-screen text-lg ">
        <Outlet />
      </div>
      <footer className="bg-nav-color text-text-color text-l h-16 py-4 flex justify-center">
        <span className="mr-20"> &copy; Leon Vornholt 2023 </span>
        <a href="https://github.com/robotron4">
          <svg
            width="23"
            height="23"
            viewBox="0 0 101 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50.2763 0.422363C22.6655 0.422363 0.276123 22.8078 0.276123 50.4226C0.276123 72.5143 14.6027 91.2564 34.4694 97.8679C36.9682 98.3307 37.8858 96.7833 37.8858 95.4625C37.8858 94.2704 37.8391 90.3313 37.8179 86.1534C23.9074 89.178 20.9723 80.2541 20.9723 80.2541C18.6978 74.4746 15.4207 72.9382 15.4207 72.9382C10.8844 69.8348 15.7626 69.8983 15.7626 69.8983C20.7836 70.2513 23.4275 75.0511 23.4275 75.0511C27.8869 82.6951 35.1243 80.485 37.9775 79.2078C38.4261 75.9758 39.7222 73.7704 41.1519 72.5218C30.0464 71.2571 18.3716 66.9698 18.3716 47.8113C18.3716 42.3526 20.3248 37.892 23.5235 34.3906C23.0043 33.131 21.293 28.0457 24.0078 21.1585C24.0078 21.1585 28.2065 19.8146 37.7615 26.2838C41.7496 25.1756 46.0271 24.6203 50.2763 24.6015C54.5256 24.6203 58.8062 25.1756 62.8022 26.2838C72.3457 19.8146 76.5385 21.1585 76.5385 21.1585C79.26 28.0457 77.5479 33.131 77.0287 34.3906C80.2345 37.892 82.1744 42.3523 82.1744 47.8113C82.1744 67.0153 70.4776 71.2442 59.3438 72.4818C61.1371 74.0335 62.7351 77.0765 62.7351 81.7411C62.7351 88.431 62.6771 93.8155 62.6771 95.4625C62.6771 96.7931 63.577 98.3522 66.1118 97.8613C85.9676 91.2423 100.276 72.5069 100.276 50.4226C100.276 22.8078 77.8899 0.422363 50.2763 0.422363Z"
              fill="white"
            />
            <path
              d="M19.0028 71.6489C18.893 71.8971 18.5016 71.9716 18.1459 71.8014C17.7832 71.6383 17.5793 71.2995 17.6969 71.0501C17.8048 70.7944 18.1961 70.723 18.5581 70.8948C18.9216 71.0575 19.1286 71.3995 19.0028 71.6489ZM21.4623 73.8433C21.2239 74.0645 20.7576 73.9617 20.4411 73.6123C20.1141 73.2637 20.0529 72.7978 20.2949 72.5731C20.5408 72.3524 20.9929 72.4555 21.3207 72.8045C21.6478 73.157 21.7113 73.6202 21.4619 73.8437L21.4623 73.8433ZM23.1497 76.651C22.843 76.864 22.3419 76.6644 22.0325 76.2197C21.7262 75.7754 21.7262 75.2421 22.0391 75.0284C22.3497 74.8146 22.843 75.0068 23.1567 75.448C23.4626 75.9001 23.4626 76.4334 23.1493 76.6514L23.1497 76.651ZM26.0029 79.9031C25.7288 80.205 25.1453 80.1243 24.7179 79.7117C24.281 79.3086 24.1591 78.7365 24.434 78.4341C24.7112 78.1314 25.2982 78.2165 25.7288 78.6255C26.1629 79.0278 26.2955 79.6043 26.0033 79.9031H26.0029ZM29.6906 81.0011C29.5703 81.3924 29.0079 81.5705 28.4417 81.4042C27.8762 81.2328 27.506 80.774 27.6201 80.3784C27.7378 79.9843 28.3025 79.7988 28.873 79.9768C29.4377 80.1474 29.8087 80.6027 29.691 81.0011H29.6906ZM33.8881 81.4666C33.9023 81.8791 33.4219 82.221 32.8274 82.2285C32.2294 82.2414 31.7459 81.9077 31.7396 81.5022C31.7396 81.0858 32.209 80.747 32.8066 80.7372C33.4011 80.7254 33.8881 81.0568 33.8881 81.4666ZM38.0111 81.3085C38.0825 81.7109 37.6692 82.1242 37.079 82.234C36.4986 82.3399 35.9614 82.0916 35.8873 81.6928C35.8151 81.2803 36.2363 80.8674 36.8155 80.7603C37.4069 80.6576 37.9359 80.8995 38.0111 81.3085Z"
              fill="white"
            />
          </svg>
        </a>
      </footer>
    </>
  );
}

export default RootLayout;
