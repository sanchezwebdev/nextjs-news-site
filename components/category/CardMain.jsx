import { React, useState, useEffect } from "react";
// import { useRouter } from 'next/router';
import styles from "../../styles/CardMain.module.css";

const CardMain = ({ data }) => {
  console.log(data);
  // const router = useRouter();
  // const [articleData, setArticleData] = useState(null);
  // const formatedCmsUrl = data && data.cmsUrl
  // ? `${data.cmsUrl}?fm=webp&w=1400&h=1100`
  // : null;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const resolvedData = await data;
  //       setArticleData(resolvedData);
  //     } catch (error) {
  //       console.error("Error fetching article data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [data]);

  const handleNavigation = () => {
    if (articleData && articleData.title) {
      const titleSlug = createSlug(articleData.title);
      const categorySlug = createSlug(articleData.category);
      router.push(`/${categorySlug}/${titleSlug}`);
    }
  };

  return (
    <div className={styles.containerMain}>
      <div className={styles.title}>{data.title}</div>
      <img src={data.imgUrl} alt="" className={styles.image} />
      <div className={styles.description}>{data.description}</div>
    </div>
  );
};

export default CardMain;
