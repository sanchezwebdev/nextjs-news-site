import {  useContext } from 'react';
import { useRouter } from 'next/router';
import createSlug from '../../helpers/slug'
import styles from "../../styles/CardMain.module.css";
import { Divider } from "@mui/material";
import { ImageLoadContext } from '../../pages/[category]/index';

const CardMain = ({ data, className }) => {
  const router = useRouter();
  let titleClass = styles.title;
  let imageClass = styles.image;
  let descriptionClass = styles.description;
  const { setImageLoaded } = useContext(ImageLoadContext);
  




   // Iterating through numbers 1 to 12 to check if 'className' includes a specific cardMain class.
  for (let i = 1; i <= 12; i++) {
    if (className.includes(`cardMain${i}`)) {
      titleClass = `${styles[`title${i}`] || ''} ${styles.title}`;
      imageClass = `${styles[`image${i}`] || ''} ${styles.image}`;
      descriptionClass = `${styles[`description${i}`] || ''} ${styles.description}`;
      break; 
    }
  }
// Function to handle navigation when any part of the card is clicked.
  const handleNavigation = () => {
      const titleSlug = createSlug(data.title);
      const categorySlug = createSlug(data.category);
      router.push(`/${categorySlug}/${titleSlug}`);
  };

  const handleImageLoaded = () => setImageLoaded(true);

  const combinedClassName = `${styles.containerMain} ${className}`
  return (
    <div className={combinedClassName} >
      <img src={data.imgUrl} alt="image" className={imageClass} onClick={handleNavigation} onLoad={handleImageLoaded}/>
      <div className={titleClass} onClick={handleNavigation}>{data.title}</div>
      <div className={descriptionClass}onClick={handleNavigation}>{data.description}</div>
      <Divider className={styles.cardDivider}/>
    </div>
  );
};

export default CardMain;
