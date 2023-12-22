import React from 'react';
import styles from '../../styles/Banner.module.css';

const Banner = ({ data }) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.title}>{data.headerCategory}</div>
      
        <img src={data.headerImgUrl} className={styles.image} alt="" />
    
    </div>
  )
}

export default Banner;
