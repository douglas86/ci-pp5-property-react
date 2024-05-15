import axios from "axios";

axios.defaults.baseURL =
  "https://ci-pp5-property-api-d3a66dbd3b1c.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
