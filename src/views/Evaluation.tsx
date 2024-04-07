import React, {useEffect} from 'react'
import {useRecoilValue} from "recoil";
import {IAuthResponse, IStartupValuationResponse} from "../common/Types";
import evaluationAtom from "../api/evaluationAtom";
import authAtom from "../api/authAtom";
import {useNavigate} from "react-router-dom";
import Container from "../components/Container";
import DownloadPdfButton from "../components/DownloadPdfButton";
import {Progress, Row} from "antd";


const Evaluation: React.FC = () => {
    const auth = useRecoilValue<IAuthResponse>(authAtom);
    const navigate = useNavigate();

    const evaluation = useRecoilValue<IStartupValuationResponse | null>(evaluationAtom);

    useEffect(() => {
        if (auth?.token?.accessToken === undefined) {
            navigate("/login")
        }
    }, [auth, navigate]);


    return (
        <Container className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <Row className="flex justify-center items-center mx-auto w-full max-w-sm">
                <Progress
                    className="p-6"
                    strokeColor="bg-blue-600"
                    type="circle"
                    percent={evaluation?.rate}
                />
            </Row>
            <Row className="flex justify-center items-center mx-auto w-full max-w-sm">
                {evaluation?.explanation}
            </Row>
            <Row justify="center" className="mt-4">
                <DownloadPdfButton rate={evaluation?.rate || 0} explanation={evaluation?.explanation || ''} />
            </Row>
        </Container>
    )
}

export default Evaluation