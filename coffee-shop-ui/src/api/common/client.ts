import axios, {type AxiosInstance, type AxiosRequestConfig} from 'axios'

//create axios instance so we can share config/logic globally
export const createClient = (clientConfig: AxiosRequestConfig = {}): AxiosInstance => {
    const client = axios.create(clientConfig);

    client.interceptors.request = axios.interceptors.request;
    client.interceptors.response = axios.interceptors.response;

    client.interceptors.request.use(
        config => 
            //apply pre-processing before request is sent
            config,
        error =>
            //do something with request error
            Promise.reject(error),        
    );

    client.interceptors.response.use(
        response =>
            //apply post-processing on response data 
            response,
        error =>
            //do something with response error 
            Promise.reject(error),        
    );

    return client;
};