import axios from 'axios';

async function fetchHeaderImages() {
  const url = process.env.DB_HEADER_IMAGES
  try {
    const response = await axios(`${url}`);
     return response.data

  } catch (error) {
    console.error(error);
  }
}
export default fetchHeaderImages