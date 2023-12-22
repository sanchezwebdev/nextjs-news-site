import React, { useEffect, useState } from "react";
import styles from "../styles/Headline.module.css";
import Divider from '@mui/material/Divider';
import createSlug from "../helpers/slug"
import { useRouter } from 'next/router'



const Headline = ({ data, className }) => {
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
          <br/><Divider className={styles.hlDivider}/>
        </>
      )}
    </div>
  );
};

export default Headline;
