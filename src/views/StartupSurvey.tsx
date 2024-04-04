import React, {useCallback, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useRecoilState, useRecoilValue} from "recoil";
import apiService from "../api/ApiService";
import authAtom from "../api/authAtom";
import evaluationAtom from "../api/evaluationAtom";
import {IAuthResponse, IStartupValuationResponse} from "../common/Types";
import {Model} from "survey-core";
import surveyJSON from "../common/SurveyJSON";
import {Survey} from "survey-react-ui";
import {transformToEvidences} from "../common/Utils";
import * as SurveyTheme from "survey-core/themes";
import Spinner from "../components/Spinner";
import 'survey-core/defaultV2.min.css';
import {Box} from "@mui/material";


const StartupSurvey: React.FC = () => {
    const auth = useRecoilValue<IAuthResponse>(authAtom);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)
    //const [error, setError] = useState(false)

    const [_, setEvaluation] = useRecoilState<IStartupValuationResponse | null>(evaluationAtom)

    const survey = useRef(new Model(surveyJSON)).current
    survey.applyTheme(SurveyTheme.DoubleBorderLight)

    const surveyData = useCallback(async (sender: { data: any }) => {
        setLoading(true);
        const jobId = (await apiService.evaluate(transformToEvidences(sender.data))).data
        const evaluation = (await apiService.getEvaluation(jobId)).data.evaluation
        setEvaluation(evaluation);
        setLoading(false);
        navigate(`/startup/${jobId}`);
    }, [navigate, setEvaluation]);

    survey.onComplete.add(surveyData);

    useEffect(() => {
        if (auth?.token?.accessToken === undefined) {
            navigate("/login")
        }
    }, [auth, navigate]);

    if (loading) return <Spinner/>;

    return (
        <Box>
            <Survey
                model={survey}
                id="surveyContainer"
            />
        </Box>
    )
};

export default StartupSurvey;