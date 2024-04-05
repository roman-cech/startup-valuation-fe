import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import apiService from "../api/ApiService";
import authAtom from "../api/authAtom";
import {useRecoilState} from "recoil";
import {IAuthResponse} from "../common/Types";
import Spinner from "../components/Spinner";
import {Button, Input} from "antd";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useRecoilState<IAuthResponse>(authAtom);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        //redirect to home if already logged in
        if (auth?.token?.refreshToken !== undefined) {
            navigate('/startup/evaluate');
        }
    }, [auth, navigate]);

    const handleLogin = async () => {
        apiService.login(email, password).then(res => {
            setLoading(true)
            setAuth(res.data);
            console.log('JWT: ', res.data)
            localStorage.setItem('user', JSON.stringify(res.data));
            localStorage.setItem('accessToken', res.data.token.accessToken);
            localStorage.setItem('refreshToken', res.data.token.refreshToken);
            setLoading(false)
            navigate('/')
        }).catch(e => {
            // Handle login error, TODO
            console.log('Error: ', e)
            navigate('/login')
        })
    };

    return (
        <>
            {loading ? (
                <Spinner/>
            ) : (
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <Button
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={handleLogin}
                                >
                                    Sign in
                                </Button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <Link to="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Start a 14 day free trial
                            </Link>
                        </p>
                    </div>
                </div>
            )}
        </>);
};

export default Login;