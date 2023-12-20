// pages/articles/[id].js

import fetchData from "../../api/fetchData";
import createSlug from "../../helpers/slug";

const News = ({ article }) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { title } = params; // 'id' here is actually the slug
  const fetchedData = await fetchData();
  const data = fetchedData.count;

  // Find the article by matching the slug
  const article = data.find((article) => createSlug(article.title) === title);

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  try {
    const fetchedData = await fetchData();
    const paths = fetchedData.count.map((article) => ({
      params: { title: createSlug(article.title) }, // Use slugs for paths
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export default News;
