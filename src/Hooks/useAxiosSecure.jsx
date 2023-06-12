import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({ baseURL: 'http://localhost:5000' })

const useAxiosSecure = () => {

  const { exitUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `bearer ${token}`
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await exitUser();
          navigate('/login')
        }
        return Promise.reject(error);
      }
    );
  }, [exitUser, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;