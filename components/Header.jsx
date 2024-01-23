import { IoMenu, IoClose } from "react-icons/io5";
import styles from "../styles/Header.module.css";

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
