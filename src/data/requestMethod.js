import axios from "axios";

const BASE_URL = "https://webdevis207.herokuapp.com/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
