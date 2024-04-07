import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import Logout from "./components/Logout";
import Survey from "./views/Survey";
import Evaluation from "./views/Evaluation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./views/PageNotFound";
import {Layout} from "antd";
import {Content} from "antd/lib/layout/layout";

function App() {
    return (
        <BrowserRouter>
            <Layout style={{minHeight: '100vh', backgroundColor: '#ffffff'}}>
                <Suspense fallback={null}>
                    <Header/>
                    <Content>
                        <Routes>
                            <Route path="*" element={<PageNotFound />} />
                            <Route path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/logout" element={<Logout/>}/>
                            <Route path="/startup/evaluate" element={<Survey/>}/>
                            <Route path="/startup/:jobId" element={<Evaluation/>}/>
                        </Routes>
                    </Content>
                    <Footer/>
                </Suspense>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
