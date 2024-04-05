import React, {useEffect} from 'react'
import {useRecoilValue} from "recoil";
import {IAuthResponse, IStartupValuationResponse} from "../common/Types";
import evaluationAtom from "../api/evaluationAtom";
import authAtom from "../api/authAtom";
import {useNavigate} from "react-router-dom";
import Spinner from "../components/Spinner";


const Evaluation: React.FC = () => {
    const auth = useRecoilValue<IAuthResponse>(authAtom);
    const navigate = useNavigate();

    const evaluation = useRecoilValue<IStartupValuationResponse | null>(evaluationAtom)

    useEffect(() => {
        if (auth?.token?.accessToken === undefined) {
            navigate("/login")
        }
    }, [auth, navigate]);

    if (!evaluation) return <Spinner/>;

    return (
        <div>
            <p>{evaluation.rate}</p>
            <p>{evaluation.explanation}</p>
        </div>
    )
}

export default Evaluation;