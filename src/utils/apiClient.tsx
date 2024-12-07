import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch'
});