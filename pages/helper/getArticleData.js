import { fetchArticleId } from "../api/fetchArticleIds";

async function getArticleData(articleId, data) {
  

  const id = await fetchArticleId(articleId);
  
  // Assuming data is an object with article properties
  const articleData = data.count.find(article => article._id === id)

//   console.log("article data", articleData);
  return articleData;
}

export default getArticleData;
