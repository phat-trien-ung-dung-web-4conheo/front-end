import axios from "axios";

const BASE_URL = "https://back-end-webdevis207.up.railway.app/api/";
// const BASE_URL = "https://webdevis207.herokuapp.com/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
