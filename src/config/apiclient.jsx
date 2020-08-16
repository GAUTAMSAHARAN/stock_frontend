import axios from 'axios';
// import { logout } from '../actions/userActions';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
});

// apiClient.interceptors.request.use(config => {
//     const token = sessionStorage.getItem('token');
//     config.headers.authorization = `Token ${sessionStorage.getItem('token')}`;
//     return config;
// });

export default apiClient;