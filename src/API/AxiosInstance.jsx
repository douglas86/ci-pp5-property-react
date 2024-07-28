import axios from "axios";
import Cookies from "js-cookie";

const heroku = "https://ci-pp5-property-api-958077e8a5b4.herokuapp.com";
const access = Cookies.get("auth-token");
const csrf = Cookies.get("csrftoken");
const refresh = Cookies.get("refresh-token");

const AxiosInstance = axios.create({
  baseURL: heroku,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${access}`,
    "X-csrftoken": csrf,
    refresh: refresh,
  },
});

export default AxiosInstance;
