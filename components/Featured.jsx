import { useEffect, useState } from "react";
import styles from "../styles/Featured.module.css";
import Divider from '@mui/material/Divider';
import createSlug from "../helpers/slug";
import { useRouter } from 'next/router';


  const Featured = ({ data, className }) => {
  const router = useRouter();
  const [articleData, setArticleData] = useState(null);
  const [width, setWidth] = useState(null);

   // Effect hook to update and track the window width on resize.
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Generating a formatted CMS URL based on window width for responsive image fetching.
  const formattedCmsUrl = data && data.cmsUrl 
    ? `${data.cmsUrl}?fm=webp&w=${width < 740 ? 500 : 300}&h=${width < 740 ? 750 : 150}`
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

  return (
    <div className={`${styles.container} ${className}`}>
      {articleData && (
        <>
          <h2 className={styles.title} onClick={handleNavigation}>{articleData.title}</h2>
          <p className={styles.description} onClick={handleNavigation}>{articleData.description}</p>
          <img src={formattedCmsUrl} className={styles.image} alt="image" onClick={handleNavigation} loading="lazy"/>
          <Divider className={styles.divider}/>
        </>
      )}
    </div>
  );
};

export default Featured;
