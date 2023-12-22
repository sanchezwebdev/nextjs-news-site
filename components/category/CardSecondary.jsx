import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/CardSecondary.module.css'

const CardSecondary = ({data}) => {
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
    <div className={styles.containerMain}>
      secondary
    </div>
  )
}

export default CardSecondary
