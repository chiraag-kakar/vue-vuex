import axios from "axios";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const apiClient = axios.create({
  baseURL: "http://18.177.140.79:8080/",
  headers: {
    "Content-type": "application/json",
    // "Access-Control-Allow-Origin":"*"
  },
});

export default apiClient;