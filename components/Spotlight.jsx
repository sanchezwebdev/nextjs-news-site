import React, { useEffect, useState } from "react";
import styles from "../styles/Spotlight.module.css";
import Divider from '@mui/material/Divider';
import createSlug from "../helpers/slug"
import { useRouter } from 'next/router'

const Spotlight = ({ data, className }) => {
  const router = useRouter();
  const [articleData, setArticleData] = useState(null);
  const formatedCmsUrl = data && data.cmsUrl 
  ? `${data.cmsUrl}?fm=webp&w=1400&h=1100`
  : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolvedData = await data;
        setArticleData(resolvedData);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };
    fetchData();
  }, [data]);
  
  const handleNavigation = () => {
    if (articleData && articleData.title) {
      const slug = createSlug(articleData.title);
      router.push(`/${slug}`);
    }
  };


  const getTitleClass = () => {
    let titleClass = '';

    // Checking className for specific conditions
    if (className === 'Home_spotlight1__ic7om') {titleClass += ` ${styles.s1Title}`;}
    if (className === 'Home_spotlight2__MfRih') {titleClass += ` ${styles.s2Title}`;}
    if (className === 'Home_spotlight3__vvfhJ') {titleClass += ` ${styles.s3Title}`;}

    return titleClass;
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {articleData && (
        <>
        <h2 className={getTitleClass()} onClick={handleNavigation}>{articleData.title}</h2>
        <div className={styles.imageWrap}>
          <img src={formatedCmsUrl} className={styles.image} alt="" onClick={handleNavigation} loading="lazy"/>
        </div>
          <Divider className={styles.divider}/>
          </>
      )}
      
    </div>
  );
};

export default Spotlight;
