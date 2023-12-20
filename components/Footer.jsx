import styles from "../styles/Footer.module.css";
import Divider from '@mui/material/Divider';
import  {YouTube, Instagram, Facebook, Twitter} from '@mui/icons-material';
  

    const Footer = () => {
    

  return (
    <footer className={styles.containerFooter}>
      <div className={styles.innerFooter}>
        <div className={styles.siteName}>The Temecula Tribune</div>
        <div className={styles.advertise}>Advertise With Us</div>
        <div className={styles.social}>
          <Twitter className={styles.icon}/>
          <Instagram className={styles.icon}/>
          <Facebook className={styles.icon}/>
          <YouTube className={styles.icon}/>
          </div>
        <div className={styles.careers}>Careers</div>
        <div className={styles.about}>About Us</div>
        <Divider className={styles.divider}/>
        <div className={styles.copyright}>Copyright © 2023, The Temecula Tribune | Terms of Service | Privacy Policy |</div>
        
      </div>
    </footer> 
  );
};

export default Footer;
