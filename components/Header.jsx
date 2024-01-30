import { IoMenu, IoClose } from "react-icons/io5";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = ({ isChecked, onCheckboxChange }) => {

  return (
      <>  
        <input
        type="checkbox"
        className={styles.openSidebarMenu}
        id="openSidebarMenu"
        checked={isChecked}
        onChange={(e) => onCheckboxChange(e.target.checked)}
      />
      <header className={styles.header}>
        <span id={styles.span}></span>
        <Link href="/" className = {styles.link}><div className={styles.title}>The Pasadena Tribune</div></Link>
        <label htmlFor="openSidebarMenu" className={styles.sidebarIconToggle}>
          <IoMenu className={styles.menu} id="menu"/> 
          <IoClose className={styles.menuClose} id="menuClose"/>
        </label>
      </header>

    </>
  );
};

export default Header;
