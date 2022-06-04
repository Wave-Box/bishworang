import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://bishworang.wavebox.net/api/v1/',
    timeout: 10000

});

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
    // Do something before request is sent
    // config.params = config.params || {}
    // config.params['auth'] = 'iazadur'
    // console.log(config);
    // console.log(config.headers);
    return config;
});

export default axiosInstance