import {useState, useEffect} from 'react'
import styles from "../styles/Footer.module.css";
import toggleBodyScroll from '../helpers/toggleBodyScroll';
import Divider from '@mui/material/Divider';
import  {YouTube, Instagram, Facebook, Twitter} from '@mui/icons-material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box'
  
const Footer = () => {
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

// Effect hook to toggle body scroll based on the 'open' state of the modal.
  useEffect(() => {
    toggleBodyScroll(open);
  }, [open]);
    
  return (
    <footer className={styles.containerFooter}>
      <Modal open={open} onClose={handleClose}>
        <Box className={styles.box}>
            Coming Soon
        </Box>
      </Modal>
      <div className={styles.innerFooter}>
        
        <div className={styles.siteName}>The Pasadena Tribune</div>
        <div className={styles.advertise} onClick={handleOpen}>Advertise With Us</div>
        <div className={styles.social}>
          <Twitter className={styles.icon} onClick={handleOpen}/>
          <Instagram className={styles.icon} onClick={handleOpen}/>
          <Facebook className={styles.icon} onClick={handleOpen}/>
          <YouTube className={styles.icon} onClick={handleOpen}/>
        </div>
        <div className={styles.careers} onClick={handleOpen}>Careers</div>
        <div className={styles.about} onClick={handleOpen}>About Us</div>
        <Divider className={styles.divider}/>
        <div className={styles.copyright}>Copyright © 2023, The Pasadena Tribune | Terms of Service | Privacy Policy |</div>
        
      </div>
    </footer> 
  );
};

export default Footer;
