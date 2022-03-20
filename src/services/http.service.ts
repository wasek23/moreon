import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 5000
}

const instance: AxiosInstance = axios.create(axiosConfig);

const authToken = JSON.parse(JSON.parse(localStorage.getItem('persist:root') || '')?.auth)?.data?.token

// Request interceptors
instance.interceptors.request.use(
    function (config) {
        // Do something before request...

        return { ...config, headers: { Authorization: authToken } };
    },
    function (error) {
        return Promise.reject(error);
    }
);

class Request {
    async get(url: string): Promise<AxiosResponse> {
        return instance.get(url).then(res => res.data);
    }
    async post(url: string, body: any): Promise<AxiosResponse> { // !! change any to proper type
        return instance.post(url, body).then(res => res.data);
    }
    async update(url: string, body: any): Promise<AxiosResponse> { // !! change any to proper type
        return instance.patch(url, body).then(res => res.data);
    }
    async delete(url: string): Promise<AxiosResponse> {
        return instance.patch(url).then(res => res.data);
    }
}

const httpRequest = new Request();
export default httpRequest;