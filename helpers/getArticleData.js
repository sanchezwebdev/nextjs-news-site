import fetchRegister from "../api/fetchRegister"

async function getArticleData(position, data) {
  const registerData = await fetchRegister()
  const register = registerData.count[0]
  const articleData = data.count.find(article => article._id === register[position]);

  return articleData;
}



export default getArticleData;
