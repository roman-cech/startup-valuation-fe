import axios from 'axios';
import {IToken} from "../common/Types";
import {getAccessTokenFromUser, getExpirationDateFromUser, getRefreshTokenFromUser, updateUserToken} from "../common/Utils";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
        'Content-type': 'application/json',
    }
})

let isRefreshing = false;

async function refreshToken() {
    try {
        const expirationDate = new Date(parseInt(getExpirationDateFromUser()))
        if (expirationDate && expirationDate.getTime() < Date.now()) {
            const response = await axiosInstance.post<IToken>(
                `/rest/v1/auth/refresh?token=${getRefreshTokenFromUser()}`
            )
            updateUserToken(response.data.accessToken, response.data.refreshToken, response.data.expirationDate)
        }
    } catch (e) {
        console.error(e)
    }
}

axiosInstance.interceptors.response.use((response) => response, (error) => {
    const {config, response: {status}} = error
    const originalRequest = config;
    if (status === 500) {
        if (!isRefreshing) {
            isRefreshing = true
            refreshToken()
                .then(() => {
                    isRefreshing = false
                })
                .catch(() => {
                    isRefreshing = false
                })
        }

        return new Promise((resolve) => {
            const retry = () => {
                if (!isRefreshing) {
                    originalRequest.headers.Authorization = `Bearer ${getAccessTokenFromUser()}`
                    resolve(axios(originalRequest));
                } else {
                    setTimeout(retry, 1000);
                }
            };
            retry();
        });
    }
    return Promise.reject(error);
})

export default axiosInstance
