import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Logout from "./views/Logout";
import StartupSurvey from "./views/StartupSurvey";
import Evaluation from "./views/Evaluation";
import Container from '@mui/material/Container';
import {CssBaseline} from "@mui/material";

function App() {
    return (
        <Container maxWidth="md">
            <CssBaseline/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="/startup/evaluate" element={<StartupSurvey/>}/>
                    <Route path="/startup/:jobId" element={<Evaluation/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
