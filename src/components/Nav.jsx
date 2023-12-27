import React from 'react';
import {headerLogo} from "../assets/images";
import {hamburger} from "../assets/icons";
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29}></img>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">AboutUs</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">ContactUs</a>
          </li>
        </ul>
        <div>
          <img
            className="hidden max-lg:block"
            src={hamburger}
            width={25}
            height={25}
          ></img>
        </div>
      </nav>
    </header>
  );
}

export default Nav
