// pages/articles/[id].js
import fetchData from "../../api/fetchData";

const News = ({ article, data, fetchedData }) => {
    console.log(fetchedData)
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  console.log(id)
  const fetchedData = await fetchData(); 
  const data = Array.isArray(fetchedData.count) ? fetchedData.count : [];
  const article = data.find((article) => article._id === id);
  return {
    props: {
        id,
      article,
      data,
    },
  };
};

export const getStaticPaths = async () => {
  try {
    const fetchedData = await fetchData(); 
    const paths = fetchedData.count.map((article) => ({
      params: { id: article._id },
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
