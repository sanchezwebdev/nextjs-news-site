import axios from 'axios';

async function fetchRegister() {
  try {

    const register = await axios('https://us-east-1.aws.data.mongodb-api.com/app/data-chsij/endpoint/register');
    return register.data

  } catch (error) {
    console.error(error);
  }
}
export default fetchRegister
