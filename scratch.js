import React, { useEffect, useState } from "react";
import styles from "../styles/Spotlight.module.css";
import Divider from '@mui/material/Divider';

const Trending = ({ data, className }) => {
  const [articleData, setArticleData] = useState(null);
  const [cmsUrl, setCmsUrl] = useState(null);

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
    let titleClass = styles.title;

    // Checking className for specific conditions
    if (className === 'spotlight1') {
      titleClass += ` ${styles.spotlight1}`;
    }
    if (className === 'spotlight2') {
      titleClass += ` ${styles.spotlight2}`;
    }

    return titleClass;
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {articleData && (
        <>
          <h2 className={getTitleClass()}>{articleData.title}</h2>
          <img src={cmsUrl} className={styles.image} alt="" />
          <Divider className={styles.divider}/>
        </>
      )}
    </div>
  );
};

export default Trending;
