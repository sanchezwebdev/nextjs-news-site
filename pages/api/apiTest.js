import axios from 'axios';

async function fetchData() {
  try {

    const response = await axios('https://us-east-1.aws.data.mongodb-api.com/app/data-chsij/endpoint/test');
  } catch (error) {
    console.error(error);
  }
}

// Call the function to fetch data
fetchData();
