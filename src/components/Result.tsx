import { useMemo, useRef } from "react";
import useQuoter from "../hooks/useQuoter";
import { PLANS, BRANDS } from "../constants";

const Result = () => {
  const { result, data } = useQuoter();
  const { brand, plan, year } = data;
  const yearRef = useRef(year);
  const [nameBrand] = useMemo(
    () => BRANDS.filter((m) => m.id === Number(brand)),
    [result]
  );
  const [namePlan] = useMemo(
    () => PLANS.filter((p) => p.id === Number(plan)),
    [result]
  );
  return (
    <>
      {nameBrand ? (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
          <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
          <p className="my-2">
            <span className="font-bold">Marca: </span>
            {nameBrand.name}
          </p>
          <p className="my-2">
            <span className="font-bold">Plan: </span>
            {namePlan.name}
          </p>
          <p className="my-2">
            <span className="font-bold">Año del auto: </span>
            {yearRef.current}
          </p>
          <p className="my-2 text-2xl">
            <span className="font-bold">Total de Cotización: </span>
            {result}
          </p>
        </div>
      ) : null}
    </>
  );
};

export default Result;
