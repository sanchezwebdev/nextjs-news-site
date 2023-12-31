import React, { useEffect, useState } from "react";
import styles from "../styles/Trending.module.css";
import Divider from '@mui/material/Divider';
import createSlug from "../helpers/slug"
import { useRouter } from 'next/router'

const Trending = ({ data, className }) => {
  const router = useRouter();
  const [articleData, setArticleData] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const formatedCmsUrl = data && data.cmsUrl 
    ? `${data.cmsUrl}?fm=webp&w=${width < 740 ? 1500 : 300}&h=${width < 740 ? 750 : 200}`
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
      const titleSlug = createSlug(articleData.title);
      const categorySlug = createSlug(articleData.category);
      router.push(`/${categorySlug}/${titleSlug}`);
    }
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {articleData && (
        <>
          <h2 className={styles.title} onClick={handleNavigation}>{articleData.title}</h2>
          <p className={styles.description} onClick={handleNavigation}>{articleData.description}</p>
          <img src={formatedCmsUrl} className={styles.image} alt="" onClick={handleNavigation} loading="lazy"/>
          <Divider className={styles.divider}/>
        </>
      )}
      
    </div>
  );
};

export default Trending;


