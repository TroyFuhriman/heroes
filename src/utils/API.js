import axios from "axios";

export default axios.create({
  baseURL: "https://superheroapi.com/api/10161442277955898/search",
  responseType: "json",
});
