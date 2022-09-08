import { Fragment, useContext } from "react";
import { BRANDS, YEARS, PLANS } from "../constants";
import useQuoter from "../hooks/useQuoter";
import Error from "./Error";

const Form = () => {

  const { handleChange, data, setError, error, quoteInsurance } = useQuoter();

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(Object.values(data).includes('')) {
      setError('Todos los campos son obligatorios');
      return
    }
    setError('')
    quoteInsurance()
  }


  return (
    <>
      {error && <Error/> }
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            htmlFor=""
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Marca
          </label>
          <select
            name="brand"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={handleChange}
          >
            <option>-- Selecciona Marca --</option>
            {BRANDS.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor=""
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Año
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={handleChange}
          >
            <option>-- Selecciona Año --</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor=""
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Elige un Plan
          </label>
          <div className="flex gap-3">
            {PLANS.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.name}</label>
                <input type="radio" name="plan" value={plan.id} onChange={handleChange} />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
};

export default Form;
