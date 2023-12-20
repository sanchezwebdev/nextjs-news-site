import React, { useEffect, useState } from "react";
import styles from "../styles/Article.module.css";
import Divider from '@mui/material/Divider';
import createSlug from '../helpers/slug'
import { useRouter } from 'next/router'

const Article = ({ data, className }) => {
  const [articleData, setArticleData] = useState(null);
  const router = useRouter();

  const handleNavigation = () => {
    if (articleData && articleData.title) {
      const slug = createSlug(articleData.title);
      router.push(`/${slug}`);
    }
  };

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


  return (
    <div className={`${styles.container} ${className}`}>
      {articleData && (
        <>
          <h2 className={styles.title}  onClick={handleNavigation}>{articleData.title}</h2>
          <p className={styles.description} onClick={handleNavigation}>{articleData.description}</p>
          <Divider className={styles.divider}/>
        </>
      )}
    </div>
  );
};

export default Article;
