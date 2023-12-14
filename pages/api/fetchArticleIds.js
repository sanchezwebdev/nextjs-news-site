// api/fetchArticleIds.js

export async function fetchArticleId(articleTitle) {
    try {
      const response = await fetch('/articleIds.json'); 
      const data = await response.json();
      const articleId = data[articleTitle]
      return articleId;
    } catch (error) {
      console.error('Error fetching article IDs:', error);
      throw error;
    }
  }

