import axios from 'axios';

async function fetchRegister() {
  const url = process.env.DB_REGISTER
  try {
    const register = await axios(`${url}`);
    return register.data
  } catch (error) {
    console.error(error);
  }
}
export default fetchRegister
