import axios from "axios";
import { API } from "../../backend";

export const searchBooks = (bookName) => {
  return axios({
    method: "post",
    url: `${API}/search`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: JSON.stringify(bookName),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.data.items;
      }
    })
    .catch((err) => console.log(err));
};
