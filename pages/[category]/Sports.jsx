// pages/[category].js
import { React, useState, useEffect } from "react";
import Banner from "../../components/category/Banner";
import CardMain from "../../components/category/CardMain";
import CardSecondary from "../../components/category/CardSecondary"
import styles from "../../styles/Category.module.css";

const Sports = ({ categoryArticles, headerImgUrl, headerCategory }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll("img"); // Select all images on the page

    const loadHandler = () => {
      const loadedImages = [...images].filter((img) => img.complete);

      if (loadedImages.length === images.length) {
        setImagesLoaded(true); // All images are loaded
      }
    };

    images.forEach((img) => {
      img.addEventListener("load", loadHandler);
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", loadHandler);
      });
    };
  }, []);
  
  if (!categoryArticles) {
    return <div>404 Page Not Found</div>;
  }
  return (

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

  )
};

export default Sports;


