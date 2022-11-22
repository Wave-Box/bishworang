import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://bishworang.website/admin/api/v1/',
    // baseURL: 'https://wavebox.site/admin/api/v1/',
    timeout: 10000

});


export const token = JSON.parse(localStorage.getItem("persist:root"))?.auth ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.auth)?.user?.token : null

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
    // Do something before request is sent
    // config.params = config.params || {}
    // config.params['auth'] = 'iazadur'
    // console.log(config);
    // console.log(config.headers);
    config.headers['Authorization'] = token ? 'Bearer ' + token : null
    return config;
});

export default axiosInstance