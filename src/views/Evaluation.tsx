import React, {useEffect, useRef} from 'react'
import {useRecoilValue} from "recoil";
import {IAuthResponse, IStartupValuationResponse} from "../common/Types";
import evaluationAtom from "../api/evaluationAtom";
import authAtom from "../api/authAtom";
import {useNavigate} from "react-router-dom";
import Container from "../components/Container";
import {Button, Progress, Row} from "antd";
import {useReactToPrint} from "react-to-print";


const Evaluation: React.FC = () => {
    const auth = useRecoilValue<IAuthResponse>(authAtom)
    const navigate = useNavigate()
    const evaluation = useRecoilValue<IStartupValuationResponse | null>(evaluationAtom)
    const containerRef = useRef<HTMLDivElement>(null)
    const handlePrint = useReactToPrint({
        content: () => containerRef.current,
    })

    useEffect(() => {
        if (auth?.token?.accessToken === undefined) {
            navigate("/login")
        }
    }, [auth, navigate])


    return (
        <Container className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <Container ref={containerRef}>
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
            </Container>
            <Row className="flex justify-center mt-4">
                <Button
                    className="flex justify-center text-center relative rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handlePrint}
                >
                    Download PDF
                </Button>
            </Row>
        </Container>
    )
}

export default Evaluation