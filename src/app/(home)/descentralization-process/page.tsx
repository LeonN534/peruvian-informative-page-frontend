import Comentaries from "@/app/components/Comentaries";
import ConfirmationModal from "@/app/components/ConfirmationModal";
import LoginToast from "@/app/components/LoginToast";
import { Topics } from "@/app/enums/topics.enum";
import React from "react";

const DescentralizationProcessPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { page } = await searchParams;
  return (
    <>
      <ConfirmationModal />
      <LoginToast />
      <main className="text-white px-40 py-20 bg-gradient-to-br from-slate-800 to-slate-950">
        <h1 className="text-8xl font-bold">
          Proceso de descentralización en el Perú
        </h1>
        <section>
          <h2 className="text-4xl font-semibold mt-16">
            1. Contexto Histórico y Antecedentes
          </h2>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">
              Historia y proceso de centralización en el Perú
            </h3>
            <div className="flex flex-col gap-5 ml-10 text-lg">
              <p>El centralismo es uno de los problemas más serios del país.</p>
              <p>
                Es la centralización económica y política de los recursos y
                fines del estado, su acción comprenden al Gobierno Central.
              </p>
            </div>
            <h4>Esto se traduce en:</h4>
            <table className="w-max flex border-2 border-white rounded-lg mx-auto mt-4">
              <tbody>
                <tr>
                  <td className=" border-2 border-white p-5">
                    Concentración del 40% de población en 9 ciudades
                  </td>
                  <td className=" border-2 border-white p-5">
                    Debilidad de capacidades regionales y locales
                  </td>
                </tr>
                <tr>
                  <td className=" border-2 border-white p-5">
                    5 departamentos concentran 2/3 del PBI nacional
                  </td>
                  <td className=" border-2 border-white p-5">
                    Ineficiencia y mal uso del gasto público
                  </td>
                </tr>
                <tr>
                  <td className=" border-2 border-white p-5">
                    10 provincias concentran el 52% de electores
                  </td>
                  <td className=" border-2 border-white p-5">
                    Ideas y prácticas centralistas y burocráticas
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Comentaries
        topic={Topics.DESCENTRALIZATION_PROCESS}
        page={Number(page)}
      />
    </>
  );
};

export default DescentralizationProcessPage;
