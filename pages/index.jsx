import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import fetchRegister from "../api/fetchRegister";
import fetchData from '../api/fetchData'
import useDeviceSize from '../helpers/useDeviceSize';
import toggleBodyScroll from '../helpers/toggleBodyScroll';
import Layout from '../components/category/Layout'
import Article from "../components/Article";
import Headline from "../components/Headline";
import Featured from "../components/Featured";
import Trending from "../components/Trending";
import Spotlight from "../components/Spotlight";
import TitlePicture from "../components/TitlePicture";
import styles from "../styles/Home.module.css";
import Divider from '@mui/material/Divider';

export default function Home({ articles }) {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [width] = useDeviceSize();
  const isWideViewport = width > 740;

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
  <Layout>
      <div className={styles.containerMain}>
        <div className={styles.containerTop}>
          <div className={styles.containerHeadline}>
            <Headline className={styles.headline} data={articles.headline} />
          </div>

          <Divider orientation="vertical" className={styles.vDivider}/>

          <div className={styles.containerFeatured}>
            <h4 className={styles.topTitle}>Top Headlines</h4>
            <Featured className={styles.featured1} data={articles.featured1} />
            <Featured className={styles.featured2} data={articles.featured2} />
            <Featured className={styles.featured3} data={articles.featured3} />
            {isWideViewport ? 
              <Featured className={styles.featured4} data={articles.featured4} /> :
              <Article className={styles.featured4} data={articles.featured4} />
            }
            <Featured className={styles.featured5} data={articles.featured5} />
          </div>
        </div>

        <div className={styles.containerTrending}>
          <h4 className={styles.trendingTitle}>Trending</h4>
          <Trending className={styles.trending1} data={articles.trending1} />
          <Trending className={styles.trending2} data={articles.trending2} />
          {isWideViewport ? 
            <Trending className={styles.trending3} data={articles.trending3} /> :
            <Article className={styles.trending3} data={articles.trending3} />
          }
          {isWideViewport ? 
            <Trending className={styles.trending4} data={articles.trending4} /> :
            <Article className={styles.trending4} data={articles.trending4} />
          } 
          <Trending className={styles.trending5} data={articles.trending5} />
          {isWideViewport ? 
            <Trending className={styles.trending6} data={articles.trending6} /> :
            <Article className={styles.trending6} data={articles.trending6} />
          } 
        </div>
        
        <div className={styles.containerSpotlight}>
          <h4 className={styles.spotlightTitle}>Spotlight</h4>
          <Spotlight className={styles.spotlight1}  data={articles.spotlight1}/>
          <Spotlight className={styles.spotlight2}  data={articles.spotlight2}/>
          <Spotlight className={styles.spotlight3}  data={articles.spotlight3}/>
        </div>

        <div className={styles.containerAdditional}>
          <h4 className={styles.additionalTitle}>More News</h4>
          <Article className={styles.additional1} data={articles.additional1} />
          <Article className={styles.additional2} data={articles.additional2} />
          {isWideViewport ? 
            <Article className={styles.additional3} data={articles.additional3} /> :
            <TitlePicture className={styles.additional3} data={articles.additional3} />
          }
          <Article className={styles.additional4} data={articles.additional4} />
          <Article className={styles.additional5} data={articles.additional5} />
          {isWideViewport ? 
            <TitlePicture className={styles.additional6} data={articles.additional6} /> :
            <Article className={styles.additional6} data={articles.additional6} />
          }
          <Article className={styles.additional7} data={articles.additional7} />
          {isWideViewport ? 
            <TitlePicture className={styles.additional8} data={articles.additional8} /> :
            <Article className={styles.additional8} data={articles.additional8} />
          }
          <TitlePicture className={styles.additional9} data={articles.additional9} />
          <Article className={styles.additional10} data={articles.additional10} />
          <Article className={styles.additional11} data={articles.additional11} />
          <Article className={styles.additional12} data={articles.additional12} />
        </div>
      </div>
      </Layout>
  );
};

// Next.js function to fetch data.
export async function getStaticProps() {
  try {
    const data = await fetchData();
    const registerData = await fetchRegister();
    const homeRegister = registerData.count.find(document => document.category ==='home');
    const positions = ["headline", "featured1", "featured2", "featured3", "featured4", "featured5", "trending1", "trending2", "trending3", "trending4", "trending5", "trending6", "spotlight1", "spotlight2", "spotlight3", "additional1", "additional2", "additional3", "additional4", "additional5", "additional6", "additional7", "additional8", "additional9", "additional10", "additional11", "additional12"];
    const articles = {};

    // Map each article position to its data.
    for (const position of positions) {
      const articleData = data.count.find(article => article._id === homeRegister[position]);
      articles[position] = articleData;

      // Fetch and set the CMS URL for each article's image.
      if (articleData && articleData.imgId) {
        const cmsResponse = await fetch(
          `https://cdn.contentful.com/spaces/vdnl4md1xpsv/assets/${articleData.imgId}?access_token=tB7F-mUWmn1dxWECof7Jnq7G_SfXUqreWmM6oG4KvK8`
        );
        const imageData = await cmsResponse.json();
        articleData.cmsUrl = imageData.fields.file.url; 
      }
    }

    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        articles: null,
      },
    };
  }
}