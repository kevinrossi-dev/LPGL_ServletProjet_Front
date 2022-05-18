import axios from "axios";
export const apiUrl = "http://localhost:8080";

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
