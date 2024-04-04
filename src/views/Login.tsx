import {LockOutlined} from "@mui/icons-material";
import {Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography,} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import apiService from "../api/ApiService";
import authAtom from "../api/authAtom";
import {useRecoilState} from "recoil";
import {IAuthResponse} from "../common/Types";
import Spinner from "../components/Spinner";

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
                <Container maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            mt: 20,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: "primary.light"}}>
                            <LockOutlined/>
                        </Avatar>
                        <Typography variant="h5">Login</Typography>
                        <Box sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />

                            <Button
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                            <Grid container justifyContent={"flex-end"}>
                                <Grid item>
                                    <Link to="/register">Don't have an account? Register</Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            )}
        </>);
};

export default Login;