import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Divider } from "@mui/material";
import useScrollPosition from "../../helpers/useScroll";
import toggleBodyScroll from "../../helpers/toggleBodyScroll";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from '../../components/Footer'
import styles from "../../styles/Home.module.css";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone);

const Layout = ({ children  }) => {
  var formattedDate = dayjs().tz('America/Los_Angeles').format('dddd, MMM D');
  var [temp, setTemp] = useState(null)
  var [iconUrl, setIconUrl] = useState(null)
  var [iconLoaded, setIconLoaded] = useState(false);
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

 
useEffect(() => {
  const fetchInternalWeatherData = async () => {
    const res = await fetch('/api/weather');
    const data = await res.json(); 
    var temp = data.current.temp_f
    var iconUrl = data.current.condition.icon
    setTemp(temp)
    setIconUrl(iconUrl)
  };

  fetchInternalWeatherData();
}, []);


useEffect(() => {
  if (iconUrl) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = iconUrl;
    link.as = 'image';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }
}, [iconUrl]);

useEffect(() => {
  if (iconUrl) {
    setIconLoaded(false); 
  }
}, [iconUrl]);
  
  return (
    <div className={styles.body}>
    <div className={overlayStyle} style={{ marginTop: `${dynamicMarginTop}px` }}></div>
      <Menu isChecked={isChecked} className={menuClassName} />
      <Header isChecked={isChecked} onCheckboxChange={handleCheckboxChange} />
      <Divider style={{ marginBottom: "1px" }} className={styles.headerDivider}/>
      <Divider className={styles.headerDivider} />
      <div className = {styles.dayTime}>
      <div className ={styles.weather}>
      {iconUrl ? (
                <img
                  src={iconUrl}
                  alt="Weather icon"
                  className={styles.icon}
                  style={{ opacity: iconLoaded ? 1 : 0 }} 
                  onLoad={() => setIconLoaded(true)} 
                  onError={() => setIconLoaded(false)} 
                />
                  ) : null}
          <div className = {styles.temp}>{temp}&deg;</div>
      </div>
        <span>{formattedDate}</span>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;



