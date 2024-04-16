
import {useState, useEffect } from "react";
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
  // Generating a formatted CMS URL for the article image.
  const url = article.cmsUrl
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const scrollY = useScrollPosition();
  const dynamicMarginTop = Math.max(60 - scrollY, 0); 
  // Conditional class name based on whether the menu is checked (active/inactive).
  const menuClassName = isChecked ? 'active' : '';
  // Conditional styling for the overlay based on whether the menu is checked.
  const overlayStyle = isChecked ? styles.overlayActive : styles.overlayInactive;
  // Splits the article content by paragraphs.
  const paragraphs = article.content.split("\\\\n\\\\n")
 

  // Handler for checkbox state change.
  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
    
  };

  // Effect for toggling body scroll based on the isChecked state.
  useEffect(() => {
    toggleBodyScroll(isChecked);
  }, [isChecked]);

  // Effect for handling route changes, closing the menu when starting navigation.
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
              <img src={url} alt="image" className={styles.image}/>
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

// Next.js function to fetch data at build time for each static path.
export const getStaticProps = async ({ params }) => {
  const { category, title } = params;
  const data = await fetchData();
  const article = data.count.find(
    (article) =>
      createSlug(article.category) === category &&
      createSlug(article.title) === title
  );

  const accessToken = process.env.ACCESS_TOKEN;
  const spaceId = process.env.SPACE_ID;

  // If the article has an imgId, fetch the image data from CMS.
  if (article && article.imgId) {
    const imgId = article.imgId
    const cmsResponse = await fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/assets/${imgId}?access_token=${accessToken}`
    );
    const imageData = await cmsResponse.json();
    const cmsUrl = imageData.fields.file.url; 
    const formattedCmsUrl = `https:${cmsUrl}?fm=webp&w=750&h=750`;
    article.cmsUrl = formattedCmsUrl
   
  }
  
  if (!article) {
    return { notFound: true };
  }

  // Return the article as a prop to the page component.
  return { props: { article } };
};

// Next.js function to specify dynamic routes to pre-render based on fetched data.
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
