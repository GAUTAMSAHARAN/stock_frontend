import axios from 'axios';
// import { logout } from '../actions/userActions';

const UNAUTHORIZED = 401;

const apiClient = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
    },
});

// apiClient.interceptors.request.use(config => {
//     const token = localStorage.getItem('token');
//     config.headers.authorization = token ? `Bearer ${token}` : '';
//     return config;
// });

// apiClient.interceptors.response.use(
//     response => response,
//     error => {
//         const { status } = error.response;

//         if (status === UNAUTHORIZED) {
//             store.dispatch(logout());
//         }

//         return Promise.reject(error);
//     }
// );

export default apiClient;