import axios from 'axios';

const base = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_MOVIE_DB_API_KEY,
  },
});

export default base;
