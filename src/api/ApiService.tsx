import axiosInstance from '../common/AxiosInstance';
import {IAuthResponse, IEvidence, IPairResponse} from "../common/Types";

type UUID = string

const logout = (token: string) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    return axiosInstance.post<IAuthResponse>(
        `/rest/v1/log-out?token=${token}`,
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
    const headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    return axiosInstance.post<UUID>(
        `/rest/v1/startups/evaluate`,
        { evidences },
        { headers }
    )
}

const getEvaluation = (jobId: UUID) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    return axiosInstance.get<IPairResponse>(
        `/rest/v1/startups/evaluate/${jobId}`,
        { headers }
    )
}

const apiService = { logout, login, evaluate, getEvaluation }

export default apiService