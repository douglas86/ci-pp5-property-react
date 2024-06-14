import axios from "axios";
import Cookies from "js-cookie";

const localhost = "http://localhost:8000";
const heroku = "https://ci-pp5-property-api-d3a66dbd3b1c.herokuapp.com";
const access = Cookies.get("auth-token");

const AxiosInstance = axios.create({
  baseURL: localhost,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${access}`,
  },
});

export default AxiosInstance;
