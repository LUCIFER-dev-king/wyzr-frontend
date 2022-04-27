import axios from "axios";
import { API } from "../../backend";

export const getBookInfo = (id) => {
  return axios
    .get(`${API}/book/${id}`, { withCredentials: true })
    .then((res) => {
      if (res.status === 200) {
        return res.data.item;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
