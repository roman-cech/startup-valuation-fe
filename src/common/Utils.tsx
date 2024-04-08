import {IEvidence} from "./Types";

export const transformToEvidences = (data: { [key: string]: string | number }): IEvidence[] => {
    return Object.entries(data).map(([description, value]) => (
        {
            description,
            value: typeof value === 'string' ? value : String(value)
        })
    )
}