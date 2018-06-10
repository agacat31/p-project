import axios from 'axios';
import store from '@/store'

axios.defaults.headers.common.Authorization = 'Bearer ' + store.getters.token;
axios.defaults.baseURL = process.env.API_URL;

const REQUEST_TOKEN_URL = 'auth';

export function login(credentials) {
  return axios.post(REQUEST_TOKEN_URL, {
    username: credentials.username,
    password: credentials.password
  });
}