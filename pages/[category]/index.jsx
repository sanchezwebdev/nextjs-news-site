// pages/[category].js
import { React, useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Divider } from "@mui/material";
import fetchData from "../../api/fetchData";
import fetchRegister from '../../api/fetchRegister'
import fetchHeaderImages from "../../api/fetchHeaderImages";
import createSlug from "../../helpers/slug";
import useScrollPosition from "../../helpers/useScroll";
import toggleBodyScroll from "../../helpers/toggleBodyScroll";
import Header from "../../components/Header";
import Banner from "../../components/category/Banner";
import Menu from "../../components/Menu";
import CardMain from "../../components/category/CardMain";
import CardSecondary from "../../components/category/CardSecondary"
import Footer from '../../components/Footer'
import styles from "../../styles/Category.module.css";

const CategoryPage = ({ categoryArticles, headerImgUrl, headerCategory }) => {
    const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const scrollY = useScrollPosition();
  const dynamicMarginTop = Math.max(60 - scrollY, 0);
  const menuClassName = isChecked ? "active" : "";
  const overlayStyle = isChecked ? styles.overlayActive : styles.overlayInactive;

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

  
  return (
<div className={styles.body}>
  <div className={overlayStyle} style={{ marginTop: `${dynamicMarginTop}px` }}></div>
    <Menu isChecked={isChecked} className={menuClassName} />
    <Header isChecked={isChecked} onCheckboxChange={handleCheckboxChange} />
    <Divider style={{ marginBottom: "1px" }} className={styles.headerDivider}/>
    <Divider className={styles.headerDivider} />

    <div className={styles.containerMain}>
      <Banner data={{ headerImgUrl, headerCategory }} />

        <div className={styles.cardsContainer}>
          <div className={styles.cardMainContainer}>
              <CardMain className={`${styles.cardMain} ${styles.cardMain1}`} data={categoryArticles.cardMain1}/>
              <CardMain className={`${styles.cardMain} ${styles.cardMain2}`} data={categoryArticles.cardMain2}/>
              <CardMain className={`${styles.cardMain} ${styles.cardMain3}`} data={categoryArticles.cardMain3}/>
              <CardMain className={`${styles.cardMain} ${styles.cardMain4}`} data={categoryArticles.cardMain4}/>
              <CardMain className={`${styles.cardMain} ${styles.cardMain5}`} data={categoryArticles.cardMain5}/>
          </div>
          <div className={styles.cardSecondaryContainer}>
              <CardSecondary className={styles.cardSecondary1} data={categoryArticles.cardSecondary1}/>
              <CardSecondary className={styles.cardSecondary2} data={categoryArticles.cardSecondary2}/>
              <CardSecondary className={styles.cardSecondary3} data={categoryArticles.cardSecondary3}/>
              <CardSecondary className={styles.cardSecondary4} data={categoryArticles.cardSecondary4}/>
              <CardSecondary className={styles.cardSecondary5} data={categoryArticles.cardSecondary5}/>
              <CardSecondary className={styles.cardSecondary6} data={categoryArticles.cardSecondary6}/>
              <CardSecondary className={styles.cardSecondary7} data={categoryArticles.cardSecondary7}/>
              <CardSecondary className={styles.cardSecondary8} data={categoryArticles.cardSecondary8}/>
              <CardSecondary className={styles.cardSecondary9} data={categoryArticles.cardSecondary9}/>
              <CardSecondary className={styles.cardSecondary10} data={categoryArticles.cardSecondary10}/>
              <CardSecondary className={styles.cardSecondary11} data={categoryArticles.cardSecondary11}/>
              <CardSecondary className={styles.cardSecondary12} data={categoryArticles.cardSecondary12}/>
          </div>
        </div>

    </div>
        <Footer className={styles.footer}/>
  </div>
  )
};

export async function getStaticProps({ params }) {
  const categoryArticles = {}
  const { category } = params;
  const registerData = await fetchRegister();
  const categoryRegister = registerData.count.find(document => createSlug(document.category) === category);
  const data = await fetchData();
  const articles = data.count.filter((article) => createSlug(article.category) === category);
  const headerData = await fetchHeaderImages();
  const key = Object.keys(headerData.count[0]).find((k) => createSlug(k) === category);
  const imgObject = headerData.count[0];
  const imgId = getValueByKey(imgObject, key);

  function getValueByKey(imgObject, keyToMatch) {
      return imgObject[keyToMatch] || null;
    }
    
  const cmsResponse = await fetch(`https://cdn.contentful.com/spaces/vdnl4md1xpsv/assets/${imgId}?access_token=tB7F-mUWmn1dxWECof7Jnq7G_SfXUqreWmM6oG4KvK8`);
  const jsonResponse = await cmsResponse.json();
  const headerImgId = jsonResponse.fields.file.url;
  const headerImgUrl = `https:${headerImgId}?fm=webp`;
  const headerCategory = articles[0].category

  for (const article of articles) {
    if(article.imgId){
    const cmsResponse = await fetch(`https://cdn.contentful.com/spaces/vdnl4md1xpsv/assets/${article.imgId}?access_token=tB7F-mUWmn1dxWECof7Jnq7G_SfXUqreWmM6oG4KvK8`);
    const imageData = await cmsResponse.json();
    const cmsUrl = imageData.fields.file.url;
    const formatedCmsUrl = `https:${cmsUrl}?fm=webp&w=1500&h=750`;
    article.imgUrl = formatedCmsUrl;
    }
  }

  const positions = [
    "cardMain1", "cardMain2", "cardMain3", "cardMain4", "cardMain5",
    "cardSecondary1", "cardSecondary2", "cardSecondary3", "cardSecondary4", 
    "cardSecondary5", "cardSecondary6", "cardSecondary7", "cardSecondary8", 
    "cardSecondary9", "cardSecondary10", "cardSecondary11", "cardSecondary12"
  ];
  
  for (const position of positions) {
    if (categoryRegister[position]) {
    const id = categoryRegister[position];
    const articleData = articles.find(article => article._id === id);
    if (articleData) {
        categoryArticles[position] = articleData;
    }
  }
}
        
  return {
    props: {
      categoryArticles,
      categoryName: category,
      headerImgUrl,
      headerCategory
    },
  };
}

export async function getStaticPaths() {
  const fetchedData = await fetchData();
  const categories = new Set(
    fetchedData.count.map((article) => article.category)
  );

  const paths = Array.from(categories).map((category) => ({
    params: { category: createSlug(category)},
  }));

  return { paths, fallback: true };
}

export default CategoryPage;


