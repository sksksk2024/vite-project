import { useEffect, useState } from 'react';
import logo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import work from './../images/illustration-working.svg';

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);

  // Toggle menu visibility
  const MenuStart = () => {
    const breakpoint = 64 * 16; // 64em * 16px

    if (window.innerWidth < breakpoint) {
      setIsHidden(!isHidden);
    } else {
      setIsHidden(true);
    }
  };

  // Adding event listener to handle window resize
  useEffect(() => {
    // Call MenuStart on window resize
    const handleResize = () => {
      MenuStart();
    };

    // Run on initial render and whenever the window resizes
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add or remove ".no-scroll" class on the body when the menu is open
  useEffect(() => {
    if (!isHidden) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup to ensure no-scroll is removed on unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isHidden]);

  return (
    <header className="min-h-container-400 lg:min-h-container-100">
      <section className="relative flex justify-between lg:justify-around items-center w-screen h-64H lg:px-0 py-64P bg-white">
        <div className="relative flex gap-8 font-bold text-md ml-16M">
          <img className="w-112W sm:w-128W" src={logo} aria-hidden="true" />
          <ul className="hidden lg:flex items-center gap-8 text-black">
            <li className="relative cursor-pointer group">
              <button
                disabled
                className="cursor-pointer text-gray-500 hover:text-black"
              >
                Features
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button
                disabled
                className="cursor-pointer text-gray-500 hover:text-black"
              >
                Pricing
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button
                disabled
                className="cursor-pointer text-gray-500 hover:text-black"
              >
                Resources
              </button>
            </li>
          </ul>
        </div>

        {/* Accessing the menu - Mobile */}
        <div
          className="relative cursor-pointer w-32W h-32H block lg:hidden mr-32M"
          onClick={MenuStart}
        >
          {/* Hamburger Icon */}
          <FontAwesomeIcon
            icon={faBars}
            // alt="burger menu"
            className={`z-10 absolute inset-0 w-full h-full transition-transform transition-opacity duration-300 ${
              isHidden
                ? 'opacity-100 scale-100 rotate-0'
                : 'opacity-0 scale-75 rotate-180 pointer-events-none'
            }`}
          />
          {/* Close (X) Icon */}
          <FontAwesomeIcon
            icon={faTimes}
            // alt="close menu"
            className={`absolute z-10 inset-0 w-full h-full transition-transform transition-opacity duration-300 ${
              isHidden
                ? 'opacity-0 scale-75 rotate-180 pointer-events-none'
                : 'opacity-100 scale-100 rotate-0'
            }`}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isHidden
              ? 'animate-fadeOut cursor-none -z-10'
              : 'z-50 animate-comeIn mb-16M'
          } absolute w-[100%] top-2/3 mt-16M mx-auto lg:hidden`}
        >
          <ul
            className={`static rounded-10BR animate-fade translate-x-1/2 flex flex-col justify-start items-center gap-4 font-bold text-white text-lg w-[50dvw] max-w-container-600 max-h-container-600 p-32P bg-very-dark-violet background lg:hidden ${
              isHidden && 'select-none -z-50 absolute left-800I'
            }`}
          >
            <li className="relative cursor-pointer group">
              <button disabled className="cursor-pointer text-white ">
                Features
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button disabled className="cursor-pointer text-white ">
                Pricing
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button disabled className="cursor-pointer text-white ">
                Resources
              </button>
            </li>
            <li>
              <hr className="w-[40dvw] max-w-container-500 border-solid border-gray border-1 opacity-60" />
            </li>

            <li className="relative cursor-pointer group">
              <button disabled className="cursor-pointer text-white ">
                Login
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button
                disabled
                className="cursor-pointer text-white bg-cyan-500 rounded-30BR px-16P py-16P hover:opacity-60 w-[40dvw] max-w-container-500"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="relative hidden lg:flex gap-8 font-bold text-md p-16P">
          <ul className="flex items-center gap-8 text-white">
            <li className="relative cursor-pointer group">
              <button className="text-black px-16P py-16P text-gray-500">
                Login
              </button>
            </li>
            <li className="relative cursor-pointer group">
              <button className="text-black text-white bg-cyan rounded-30BR px-48P py-16P hover:opacity-60">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </section>
      <img
        src={work}
        aria-hidden="true"
        className={`${
          isHidden
            ? 'block static z-50 translate-x-1/3 lg:hidden'
            : 'relative animate-fadeOut -z-50 transform transition-transform duration-500 delay-1000 translate-x-[1800px]'
        }`}
      />
    </header>
  );
};

export default Header;
