import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '09d27547b867ff9e48927dcabccc221e';

export const apiCall = (url, query, data, headers, method) =>
  axios({
    method,
    url: `${API_URL}${url}?api_key=${API_KEY}${query}`,
    data,
    headers,
  });
