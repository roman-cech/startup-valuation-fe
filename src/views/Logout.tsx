import {useNavigate} from "react-router-dom";
import apiService from "../api/ApiService";
import authAtom from "../api/authAtom";
import {useRecoilState} from "recoil";
import React, {useEffect} from "react";
import axios from "axios";
import {IAuthResponse} from "../common/Types";
import Spinner from "../components/Spinner";

const Logout: React.FC = () => {
    const [auth, setAuth] = useRecoilState<IAuthResponse | null>(authAtom);
    const navigate = useNavigate();

    useEffect(() => {
        if(auth?.token?.accessToken !== undefined) {
            apiService.logout(auth.token.accessToken).then(_ => {
                setAuth(null);
                localStorage.removeItem('user');
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                axios.defaults.headers.common.Authorization = '';
                navigate('/');
            }).catch(e => {
                // Handle login error, TODO
                console.log('Error: ', e)
            })
        }
    }, [auth, setAuth, navigate]);

    return <Spinner/>;
}

export default Logout