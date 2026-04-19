const { default: axios } = require("axios");

const base_url = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: base_url,
  withCredentials: true,
});

api.interceptors.request.use(
  (request) => {
    // code send token any request to backend
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // code generate new token if rejected response
    return Promise.reject(error);
  },
);
