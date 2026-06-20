import axios from "axios";

const API = axios.create({
  baseURL:
    "https://e-commerceweb-5b2y.onrender.com/products",
});

API.interceptors.request.use(
  (req) => {

    const token =
      localStorage.getItem(
        "token"
      );

    if (token) {

      req.headers.Authorization =
        `Bearer ${token}`;
    }

    return req;
  }
);

export default API;