import { atom } from 'recoil';
import { IStartupValuationResponse } from "../common/Types"

const evaluationAtom = atom<IStartupValuationResponse | null>({
    key: 'evaluation',
    default: null,
});

export default evaluationAtom;