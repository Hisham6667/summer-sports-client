import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({ baseURL: 'https://summer-sports-server.vercel.app' })

const useAxiosSecure = () => {

  const { exitUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.authorization = `bearer ${token}`
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // await exitUser();
          // navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [exitUser, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;