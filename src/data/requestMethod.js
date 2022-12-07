import axios from "axios";

const BASE_URL = "http://localhost:3003/api/";
// const BASE_URL = "https://webdevis207.herokuapp.com/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
