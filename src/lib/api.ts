import axios from "axios";
import { apiClient } from "../utils/apiClient";
import { toast } from 'react-toastify';

export const getVariantDetails = async () => {
  try {
    const response = await apiClient({
      url: `/variants`,
      method: 'GET',
    })

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios-specific error handling
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error response:', error.response.data);
        //   if (error.response.status !== 401) toast.error(error.response?.data?.message)
        throw error
      } else if (error.request) {
        // Request was made but no response was received
        toast.error(error.request)
        console.error('Error request:', error.request);
        throw new Error('No response from server. Please try again later.');
      } else {
        // Something happened in setting up the request
        toast.error(error.message)
        console.error('Error message:', error.message);
        throw new Error(error.message);
      }
    } else {
      // Non-Axios error
      console.error('Unexpected error:', error);
      throw new Error('An unexpected error occurred.');
    }
  }
}


export const getCourseDetails = async () => {
  try {
    const response = await apiClient({
      url: ``,
      method: 'GET',
    })

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios-specific error handling
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error response:', error.response.data);
        //   if (error.response.status !== 401) toast.error(error.response?.data?.message)
        throw error
      } else if (error.request) {
        // Request was made but no response was received
        toast.error(error.request)
        console.error('Error request:', error.request);
        throw new Error('No response from server. Please try again later.');
      } else {
        // Something happened in setting up the request
        toast.error(error.message)
        console.error('Error message:', error.message);
        throw new Error(error.message);
      }
    } else {
      // Non-Axios error
      console.error('Unexpected error:', error);
      throw new Error('An unexpected error occurred.');
    }
  }
}