import axios from "axios";



const BASE_URL="http://localhost:8080/api";

export default (url) => axios.create({
  baseURL: BASE_URL + url,
  headers: {
    "Content-type": "application/json"
  },
});