import { useEffect, useState } from "react";

import Header from "../components/Header";
import Article from "../components/Article";
import Headline from "../components/Headline";
import Featured from "../components/Featured";
import Trending from "../components/Trending";
import Spotlight from "../components/Spotlight"
import TitlePicture from "../components/TitlePicture"
import Footer from "../components/Footer"
import useDeviceSize from './helper/useDeviceSize'
import fetchData from "./api/fetchData";
import getArticleData from "./helper/getArticleData";
import styles from "../styles/Home.module.css";
import Divider from '@mui/material/Divider';

const Home = (props) => {

  const [width] = useDeviceSize();
  const isWideViewport = width > 740;

  return (
    <div className={styles.body}>
      
        <Header />
        <Divider style={{ marginBottom: '1px' }} className={styles.headerDivider}/>
        <Divider className={styles.headerDivider}/>
        
    

      <div className={styles.containerMain}>
          <div className={styles.containerTop}>

              <div className={styles.containerHeadline}>
                <Headline className={styles.headline} data={getArticleData("headline", props.data)} />
              </div>

            <Divider orientation="vertical" className={styles.vDivider}/>

              <div className={styles.containerFeatured}>
                  <h4 className={styles.topTitle}>Top Headlines</h4>
                  <Featured className={styles.featured1} data={getArticleData("featured1", props.data)} />
                  <Featured className={styles.featured2} data={getArticleData("featured2", props.data)} />
                  <Featured className={styles.featured3} data={getArticleData("featured3", props.data)} />
                {isWideViewport ? 
                  <Featured className={styles.featured4} data={getArticleData("featured4", props.data)} /> :
                  <Article className={styles.featured4} data={getArticleData("featured4", props.data)} />
                }
                <Featured className={styles.featured5} data={getArticleData("featured5", props.data)} />
              </div>
                
          </div>

        <div className={styles.containerTrending}>

          <h4 className={styles.trendingTitle}>Trending</h4>

            <Trending className={styles.trending1} data={getArticleData("trending1", props.data)} />
            <Trending className={styles.trending2} data={getArticleData("trending2", props.data)} />

            {isWideViewport ? 
            <Trending className={styles.trending3} data={getArticleData("trending3", props.data)} /> :
            <Article className={styles.trending3} data={getArticleData("trending3", props.data)} />
            }

            {isWideViewport ? 
            <Trending className={styles.trending4} data={getArticleData("trending4", props.data)} /> :
            <Article className={styles.trending4} data={getArticleData("trending4", props.data)} />
            } 

            <Trending className={styles.trending5} data={getArticleData("trending5", props.data)} />

            {isWideViewport ? 
            <Trending className={styles.trending6} data={getArticleData("trending6", props.data)} /> :
            <Article className={styles.trending6} data={getArticleData("trending6", props.data)} />
            } 
        </div>
        

        <div className={styles.containerSpotlight}>
          <h4 className={styles.spotlightTitle}>Spotlight</h4>
          <Spotlight className={styles.spotlight1}  data={getArticleData("spotlight1", props.data)}/>
          <Spotlight className={styles.spotlight2}  data={getArticleData("spotlight2", props.data)}/>
          <Spotlight className={styles.spotlight3}  data={getArticleData("spotlight3", props.data)}/>
        </div>

       <div className={styles.containerAdditional}>
          <h4 className={styles.additionalTitle}>More News</h4>
            <Article className={styles.additional1} data={getArticleData("additional1", props.data)} />
            <Article className={styles.additional2} data={getArticleData("additional2", props.data)} />

            {isWideViewport ? 
            <Article className={styles.additional3} data={getArticleData("additional3", props.data)} />:
            <TitlePicture className={styles.additional3} data={getArticleData("additional3", props.data)} />
            }
            <Article className={styles.additional4} data={getArticleData("additional4", props.data)} />
            <Article className={styles.additional5} data={getArticleData("additional5", props.data)} />
            {isWideViewport ? 
            <TitlePicture className={styles.additional6} data={getArticleData("additional6", props.data)} />:
            <Article className={styles.additional6} data={getArticleData("additional6", props.data)} />
            }
            <Article className={styles.additional7} data={getArticleData("additional7", props.data)} />

            {isWideViewport ? 
            <TitlePicture className={styles.additional8} data={getArticleData("additional8", props.data)} />:
            <Article className={styles.additional8} data={getArticleData("additional8", props.data)} />
            }
            
            <TitlePicture className={styles.additional9} data={getArticleData("additional9", props.data)} />
                    
            <Article className={styles.additional10} data={getArticleData("additional10", props.data)} />
            <Article className={styles.additional11} data={getArticleData("additional11", props.data)} />
            <Article className={styles.additional12} data={getArticleData("additional12", props.data)} />
        </div>

            

      </div>
      <Footer className={styles.footer}/>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const data = await fetchData();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error);
    return {
      props: {
        data: null, // or handle error state as needed
      },
    };
  }
}

export default Home;
