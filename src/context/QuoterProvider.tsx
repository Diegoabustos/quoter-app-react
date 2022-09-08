import { ChangeEvent, useState } from 'react';
import { QuoterContext } from './QuoterContext';
import { getDifferenceYear, calculateBrand, claculatePlan, formatMoney } from '../helpers'

interface Props {
    children: JSX.Element
}

const QuoterProvider = ({children}: Props) => {

    const [data, setData] = useState({
        brand: '',
        year: 0,
        plan: ''
    })
    const [result, setResult] = useState('');
    const [error, setError]  = useState<string>('')
    const [loading, setLoading]  = useState(false);

    const handleChange = ({target}: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>)  => {
        const { name, value } = target;
        setData({
            ...data,
            [name]: value
        })
    }

    const quoteInsurance = () => {
        // Una base
        let result = 2000;

        // Obtener diferencia de años
        const difference = getDifferenceYear(data.year);

        // Hay que restar el 3% por cada año
        result -= ((difference * 3) * result) / 100;

        // Americano 15%
        // Europeo 30%
        // Asiatico 5%
        result *= calculateBrand(data.brand);


        // Básico 20%
        // Completo 50%
        result *= claculatePlan(data.plan);
        
        // Formatear dinero
        const resultFormat = formatMoney(result)
        setLoading(true);

        setTimeout(() => {
            setResult(resultFormat)
            setLoading(false)
        }, 3000);

    }

    return (
        <QuoterContext.Provider
            value={{
                data,
                handleChange,
                error,
                setError,
                quoteInsurance,
                result,
                loading
            }}
        >
            {children}
        </QuoterContext.Provider>
    )
}

export {
    QuoterProvider
}

export default QuoterContext;