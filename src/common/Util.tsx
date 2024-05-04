import {IEvidence} from "./Types";

export const transformToEvidences = (data: { [key: string]: string | number }): IEvidence[] => {
    return Object.entries(data).map(([description, value]) => (
        {
            description,
            value: typeof value === 'string' ? value : String(value)
        })
    )
}

export const getAccessTokenFromUser = () => {
    const userString = localStorage.getItem('user');

    if (userString) {
        const user = JSON.parse(userString);

        if (user && user.token && user.token.accessToken) {
            return user.token.accessToken;
        }
    }

    return null;
}

export const getRefreshTokenFromUser = () => {
    const userString = localStorage.getItem('user');

    if (userString) {
        const user = JSON.parse(userString);

        if (user && user.token && user.token.refreshToken) {
            return user.token.refreshToken;
        }
    }

    return null;
}

export const getExpirationDateFromUser = () => {
    const userString = localStorage.getItem('user');

    if (userString) {
        const user = JSON.parse(userString);

        if (user && user.token && user.token.expirationDate) {
            return user.token.expirationDate;
        }
    }

    return null;
}

export const updateUserToken = (accessToken: string, refreshToken: string, expirationDate: Date) => {
    const userString = localStorage.getItem('user');

    if (userString) {
        const user = JSON.parse(userString);

        if (user && user.token) {
            user.token.accessToken = accessToken;
            user.token.refreshToken = refreshToken;
            user.token.expirationDate = expirationDate;

            localStorage.setItem('user', JSON.stringify(user));
        }
    }
}