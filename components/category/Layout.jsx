// components/Layout.js
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Divider } from "@mui/material";
import useScrollPosition from "../../helpers/useScroll";
import toggleBodyScroll from "../../helpers/toggleBodyScroll";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from '../../components/Footer'
import styles from "../../styles/Home.module.css";

const Layout = ({ children }) => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const scrollY = useScrollPosition();
  const dynamicMarginTop = Math.max(60 - scrollY, 0);
  const menuClassName = isChecked ? "active" : "";
  const overlayStyle = isChecked ? styles.overlayActive : styles.overlayInactive;
  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  // Effect for toggling body scroll based on the isChecked state.
  useEffect(() => {
    toggleBodyScroll(isChecked);
  }, [isChecked]);

  // Effect for handling route changes, closing the menu when starting navigation.
  useEffect(() => {
    const handleRouteChange = () => {
      setIsChecked(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);
  
  return (
    <div className={styles.body}>
    <div className={overlayStyle} style={{ marginTop: `${dynamicMarginTop}px` }}></div>
      <Menu isChecked={isChecked} className={menuClassName} />
      <Header isChecked={isChecked} onCheckboxChange={handleCheckboxChange} />
      <Divider style={{ marginBottom: "1px" }} className={styles.headerDivider}/>
      <Divider className={styles.headerDivider} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
