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


import React, { useEffect, useState } from "react";
import Link from 'next/link'; // Import Link from next/link
import styles from "../styles/Headline.module.css";
import Divider from '@mui/material/Divider';

const Headline = ({ data, className }) => {
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

  return (
    <div className={`${styles.container} ${className}`}>
      {articleData && (
        <>
          {/* Wrap the title in a Link */}
          <Link href={`/articles/${articleData._id}`} passHref>
            <a className={styles.titleLink}> {/* Add a class if needed */}
              <h2 className={styles.title}>{articleData.title}</h2>
            </a>
          </Link>
          
          <p className={styles.description}>{articleData.description}</p>

          {/* Wrap the image in a Link */}
          {cmsUrl && (
            <Link href={`/articles/${articleData._id}`} passHref>
              <a>
                <img src={cmsUrl} className={styles.image} alt={articleData.title} />
              </a>
            </Link>
          )}

          <br/><Divider className={styles.hlDivider}/>
        </>
      )}
    </div>
  );
};

export default Headline;


import { useRouter } from 'next/router';
import React from 'react';
import styles from "../styles/Headline.module.css";
import Divider from '@mui/material/Divider';

const Headline = ({ articleData, className, cmsUrl }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/news/${articleData._id}`);
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {articleData && (
        <>
          <div onClick={handleNavigation} className={styles.clickable}>
            <h2 className={styles.title}>{articleData.title}</h2>
            <p className={styles.description}>{articleData.description}</p>
            <img src={cmsUrl} className={styles.image} alt={articleData.title} />
          </div>
          <br/><Divider className={styles.hlDivider}/>
        </>
      )}
    </div>
  );
};

export default Headline;
const Headline = ({ data, className }) => {
  // ... existing state and useEffect hooks

  const router = useRouter(); // Use useRouter inside the component

  // Corrected click handler
  const handleNavigationClick = () => {
    if (articleData && articleData._id) {
      router.push(`/news/${articleData._id}`);
    }
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {articleData && (
        <>
          <h2 className={styles.title} onClick={handleNavigationClick}>{articleData.title}</h2>
          <p className={styles.description}>{articleData.description}</p>
          <img src={cmsUrl} className={styles.image} alt={article


<h2 className={`title ${getTitleClass()}`} onClick={handleNavigation}>{articleData.title}</h2>
