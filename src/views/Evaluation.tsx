import React, {useEffect} from 'react'
import {useRecoilValue} from "recoil";
import {IAuthResponse, IStartupValuationResponse} from "../common/Types";
import evaluationAtom from "../api/evaluationAtom";
import authAtom from "../api/authAtom";
import {useNavigate} from "react-router-dom";
import {Box, Card, Container, CssBaseline, Typography} from "@mui/material";
import { CircularProgress } from "@mui/material";
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
                    <Typography variant="h5">Evaluation</Typography>
                    <Box sx={{mt: 1}}>
                        <div style={{position: 'relative', width: '100px', height: '100px'}}>
                        <CircularProgress
                            variant="determinate"
                            value={evaluation.rate}
                            size="lg"

                        />
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center'
                        }}>
                            <Typography variant="h6">{Math.round(evaluation.rate)}%</Typography>
                        </div>
                    </div>
                </Box>
                <Box>
                    <Typography variant="body2" align="center">{evaluation.explanation}</Typography>
                </Box>
            </Box>
</Container>

)
}

export default Evaluation;