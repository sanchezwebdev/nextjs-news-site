// pages/[category]/[title].js
import {React, useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Divider } from "@mui/material";
import fetchData from "../../api/fetchData";
import useScrollPosition from "../../helpers/useScroll";
import toggleBodyScroll from "../../helpers/toggleBodyScroll";
import createSlug from "../../helpers/slug";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from "../../styles/ArticlePage.module.css";

const ArticlePage = ({ article }) => {
  const router = useRouter();
  const [isImageLoaded, setIsImageLoaded] = useState(false); 
  const [isChecked, setIsChecked] = useState(false);
  const scrollY = useScrollPosition();
  const dynamicMarginTop = Math.max(60 - scrollY, 0); 
  const menuClassName = isChecked ? 'active' : '';
  const overlayStyle = isChecked ? styles.overlayActive : styles.overlayInactive;
  const paragraphs = article.content.split("\\\\n\\\\n")
  const formatedCmsUrl = article && article.cmsUrl 
  ? `${article.cmsUrl}?fm=webp`
  : null;

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
    
  };

  useEffect(() => {
    toggleBodyScroll(isChecked);
  }, [isChecked]);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsChecked(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };


  return (
    <div className = {styles.body}>
        <div className={overlayStyle} style={{ marginTop: `${dynamicMarginTop}px`}}></div>
        <Menu isChecked={isChecked} className={menuClassName}/>
        <Header isChecked={isChecked} onCheckboxChange={handleCheckboxChange} />
        <Divider style={{ marginBottom: '1px' }} className={styles.headerDivider}/>
        <Divider className={styles.headerDivider}/>
       
        <div className={styles.containerMain}>
        <h1 className={styles.title}>{article.title}</h1> 
        <p className={styles.description}>{article.description}</p>
            <div className={styles.grid}>
              <img src={formatedCmsUrl} alt="" className={styles.image} onLoad={handleImageLoad} />
              <div className={styles.content}>
                {paragraphs.map((paragraph, index) => (
                  <div key={index} className={styles.paragraph}>{paragraph}<br/><br/></div>
                ))}
              </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { category, title } = params;
  const data = await fetchData();
  const article = data.count.find(
    (article) =>
      createSlug(article.category) === category &&
      createSlug(article.title) === title
  );

  if (article && article.imgId) {
    const cmsResponse = await fetch(
      `https://cdn.contentful.com/spaces/vdnl4md1xpsv/assets/${article.imgId}?access_token=tB7F-mUWmn1dxWECof7Jnq7G_SfXUqreWmM6oG4KvK8`
    );
    const imageData = await cmsResponse.json();
    article.cmsUrl = imageData.fields.file.url; 
  }
  
  if (!article) {
    return { notFound: true };
  }

  return { props: { article } };
};


export const getStaticPaths = async () => {
  const fetchedData = await fetchData();
  const paths = fetchedData.count.map((article) => ({
    params: {
      category: createSlug(article.category),
      title: createSlug(article.title),
    },
  }));

  return { paths, fallback: false };
};

export default ArticlePage;
