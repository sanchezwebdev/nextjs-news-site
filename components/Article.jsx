import React, { useEffect, useState } from "react";
import styles from "../styles/Article.module.css";
import Divider from '@mui/material/Divider';
import createSlug from '../pages/helper/slug.js'
import { useRouter } from 'next/router'

const Article = ({ data, className }) => {
  const [articleData, setArticleData] = useState(null);
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/news/${articleData._id}`);
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

  useEffect(() => {
    const fetchCmsUrl = async () => {
      try {
        if (articleData && articleData.imgId) {
          const cmsResponse = await fetch(
            `https://cdn.contentful.com/spaces/vdnl4md1xpsv/assets/${articleData.imgId}?access_token=tB7F-mUWmn1dxWECof7Jnq7G_SfXUqreWmM6oG4KvK8`
          );
          const imageData = await cmsResponse.json();
          const url = imageData.fields.file.url;
          setCmsUrl(url);
        }
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };
    fetchCmsUrl();
  }, [articleData]);

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
