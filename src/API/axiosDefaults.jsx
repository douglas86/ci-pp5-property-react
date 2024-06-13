import axios from "axios";

const localhost = "http://localhost:8000";
const heroku = "https://ci-pp5-property-api-d3a66dbd3b1c.herokuapp.com";

const AxiosDefaults = axios.create({
  baseURL: localhost,
  withCredentials: true,
});

export default AxiosDefaults;
