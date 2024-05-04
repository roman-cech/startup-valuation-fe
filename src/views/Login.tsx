import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import ApiService from "../api/ApiService";
import authAtom from "../api/authAtom";
import {useRecoilState} from "recoil";
import {IAuthResponse} from "../common/Types";
import {Button, Form, Input, Row, Typography} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import Spinner from "../components/Spinner";

const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useRecoilState<IAuthResponse>(authAtom)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        //redirect to home if already logged in
        if (auth?.token?.refreshToken !== undefined) {
            navigate('/startup/evaluate')
        }
    }, [auth, navigate])


    const handleLogin = async () => {
        setLoading(true);
        ApiService.login(email, password).then(res => {
            setAuth(res.data)
            localStorage.setItem('user', JSON.stringify(res.data))
            setLoading(false);
            navigate('/startup/evaluate')
        }).catch(e => {
            // Handle login error, TODO
            console.log('Error: ', e)
            setLoading(false);
            navigate('/login')
        })
    }

    if (loading) return <Spinner/>

    return (
        <Row className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <Row className="flex justify-center items-center sm:mx-auto sm:w-full sm:max-w-sm">
                <MenuOutlined className="text-2xl mr-2 lg:mr-4" />
                <Typography.Text className="text-2xl font-semibold leading-6 text-gray-900">
                    Seed<Typography.Text className="text-blue-600">Scout</Typography.Text>
                </Typography.Text>
            </Row>
            <Row className="flex justify-center sm:mx-auto sm:w-full sm:max-w-sm">
                <Typography.Title level={2} className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Log in to your account
                </Typography.Title>
            </Row>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <Form className="space-y-6" action="#" method="POST">
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'Please enter a valid email address',
                            },
                            {
                                required: true,
                                message: 'Please enter your email',
                            },
                        ]}>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>

                    <Row justify="center">
                        <Button
                            className="flex w-full justify-center text-center relative rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={handleLogin}
                        >
                            Sign in
                        </Button>
                    </Row>
                </Form>

                <Typography.Paragraph className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link to="#" className="font-semibold leading-6 text-blue-600 hover:text-indigo-500">
                        Start a 14 day free trial
                    </Link>
                </Typography.Paragraph>
            </div>
            <Typography.Paragraph className="text-center text-sm text-gray-500 mt-4">
                You need to be logged in to take advantage of our services.
            </Typography.Paragraph>
        </Row>
    )
}

export default Login