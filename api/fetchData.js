import axios from 'axios';

  //Fetch request to the database 
async function fetchData() {
  const url = process.env.DB_URL
  try {
    const response = await axios(`${url}`);
     return response.data
  } catch (error) {
    console.error(error);
  }
}
export default fetchData