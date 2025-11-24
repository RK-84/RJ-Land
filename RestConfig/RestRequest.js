import axios from "axios";
import SA from "./Server-Address.json";

export const Get = (url) => {
  return fetch(`${SA.Main_Server}${url}`);
};

export const Post = (url, body) => {
  
  return axios({
    method: "POST",
    url: `${SA.Main_Server}${url}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  });
};
