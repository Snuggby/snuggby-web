import style from "@/styles/global/header.module.scss";
import Image from "next/image";
import { useState } from "react";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={style.headerContainer}>
      <div className={style.logoContainer}>
        <img src="/assets/img/temp.png" alt="temp" />
        <img src="/assets/img/logo.png" alt="Logo" />
      </div>

      {/* Mobile menu toggle button */}
      <div className={style.mobileMenuIcon} onClick={toggleMenu}>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </div>

      {/* Menu items for desktop */}
      <div className={`${style.menuItems} ${showMenu ? style.show : ""}`}>
        <ul className={style.menuList}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Event</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      {/* Search bar */}
      {/* <div className={style.searchContainer}>
        <input
          className={style.searchInput}
          type="search"
          placeholder="Search"
        />
      </div> */}
    </div>
  );
};

export default Header;
