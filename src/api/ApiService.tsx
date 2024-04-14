import axiosInstance from '../common/AxiosInstance';
import {IAuthResponse, IEvidence, IPairResponse} from "../common/Types";
import {getAccessTokenFromUser} from "../common/Utils";

type UUID = string

const logout = () => {
    const headers = { Authorization: `Bearer ${getAccessTokenFromUser()}` }
    return axiosInstance.post<IAuthResponse>(
        `/rest/v1/log-out?token=${getAccessTokenFromUser()}`,
        {},
        { headers }
    )
}

const login = (email: string, password: string) => {
    return axiosInstance.post<IAuthResponse>(
        '/rest/v1/auth',
        {email: email, password: password}
    )
}

const evaluate = (evidences: IEvidence[]) => {
    const headers = { Authorization: `Bearer ${getAccessTokenFromUser()}` }
    return axiosInstance.post<UUID>(
        `/rest/v1/startups/evaluate`,
        { evidences },
        { headers }
    )
}

const getEvaluation = (jobId: UUID) => {
    const headers = { Authorization: `Bearer ${getAccessTokenFromUser()}` }
    return axiosInstance.get<IPairResponse>(
        `/rest/v1/startups/evaluate/${jobId}`,
        { headers }
    )
}

const apiService = { logout, login, evaluate, getEvaluation }

export default apiService