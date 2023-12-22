import axios from 'axios';

async function fetchHeaderImages() {
  try {

    const response = await axios('https://us-east-1.aws.data.mongodb-api.com/app/data-chsij/endpoint/header_images');
    response.data.count.forEach(document => {
    })
     return response.data

  } catch (error) {
    console.error(error);
  }
}
export default fetchHeaderImages