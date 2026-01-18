import type { AxiosInstance } from 'axios';

import axios from 'axios';

const baseURL = import.meta.env.DEV
  ? '/api'
  : `${import.meta.env.VITE_SERVER_URL}/api`;

export const api: AxiosInstance = axios.create({
  baseURL,
});
