export interface IAuthResponse {
    token: { accessToken: string, refreshToken: string }
    user: { firstName: string, lastName: string, email: string }
}

export interface IEvidence {
    description: string,
    value: string
}

export interface IStartupValuationResponse {
    rate: number;
    explanation: string;
}

export interface IPairResponse {
    jobStatus: string;
    evaluation: IStartupValuationResponse | null;
}
