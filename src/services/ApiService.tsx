import axiosInstance from "./AxiosInstance";
import {IAuthResponse, IEvidence, IPairResponse} from "../common/Types";
import {getAccessTokenFromUser} from "../common/Util";

type UUID = string

const logout = () => {
    const headers = { Authorization: `Bearer ${getAccessTokenFromUser()}` }
    return axiosInstance.post<IAuthResponse>(
        `/rest/v1/auth/logout?token=${getAccessTokenFromUser()}`,
        {},
        { headers }
    )
}

const login = (email: string, password: string) => {
    return axiosInstance.post<IAuthResponse>(
        '/rest/v1/auth/login',
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

const ApiService = { logout, login, evaluate, getEvaluation }

export default ApiService