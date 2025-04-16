import axios from "axios";

const service = axios.create({
  baseURL: "https://weather-api167.p.rapidapi.com/api/weather",
  headers: {
    "Content-Type": "application/json",
  },
});

service.interceptors.request.use((config) => {
  if (!config.headers.requestType) {
    config.headers["X-RapidAPI-Key"] =
      "a240a7078bmsh2e1464212b3017dp1e5718jsnb5506cafa362";
    config.headers["X-RapidAPI-Host"] = "weather-api167.p.rapidapi.com";
  }
  return config;
});

service.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (err) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(err);
  }
);

export default service;
