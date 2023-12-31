import { React } from "react";
import { useRouter } from 'next/router';
import createSlug from '../../helpers/slug'
import styles from "../../styles/CardMain.module.css";
import { Divider } from "@mui/material";

const CardMain = ({ data, className }) => {
    if (!data) {
        return null; 
    }
  
  const router = useRouter();
  let titleClass = styles.title;
  let imageClass = styles.image;
  let descriptionClass = styles.description;

  for (let i = 1; i <= 12; i++) {
    if (className.includes(`cardMain${i}`)) {
      titleClass = `${styles[`title${i}`] || ''} ${styles.title}`;
      imageClass = `${styles[`image${i}`] || ''} ${styles.image}`;
      descriptionClass = `${styles[`description${i}`] || ''} ${styles.description}`;
      break; 
    }
  }

  const handleNavigation = () => {
      const titleSlug = createSlug(data.title);
      const categorySlug = createSlug(data.category);
      router.push(`/${categorySlug}/${titleSlug}`);
  };
  const combinedClassName = `${styles.containerMain} ${className}`;
  return (
    <div className={combinedClassName} >
      <img src={data.imgUrl} alt="" className={imageClass}onClick={handleNavigation} />
      <div className={titleClass}onClick={handleNavigation}>{data.title}</div>
      <div className={descriptionClass}onClick={handleNavigation}>{data.description}</div>
      <Divider className={styles.cardDivider}/>
    </div>
  );
};

export default CardMain;
