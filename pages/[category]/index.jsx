import { useState, useEffect, createContext } from "react";
import { useRouter } from 'next/router';
import fetchData from "../../api/fetchData";
import fetchRegister from '../../api/fetchRegister'
import fetchHeaderImages from "../../api/fetchHeaderImages";
import createSlug from "../../helpers/slug";
import toggleBodyScroll from "../../helpers/toggleBodyScroll";
import Layout from '../../components/category/Layout'
import LocalNews from "./LocalNews";
import California from "./California"
import Sports from "./Sports"
import ArtsEntertainment from "./ArtsEntertainment"
import BusinessEconomy from "./BusinessEconomy"
import Politics from "./Politics"
import LoadingModal from "../../components/LoadingModal";
export const ImageLoadContext = createContext();

const CategoryPage = ({ categoryArticles, headerImgUrl, headerCategory }) => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [isImageLoaded, setImageLoaded] = useState(false);
  
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

let CategoryComponent;
switch (router.query.category) {
  case 'local-news':
    CategoryComponent = LocalNews;
    break;
  case 'california':
    CategoryComponent = California;
    break;
  case 'arts-entertainment':
    CategoryComponent = ArtsEntertainment;
    break;
  case 'business-economy':
    CategoryComponent = BusinessEconomy;
    break;
  case 'sports':
    CategoryComponent = Sports;
    break;
  case 'politics':
    CategoryComponent = Politics;
    break;
  default:
    CategoryComponent = LocalNews; // Default component
}
  console.log(categoryArticles)
  return (
    <ImageLoadContext.Provider value={{ isImageLoaded, setImageLoaded }}>
    <Layout>
      <CategoryComponent
        categoryArticles={categoryArticles}
        headerImgUrl={headerImgUrl}
        headerCategory={headerCategory}
      />
    </Layout>
    </ImageLoadContext.Provider>
  )
};

export async function getStaticProps({ params }) {
  const data = await fetchData();
  const headerData = await fetchHeaderImages();
  const registerData = await fetchRegister();
  const filteredRegister = registerData.count.filter(document => (document.category !== 'home'));

  const { category } = params;
  const categoryRegister =  filteredRegister.find(document => 
    createSlug(document.category) === category 
    );
  
  const articles = await data.count.filter((article) => createSlug(article.category) === category);
  const key = Object.keys(headerData.count[0]).find((k) => createSlug(k) === category);
  const imgObject = headerData.count[0];
  const imgId = await getValueByKey(imgObject, key);
  const categoryArticles = {}

  function getValueByKey(imgObject, keyToMatch) {
      return imgObject[keyToMatch] || null;
    }

  const accessToken = process.env.ACCESS_TOKEN;
  const spaceId = process.env.SPACE_ID;  
    
  const cmsResponse = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/assets/${imgId}?access_token=${accessToken}`);
  const jsonResponse = await cmsResponse.json();
  const headerImgId = await jsonResponse.fields.file.url;
  const headerImgUrl = `https:${headerImgId}?fm=webp&w=1500&h=1500`;
  const headerCategory = articles[0].category

  for (const article of articles) {
    if(article.imgId){
    const imgId = article.imgId
    const cmsResponse = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/assets/${imgId}?access_token=${accessToken}`);
    const imageData = await cmsResponse.json();
    const cmsUrl = await imageData.fields.file.url;
    const formattedCmsUrl = `https:${cmsUrl}?fm=webp&w=500&h=500`;
    article.imgUrl = formattedCmsUrl;
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


