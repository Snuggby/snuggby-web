import style from "@/styles/global/header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
    <div style={
      {
        height: "65px",
        width: "100%",
      }
    }
    ></div>
    <div className={style.headerContainer}>
      <div className={style.logoContainer}>
        <img src="assets/img/temp.png" alt="temp" />
        <img src="assets/img/logo.png" alt="Logo" />
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/event">Event</Link>
          </li>
          <li>
            <Link href="/aboutUs">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
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
    </>
  );
};

export default Header;
