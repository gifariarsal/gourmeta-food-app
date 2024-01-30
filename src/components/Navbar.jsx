import React, { useState } from 'react';
import {
  IoMenuOutline,
  IoClose,
  IoSearch,
  IoCartOutline,
  IoReceiptOutline,
  IoHeartOutline,
  IoWalletOutline,
  IoPricetagsOutline,
  IoHelpCircleOutline,
} from 'react-icons/io5';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer p-2 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          <IoMenuOutline size={30} />
        </div>
        <img src="/gourmeta_logo.png" alt="logo" className="ml-2 h-6 md:h-8" />
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[350px] lg:w-[450px]">
        <IoSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods ..."
        />
      </div>
      <button className="bg-primary text-white !border-none hidden md:flex items-center py-2 rounded-full hover:bg-primary/80 transition duration-300 ease-in-out">
        <IoCartOutline size={20} className="mr-2" /> Cart
      </button>

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ''
      )}

      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500'
        }
      >
        <IoClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-primary text-3xl p-4">gourmeta</h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex items-center">
              <IoReceiptOutline size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex items-center">
              <IoHeartOutline size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex items-center">
              <IoWalletOutline size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex items-center">
              <IoPricetagsOutline size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex items-center">
              <IoHelpCircleOutline size={25} className="mr-4" /> Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
