export interface IAuthResponse {
    token: IToken
    user: { firstName: string, lastName: string, email: string }
}

export interface IToken {
    accessToken: string,
    refreshToken: string,
    expirationDate: Date
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