import axios from "axios";
import { baseUrl } from "../constants/Strings";
export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: localStorage?.getItem("token") ?? "",
  },
});
