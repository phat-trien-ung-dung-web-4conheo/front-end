import axios from "axios";

const BASE_URL = "https://backend4conheo.onrender.com/api/";
// const BASE_URL = "https://webdevis207.up.railway.app/api";
// =======
// const BASE_URL = "http://localhost:3003/api/";
// // const BASE_URL = "https://webdevis207.herokuapp.com/api";
// >>>>>>> feature/user/login

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
