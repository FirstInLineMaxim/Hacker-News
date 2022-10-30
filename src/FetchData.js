
import axios from "axios";



 export const api = axios.create({
  baseURL : "http://hn.algolia.com/api/v1/search?query="
 });


 export const onSearch = async(input) => {
  const res = await api.get(`${input}`);
  return res.data
};
