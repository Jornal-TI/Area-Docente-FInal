import axios from "axios";

const consumoApi = axios.create({
  baseURL: "http://10.23.49.27:3001"
});

export default consumoApi;