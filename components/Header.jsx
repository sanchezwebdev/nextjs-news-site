import React from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <input
          type="checkbox"
          className={styles.openSidebarMenu}
          id="openSidebarMenu"
        />
        <span id={styles.span}></span>
        <div className={styles.title}>The Temecula Tribune</div>
        <label htmlFor="openSidebarMenu" className={styles.sidebarIconToggle}>
          <IoMenu className={styles.menu} id="menu"/> 
          <IoClose className={styles.menuClose} id="menuClose"/>
        </label>
      </header>
    </>
  );
};

export default Header;
