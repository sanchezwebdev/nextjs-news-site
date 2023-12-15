import styles from "../styles/Footer.module.css";
import Divider from '@mui/material/Divider';

    const Footer = () => {
    

  return (
    <footer className={styles.containerFooter}>
    <div className={styles.innerFooter}>
      <div>The Temecula Tribune</div>
      <div>Social Media</div>
      <div>Advertise With Us</div>
      <div>About Us</div>
      <div>Copyright © 2023, The Temecula Tribune | Terms of Service | Privacy Policy |</div>
    </div>
  </footer> 
  );
};

export default Footer;
