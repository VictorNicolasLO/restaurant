import Axios from 'axios';

export const api = Axios.create({
  baseURL: 'http://35.239.118.144:3000',
});
