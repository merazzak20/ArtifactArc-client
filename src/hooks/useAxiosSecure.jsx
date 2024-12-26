import axios from "axios";
import React, { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredntials: true,
});

const useAxiosSecure = () => {
  //   useEffect(() => {
  //     axiosInstance.interceptors.response.use((response) => {
  //       return response;
  //     }),
  //       (error) => {
  //         if (error.status === 401 || error.status === 403) {
  //           console.log("need to log out");
  //         }
  //         return Promise.reject(error);
  //       };
  //   }, []);
  return axiosInstance;
};

export default useAxiosSecure;
