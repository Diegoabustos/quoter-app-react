import useQuoter from '../hooks/useQuoter'
import Form from './Form'
import Spinner from './Spinner';
import Result from './Result';


const AppInsurance = () => {
  const { result, loading } = useQuoter();
  return (
    <>
    <header>
      <h1 className='text-white text-center text-4xl font-black'>Cotizador de Seguros de Auto</h1>  
    </header>
    <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10'>
        <Form />
        { loading ? <Spinner /> : <Result />}
    </main>
    </>
  )
}

export default AppInsurance