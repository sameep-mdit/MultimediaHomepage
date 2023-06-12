import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://192.168.1.92:3000",
  headers: {
    Authorization: localStorage?.getItem("token") ?? "",
  },
});
