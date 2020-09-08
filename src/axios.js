import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-mern-backend2.herokuapp.com",
});

export default instance;
