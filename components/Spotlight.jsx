import React, { useEffect, useState } from "react";
import styles from "../styles/Spotlight.module.css";
import Divider from '@mui/material/Divider';
import { useRouter } from 'next/router'

const Spotlight = ({ data, className }) => {
  const [articleData, setArticleData] = useState(null);
  const [cmsUrl, setCmsUrl] = useState(null);
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
          <img src={cmsUrl} className={styles.image} alt="" onClick={handleNavigation}/>
        </div>
          <Divider className={styles.divider}/>
          </>
      )}
      
    </div>
  );
};

export default Spotlight;
