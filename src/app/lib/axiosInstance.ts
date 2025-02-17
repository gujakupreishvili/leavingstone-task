import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://nbggateway.leavingstone.club/api/m/",
});
