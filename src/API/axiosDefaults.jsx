import axios from "axios";

const AxiosDefaults = axios.create({
  baseURL: "https://ci-pp5-property-api-d3a66dbd3b1c.herokuapp.com/",
  withCredentials: true,
});

export default AxiosDefaults;
