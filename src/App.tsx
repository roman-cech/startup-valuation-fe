import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Logout from "./views/Logout";
import StartupSurvey from "./views/StartupSurvey";
import Evaluation from "./views/Evaluation";
import CustomHeader from "./views/Header";
import CustomFooter from "./views/Footer";
import {Layout} from "antd";
import {Content} from "antd/lib/layout/layout";

function App() {
    return (
        <BrowserRouter>
            <Layout style={{minHeight: '100vh', backgroundColor: '#ffffff'}}>
                <Suspense fallback={null}>
                    <CustomHeader/>
                    <Content>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/logout" element={<Logout/>}/>
                            <Route path="/startup/evaluate" element={<StartupSurvey/>}/>
                            <Route path="/startup/:jobId" element={<Evaluation/>}/>
                        </Routes>
                    </Content>
                    <CustomFooter/>
                </Suspense>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
