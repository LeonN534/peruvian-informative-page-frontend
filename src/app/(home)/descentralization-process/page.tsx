import React from "react";
import Image from "next/image";
import Comentaries from "@/app/components/Comentaries";
import ConfirmationModal from "@/app/components/ConfirmationModal";
import LoginToast from "@/app/components/LoginToast";
import { Topics } from "@/app/enums/topics.enum";
import Descentralismo from "@/../public/images/descentralismo.png";

type Params = Promise<{ page: string }>;

const DescentralizationProcessPage = async ({
  searchParams,
}: {
  searchParams: Params;
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
            <div className="flex flex-col gap-5 ml-10 text-2xl">
              <p>El centralismo es uno de los problemas más serios del país.</p>
              <p>
                Es la centralización económica y política de los recursos y
                fines del estado, su acción comprenden al Gobierno Central.
              </p>
            </div>
            <h4>Esto se traduce en:</h4>
            <h5 className="text-center font-semibold">
              Descontento entre el estado y SC
            </h5>
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
            <h3 className="font-semibold mt-5">
              Problemas de la centralización
            </h3>
            <div className="flex flex-col gap-5 ml-10 text-2xl">
              <p>
                Un problema recurrente fue la continuación del sistema incaico
                con el virreynato con centrar el poder político, militar,
                económico y de recursos recolectados en un solo lugar
              </p>
              <p>
                La centralización económica es un problema de producción e
                ingreso para las localidades debido a que no genera mecanismo de
                igualación y de difusión de los frutos de crecimiento entre las
                regiones.
              </p>
              <p>
                La centralización económica genera un mal gobierno debido a que
                el gobierno central acapara las funciones y los recursos del
                Estado, mientras que los gobiernos regionales tienen poca
                influencia en sus decisiones.
              </p>
            </div>
            <h3 className="font-semibold mt-5">Descentralismo</h3>
            <Image
              src={Descentralismo}
              width={893}
              height={392}
              alt="mapa sobre el descentralismo"
              className="mx-auto rounded-xl"
            />
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold mt-16">
            2. Objetivos y Estrategias del Proceso de Descentralización
          </h2>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">Objetivos</h3>
            <div className="flex flex-col gap-5 ml-10">
              <div className="flex flex-col gap-3 items-start">
                <h4 className="text-2xl font-medium">
                  - Transferencia de competencias
                </h4>
                <p className="text-2xl">
                  Pasar competencias del gobierno nacional a gobiernos
                  regionales y locales para una gestión más cercana a la
                  población.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <h4 className="text-2xl font-medium">
                  - Distribución de recursos
                </h4>
                <p className="text-2xl">
                  Distribuir equitativamente los recursos del Estado entre
                  niveles de gobierno para un desarrollo justo y eficiente.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <h4 className="text-2xl font-medium">
                  - Desarrollo económico autosostenible
                </h4>
                <p className="text-2xl">
                  Fomentar un desarrollo económico adaptado a las necesidades
                  locales para maximizar el potencial regional.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <h4 className="text-2xl font-medium">
                  - Participación ciudadana
                </h4>
                <p className="text-2xl">
                  Fomentar un desarrollo económico adaptado a las necesidades
                  locales para maximizar el potencial regional.
                </p>
              </div>
            </div>
            <h3 className="font-semibold mt-16">Estrategias</h3>
            <div className="flex flex-col gap-5 ml-10">
              <div className="flex flex-col gap-3 items-start">
                <h4 className="text-2xl font-medium">
                  - Transferencia Gradual
                </h4>
                <h4 className="text-2xl font-medium">
                  - Capacitación y Asistencia Técnica
                </h4>
                <h4 className="text-2xl font-medium">
                  - Desarrollo de Sistemas Administrativos
                </h4>
                <h4 className="text-2xl font-medium">
                  - Fomento a la Inversión Privada
                </h4>
                <h4 className="text-2xl font-medium">
                  - Monitoreo y Evaluación Continua
                </h4>
                <h4 className="text-2xl font-medium">
                  - Promoción de la Transparencia
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold mt-16">
            3. Impacto en las Regiones
          </h2>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">
              Fortalecimiento de los Gobiernos Regionales y Locales
            </h3>
            <p>
              La descentralización ha permitido a los gobiernos regionales y
              locales asumir roles estratégicos en la administración de recursos
              y toma de decisiones en áreas como educación, salud y desarrollo
              económico.
            </p>
            <div className="ml-5">
              <div className="flex flex-col gap-4">
                <h4>Impactos positivos</h4>
                <p className="text-2xl">
                  Ejecución de proyectos adaptados a las prioridades de cada
                  región, como infraestructura educativa en áreas rurales y
                  centros de salud en zonas de difícil acceso.
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <h4>Desafios</h4>
                <p className="text-2xl">
                  En varias regiones, la falta de capacidad administrativa y
                  problemas de corrupción han limitado la efectividad en la
                  ejecución de presupuestos y en la prestación de servicios
                  básicos.
                </p>
              </div>
            </div>
            <h3 className="font-semibold mt-8">Desigualdad Regional</h3>
            <p>
              La descentralización ha tenido impactos desiguales en las
              regiones, beneficiando más a aquellas con mayores recursos
              naturales o mejor infraestructura.
            </p>
            <div className="ml-5">
              <div className="flex flex-col gap-4">
                <h4>Regiones Favorecidas</h4>
                <p className="text-2xl">
                  Arequipa y Cusco han experimentado mejoras en infraestructura,
                  servicios y empleo, sin embargo, en Lima, la acumulación de
                  recursos sigue siendo mayor que en cualquier otra región,
                  generando una diferencia en cuanto a inversión y
                  oportunidades.
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <h4>Regiones Menos Favorecidas</h4>
                <p className="text-2xl">
                  Las regiones de la Amazonía y los Andes enfrentan limitaciones
                  significativas en desarrollo económico. Esto ha generado una
                  concentración de pobreza en algunas de estas regiones,
                  especialmente en zonas rurales y de difícil acceso.
                </p>
              </div>
            </div>
            <h3 className="font-semibold mt-8">Identidad y Cultura Regional</h3>
            <p>
              La descentralización ha ayudado a las regiones a fortalecer su
              identidad cultural y a promover sus lenguas y tradiciones.
            </p>
            <div className="ml-5">
              <div className="flex flex-col gap-4">
                <h4>Preservación de costumbres</h4>
                <p className="text-2xl">
                  Se organizan festivales y eventos culturales han ayudado a
                  preservar las danzas y costumbres originarias de las
                  diferentes regiones.
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <h4>Preservación de lenguas originarias</h4>
                <p className="text-2xl">
                  Programas educativos en lenguas originarias contribuyendo a la
                  educación bilingüe y a la preservación de las lenguas
                  indígenas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold mt-16">
            4. Desafíos y Limitaciones
          </h2>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">
              Desafío: Gestión y elección de nuevos puntos de servicios
            </h3>
            <p>
              Se necesita hacer un estudio sobre las regiones y provincias del
              Perú para poder determinar los servicios más importantes para
              expandir en primer lugar. Luego, las ubicaciones de estos,
              desarrollar el plan de gestión, analizar los requirimientos de
              presupuesto y mano de obra futura, etc.
            </p>
            <p>
              La descentralización se un proceso que acaba en una centralización
              a menor nivel. No se puede expandir la disponibilidad de un
              servicio infinitamente, por lo que algunos lugares necesitarán sí
              o sí de un centro cercano, mas no uno propio. Es por esto que un
              plan de gestión es necesario, ya que se debe equilibrar costos con
              disponibilidad de servicio.
            </p>
          </div>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">Limitación infraestructural</h3>
            <p>
              Luego de una gestión para la elección de los nuevos puntos de
              dispersión, se hace presente la situación en la que no todos los
              puntos tienen los recursos, el área, la mano de obra capacitada,
              etc. para albergar un nuevo servicio de gran necesidad, por lo que
              los costos podrían dispararse más de lo previsto.
            </p>
          </div>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">Desafío: Inestabilidad política</h3>
            <p>
              El Perú es un país que estos últimos años ha psado por una gran
              inestabilidad política, lo que lleva a no concreatar planes a
              largo plazo o ni siquiera considerarlos, debido a lo complejos que
              stos pueden llegar a ser. Este es el caso de la descentralización.
              Este es un proceso que necesita de mucho planeamiento y tiempo
              para poder ser desarrollado, pero con las ineficacia de las
              autoridades, su desarrollo puede ser ampliamente imposibilitado.
            </p>
          </div>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">Desafío: Recentralización</h3>
            <p>
              Desde 2010, ministerios nacionales asumen funciones de los
              gobiernos regionales, limitando su autonomía.
            </p>
          </div>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">
              Limitación: Corrupción y capacidades limitadas
            </h3>
            <p>
              La corrupción en gobiernos locales y regionales reduce la
              confianza y efectividad; además, faltan capacidades técnicas para
              gestionar proyectos.
            </p>
          </div>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">Limitación: Desigualdad regional</h3>
            <p>
              La calidad y acceso a servicios básicos varía entre regiones,
              mostrando una implementación descentralizada desigual.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold mt-16">
            5. Futuro y Reformas Necesarias en la Descentralización
          </h2>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">
              Clarificación de Responsabilidades
            </h3>
            <p>
              Es fundamental definir claramente las responsabilidades entre los
              diferentes niveles de gobierno. Esto incluye mejorar la
              coordinación entre el gobierno central y los gobiernos
              subnacionales para evitar duplicidades y conflictos.
            </p>
          </div>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">Nuevo Sistema de Ingresos</h3>
            <p>
              Se requiere un rediseño del Fondo de Compensación Municipal
              (FONCOMUN) para garantizar que los gobiernos locales tengan acceso
              a recursos suficientes para cumplir con sus funciones.
            </p>
          </div>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">Fortalecimiento de Capacidades</h3>
            <p>
              Capacitar a funcionarios públicos y líderes locales es crucial
              para asegurar que puedan gestionar adecuadamente los recursos y
              servicios. Esto incluye fomentar la inclusión intercultural para
              integrar a todas las poblaciones en el proceso.
            </p>
          </div>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">
              Transparencia y Rendición de Cuenta
            </h3>
            <p>
              Implementar mecanismos que promuevan la transparencia, como
              plataformas de datos abiertas, permitirá a los ciudadanos
              monitorear las acciones de sus autoridades y exigir rendición de
              cuentas.
            </p>
          </div>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">Acciones Inmediatas</h3>
            <div className="ml-6">
              <h4 className="font-semibold">- Elevar la transparencia</h4>
              <p className="mt-4">
                Con datos abiertos y plataformas que faciliten el monitoreo de
                las funciones más relevantes para la ciudadanía.
              </p>
            </div>
            <div className="ml-6">
              <h4 className="font-semibold">- Designar mejor las funciones</h4>
              <p className="mt-4">
                Otorgar funciones y competencias a los niveles de gobierno con
                mayor capacidad para proveer servicios a la ciudadanía.
              </p>
            </div>
            <div className="ml-6">
              <h4 className="font-semibold">
                - Fortalecer las capacidades de la administración pública
              </h4>
              <p className="mt-4">
                A través de la incorporación de personal altamente calificado
                gracias a la implementación de incentivos.
              </p>
            </div>
            <div className="ml-6">
              <h4 className="font-semibold">- Participación Ciudadana</h4>
              <p className="mt-4">
                Fortalecer la representatividad de los partidos y organizaciones
                políticas en el ámbito subnacional, para mejorar la confianza de
                la ciudadanía en sus autoridades.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold mt-16">6. Referencias</h2>
          <ul className="flex flex-col gap-4 text-xl mt-10">
            <li>
              - El retroceso del proceso de descentralización en el Perú. (2024,
              agosto 4). Propuesta Ciudadana.
              https://propuestaciudadana.org.pe/comunicaciones/gpc-en-medios/el-retroceso-del-proceso-de-descentralizacion-en-el-peru-2/
            </li>
            <li>
              - Expertos enfatizan la importancia de fortalecer la
              descentralización en el Perú en foro del Ceplan. (s/f). Gob.pe.
              Recuperado el 29 de octubre de 2024, de
              https://www.gob.pe/institucion/ceplan/noticias/883808-expertos-enfatizan-la-importancia-de-fortalecer-la-descentralizacion-en-el-peru-en-foro-del-ceplan
            </li>
            <li>
              - #RutaPerú: Propuestas para optimizar la descentralización e
              incrementar sostenidamente el bienestar de la ciudadanía. (2022,
              septiembre 7). IPAE - Acción Empresarial.
              https://www.ipae.pe/rutaperu-propuestas-para-optimizar-la-descentralizacion-e-incrementar-sostenidamente-el-bienestar-de-la-ciudadania/
            </li>
            <li>
              - Si el gobierno central no cambia, la descentralización no tiene
              futuro. (2016, julio 7). PuntoEdu PUCP; Pontificia Universidad
              Católica del Perú.
              https://puntoedu.pucp.edu.pe/voces-pucp/si-el-gobierno-central-no-cambia-la-descentralizacion-no-tiene-futuro/
            </li>
          </ul>
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
