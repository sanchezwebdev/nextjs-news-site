import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import styles from "../styles/Spotlight.module.css";
import Divider from '@mui/material/Divider';
import createSlug from "../helpers/slug"

const Spotlight = ({ data, className }) => {
  const router = useRouter();
  const [articleData, setArticleData] = useState(null);
  const formattedCmsUrl = data && data.cmsUrl 
  ? `${data.cmsUrl}?fm=webp&w=1400&h=1100`
  : null;

   // Effect hook to fetch article data.
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
  
   // Handler for navigating to the article's detailed page.
  const handleNavigation = () => {
    if (articleData && articleData.title) {
      const titleSlug = createSlug(articleData.title);
      const categorySlug = createSlug(articleData.category);
      router.push(`/${categorySlug}/${titleSlug}`);
    }
  };

  // Function to determine the title class based on the 'className' prop.
  const getTitleClass = () => {
    let titleClass = '';
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
          <img src={formattedCmsUrl} className={styles.image} alt="image" onClick={handleNavigation} loading="lazy"/>
        </div>
          <Divider className={styles.divider}/>
          </>
      )}
    </div>
  );
};

export default Spotlight;
