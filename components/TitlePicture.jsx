import React, { useEffect, useState } from "react";
import styles from "../styles/TitlePicture.module.css";
import Divider from '@mui/material/Divider';
import createSlug from "../helpers/slug.js"
import { useRouter } from 'next/router'

const TitlePicture = ({ data, className }) => {
  const router = useRouter();
  const [articleData, setArticleData] = useState(null);
  const formatedCmsUrl = data && data.cmsUrl 
  ? `${data.cmsUrl}?fm=webp&w=500&h=300`
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


  return (
    <div className={`${styles.container} ${className}`}>
      {articleData && (
        <>
          <h2 className={styles.title} onClick={handleNavigation}>{articleData.title}</h2>
          <img src={formatedCmsUrl} className={styles.image} alt="" onClick={handleNavigation} loading="lazy"/>
          <Divider className={styles.divider} onClick={handleNavigation}/>
        </>
      )}
    </div>
  );
};

export default TitlePicture;
