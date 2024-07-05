// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

import '../../styles/navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle navbar menu on mobile view
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" href="/">
           Next.js App
          </Link>
          <button
            className={`navbar-burger burger ${isOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={isOpen ? 'true' : 'false'}
            onClick={toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link className="navbar-item" href="/">
              
                Home
              
            </Link>
            <Link className="navbar-item" href="/about">
              
                About
              
            </Link>
            <Link className="navbar-item" href="/contact">
              
                Contact
              
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
