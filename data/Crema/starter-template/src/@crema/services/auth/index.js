import axios from 'axios';

const jwtAxios = axios.create({
  baseURL: `http://localhost:8000/api/`, //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
});
export default jwtAxios;
