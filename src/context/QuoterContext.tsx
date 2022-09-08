import { createContext } from 'react';
import { FormState } from '../interfaces/interfaces';

export type QuoterContextProps = {
    data: FormState;
    handleChange: ({target}: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
    quoteInsurance: () => void;
    result: string;
    loading: boolean;
}

export const QuoterContext = createContext<QuoterContextProps>({} as QuoterContextProps);