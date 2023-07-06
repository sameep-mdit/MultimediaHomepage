import { axiosInstance } from "../config/axiosInstance";
import { roles_enum } from "../constants/Enums";

export type loginPOST = {
  email: string;
  password: string;
};

export const loginAPI = (data: loginPOST) => axiosInstance.post("/login", data);

export type registerPOST = {
  name: string;
  email: string;
  password: string;
  role: roles_enum;
  dob: Date;
};
export const registerAPI = (data: registerPOST) =>
  axiosInstance.post("/sign-up", data);
