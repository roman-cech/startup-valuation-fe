import {useNavigate} from "react-router-dom";
import apiService from "../api/ApiService";
import authAtom from "../api/authAtom";
import {useRecoilState} from "recoil";
import React, {useEffect, useRef} from "react";
import axios from "axios";
import {IAuthResponse} from "../common/Types";
import Spinner from "./Spinner";

const Logout: React.FC = () => {
    const [auth, setAuth] = useRecoilState<IAuthResponse | null>(authAtom)
    const navigate = useNavigate()
    const isMounted = useRef(false)

    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true

            if (auth?.token?.accessToken !== undefined) {
                apiService.logout().then(_ => {
                    setAuth(null)
                    localStorage.removeItem('user')
                    axios.defaults.headers.common.Authorization = ''
                    navigate('/')
                }).catch(e => {
                    // Handle login error
                    console.log('Error: ', e)
                })
            }
        }
    }, [])

    return <Spinner/>
}

export default Logout