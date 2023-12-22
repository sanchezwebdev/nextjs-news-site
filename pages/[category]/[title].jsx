// pages/[category]/[title].js
import fetchData from '../../api/fetchData';
import createSlug from '../../helpers/slug';

const News = ({ article }) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { category, title } = params;
  const fetchedData = await fetchData();
  const article = fetchedData.count.find((article) =>
  createSlug(article.category) === category && createSlug(article.title) === title
  );
  if (!article) {
    return { notFound: true };
  }

  return { props: { article } };
};

export const getStaticPaths = async () => {
    const fetchedData = await fetchData();
    const paths = fetchedData.count.map((article) => ({
      params: { category: createSlug(article.category), 
        title: createSlug(article.title) },
    }));
  
    return { paths, fallback: false };
  };
  

export default News;

