import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import aizen from './logo.svg';
import sch from './search 1.png';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
  <div>
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
           <img src={aizen}/>
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/" className="nav-link">
               Product
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About Us 
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
          <a className="nav-link">
            <div> <input type="text"/><img src={sch} /></div>
          </a>
        </li>
        </ul>
      </div>
    </nav>
  </div>
  );
};

export default Navbar;
