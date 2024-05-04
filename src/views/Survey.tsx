import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useRecoilState, useRecoilValue} from "recoil";
import ApiService from "../api/ApiService";
import authAtom from "../api/authAtom";
import evaluationAtom from "../api/evaluationAtom";
import {IAuthResponse, IStartupValuationResponse} from "../common/Types";
import {Model} from "survey-core";
import surveyJSON from "../common/SurveyJSON";
import {Survey} from "survey-react-ui";
import {transformToEvidences} from "../common/Util";
import * as SurveyTheme from "survey-core/themes";
import Spinner from "../components/Spinner";
import Container from "../components/Container";
import 'survey-core/defaultV2.min.css';


const CustomSurvey: React.FC = () => {
    const auth = useRecoilValue<IAuthResponse>(authAtom)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [, setEvaluation] = useRecoilState<IStartupValuationResponse | null>(evaluationAtom)
    const survey = useRef(new Model(surveyJSON)).current

    survey.applyTheme(SurveyTheme.PlainLight)

    const handleSurveyComplete = async (sender: { data: any }) => {
        setLoading(true);
        let jobId, evaluation = null;
        try {
            const evaluateResponse = await ApiService.evaluate(transformToEvidences(sender.data));
            jobId = evaluateResponse.data;

            const evaluationResponse = await ApiService.getEvaluation(jobId);
            evaluation = evaluationResponse.data.evaluation;
        } catch (error) {
            console.log('Error:', error);
        }

        setEvaluation(evaluation);
        setLoading(false);
        navigate(`/startup/${jobId}`);
    };

    survey.onComplete.add(handleSurveyComplete)

    useEffect(() => {
        if (auth?.token?.accessToken === undefined) {
            navigate("/login")
        }
    }, [auth, navigate])

    if (loading) return <Spinner/>

    return (
        <Container className="flex items-center flex-1">
            <Survey
                model={survey}
                id="surveyContainer"
            />
        </Container>
    )
}

export default CustomSurvey