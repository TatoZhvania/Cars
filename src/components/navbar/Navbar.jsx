import React, { useState } from 'react';
import { FaBars, FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';
import { Link } from 'react-scroll';
import './NavbarStyles.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h3>Race.</h3>
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <Link onClick={handleClose} to="power">
            <li>Power</li>
          </Link>
          <Link onClick={handleClose} to="speed">
            <li>Speed</li>
          </Link>
          <Link onClick={handleClose} to="handling">
            <li>Handling</li>
          </Link>
          <Link onClick={handleClose} to="options">
            <li>Options</li>
          </Link>
          <Link onClick={handleClose} to="contact">
            <li>Contact</li>
          </Link>

          <div className="mobile-menu">
            <button>Shop</button>
            <button>Account</button>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <GiCarWheel className="icon" />
            </div>
          </div>
        </ul>

        <ul className="nav-menu hide">
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          {nav ? (
            <FaTimes size={20} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={20} style={{ color: '#ffffff' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
