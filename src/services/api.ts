import axios from "axios";

interface Request {
  endpoint: string;
  method?: "get" | "post" | "delete" | "put";
  params?: object;
  data?: object;
}

const baseURL = process.env.REACT_APP_API;

const urlBuilder = (endpoint: string) => `${baseURL}/${endpoint}`;

const request = ({ endpoint, method = "get", data, params }: Request) => {
  return axios.request({
    method,
    url: urlBuilder(endpoint),
    ...(params && { params }),
    ...(data && { data }),
  });
};

export const get = async (endpoint: string, params?: object) => {
  return request({ endpoint, params });
};

export const post = async (endpoint: string, data: object) => {
  return request({ endpoint, data, method: "post" });
};
