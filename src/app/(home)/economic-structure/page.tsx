import Image from "next/image";
import React from "react";
import PBI from "@/../public/images/pbi-2023.png";
import PBI2 from "@/../public/images/pbi-2023-2.png";
import PBIHco from "@/../public/images/pbi-huanuco.png";
import PBIHco2 from "@/../public/images/pbi-huanuco-2.png";
import Comentaries from "@/app/components/Comentaries";
import { Topics } from "@/app/enums/topics.enum";
import LoginToast from "@/app/components/LoginToast";
import ConfirmationModal from "@/app/components/ConfirmationModal";

type Params = Promise<{ page: string }>;

const EconomicStructurePage = async ({
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
          Estructura económica y desarrollo del país y la región
        </h1>
        <section>
          <h2 className="text-4xl font-semibold mt-16">
            1. Contexto Histórico y Político
          </h2>
          <div className="ml-6 text-2xl font-medium flex flex-col gap-5 mt-10">
            <h3 className="font-semibold">Contexto histórico nacional</h3>
            <div className="flex flex-col gap-5 ml-10">
              <div className="flex flex-col gap-3 items-start">
                <h4 className="text-2xl font-medium">- Independencia</h4>
                <p className="text-2xl">
                  La independencia de Perú en 1821 permitió el establecimiento
                  de una economía nacional independiente, lo que facilitó la
                  creación de políticas económicas propias.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <h4 className="text-2xl font-medium">- Reforma Agraria</h4>
                <p className="text-2xl">
                  Las reforma agraria en las década de 1970 redistribuyeron las
                  tierras, impactando profundamente la economía rural y la
                  estructura agraria del país.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <h4 className="text-2xl font-medium">
                  - Políticas Neoliberales
                </h4>
                <p className="text-2xl">
                  En los años 90, las políticas neoliberales promovieron la
                  apertura económica, modernizando la economía peruana e
                  integrándola al mercado global
                </p>
              </div>
            </div>
            <h3 className="font-semibold mt-16">Contexto histórico regional</h3>
            <div className="flex flex-col gap-5 ml-10">
              <div className="flex flex-col gap-3 items-start">
                <h4 className="text-2xl font-medium">
                  - Participación en la Independencia
                </h4>
                <p className="text-2xl">
                  Huánuco tuvo un papel significativo en la lucha por la
                  independencia, lo que fortaleció su identidad regional y su
                  integración en la economía nacional.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <h4 className="text-2xl font-medium">
                  - Desafíos de Infraestructura
                </h4>
                <p className="text-2xl">
                  Históricamente, Huánuco ha enfrentado desafíos en
                  infraestructura, lo que ha limitado su desarrollo económico y
                  su capacidad para conectarse eficazmente con el resto del
                  país.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start">
                <h4 className="text-2xl font-medium">
                  - Impacto de la Reforma Agraria
                </h4>
                <p className="text-2xl">
                  Las reformas agrarias afectaron a Huánuco de manera
                  significativa, cambiando la estructura de la tenencia de la
                  tierra y el desarrollo agrícola regional.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold mt-16">
            2. Estructura productiva
          </h2>
          <div>
            <div>
              <h3 className="font-semibold mt-16 text-2xl ">
                Sectores económicos
              </h3>
              <div className="flex flex-col gap-5 ml-10 mt-10 max-w-[800px]">
                <div className="flex flex-col gap-3 items-start">
                  <h4 className="text-2xl font-medium">- Sector primario </h4>
                  <p className="text-2xl">
                    El sector primario engloba actividades relacionadas con la
                    extracción y recolección de recursos naturales. Esto incluye
                    agricultura, ganadería, pesca, minería y explotación
                    forestal.
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <h4 className="text-2xl font-medium">- Sector secundario</h4>
                  <p className="text-2xl">
                    El sector secundario se refiere a la transformación de
                    materias primas en productos manufacturados. Incluye
                    actividades industriales como la manufactura, la
                    construcción, y la producción de energía.
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <h4 className="text-2xl font-medium">- Sector terciario</h4>
                  <p className="text-2xl">
                    El sector terciario abarca los servicios que no producen
                    bienes tangibles, pero que son esenciales para la economía.
                    Esto incluye comercio, transporte, turismo, educación,
                    salud, y servicios financieros.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mt-10">
                Sectores económicos a nivel país
              </h3>
              <p className="mt-8 text-2xl">
                Históricamente, la economía peruana ha dependido de la
                explotación de recursos naturales, especialmente minería,
                agricultura, y pesca.
              </p>
              <div className="flex gap-20 mt-10 justify-center">
                <div className="flex flex-col items-center w-max">
                  <p className="font-semibold text-center">
                    Distribución del PBI por sectores económicos
                  </p>
                  <Image
                    className="rounded-lg"
                    src={PBI}
                    width={682}
                    height={498}
                    alt="PBI 2023"
                  />
                  <p className="font-semibold text-center">
                    PBI peruano: S/ 563 784 379 000 - Fuente INEI 2023
                  </p>
                </div>
                <div className="flex flex-col items-center w-max">
                  <p className="font-semibold text-center">
                    Distribución del PBI por actividades económicas
                  </p>
                  <Image
                    className="rounded-lg"
                    src={PBI2}
                    width={682}
                    height={498}
                    alt="PBI 2023"
                  />
                  <p className="font-semibold text-center">
                    PBI peruano: S/ 563 784 379 000 - Fuente INEI 2023
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mt-10">
                Sectores económicos a nivel región
              </h3>
              <p className="mt-8 text-2xl">
                La economía de la región de Huánuco ha dependido de la
                explotación en gran medida de la producción agrícola y ganadera
              </p>
              <div className="flex gap-20 mt-10 justify-center">
                <div className="flex flex-col items-center w-max">
                  <p className="font-semibold text-center">
                    Distribución del PBI por sectores económicos
                  </p>
                  <Image
                    className="rounded-lg"
                    src={PBIHco}
                    width={682}
                    height={498}
                    alt="PBI 2023"
                  />
                  <p className="font-semibold text-center">
                    PBI huanuqueño: S/ 6 602 948 000 - Fuente INEI 2023
                  </p>
                </div>
                <div className="flex flex-col items-center w-max">
                  <p className="font-semibold text-center">
                    Distribución del PBI por actividades económicas
                  </p>
                  <Image
                    className="rounded-lg"
                    src={PBIHco2}
                    width={682}
                    height={498}
                    alt="PBI 2023"
                  />
                  <p className="font-semibold text-center">
                    PBI huanuqueño: S/ 6 602 948 000 - Fuente INEI 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold mt-16">
            3. Comercio Exterior y Relaciones Internacionales
          </h2>
          <div>
            <h3 className="font-semibold mt-16 text-2xl">
              Relaciones internacionales a nivel país
            </h3>
            <div className="mt-10 ml-10">
              <h4 className="text-2xl font-medium">Alianza del Pacífico</h4>
              <p className="text-2xl mt-5">
                Es una iniciativa de integración regional entre Chile, Colombia,
                México y Perú, que busca convertirse en una plataforma de
                articulación política, económica y comercial, así como de
                proyección al mundo, con énfasis en la región Asia-Pacífico.
              </p>
              <p className="text-2xl mt-5">
                El Mincetur participa en el Grupo Técnico de Turismo de la
                Alianza del Pacífico, con un trabajo orientado al cumplimiento
                de los mandatos de las declaraciones suscritas por los
                presidentes de los 4 países del bloque.
              </p>
              <h4 className="text-2xl font-medium mt-10">
                Algunas asociaciones a las cuales el Perú pertenece
              </h4>
              <ul className="mt-5 flex gap-5 flex-col text-lg">
                <li>- Foro de Cooperación Económica Asia Pacífico (APEC)</li>
                <li>- Organización de los Estados Americanos (OEA)</li>
                <li>- Organización Mundial de Turismo (OMT)</li>
                <li>
                  - Organización para la Cooperación y Desarrollo Económico
                  (OCDE)
                </li>
              </ul>
            </div>
            <h3 className="font-semibold mt-16 text-2xl">
              Comercio exterior a nivel país
            </h3>
            <div className="text-2xl flex flex-col gap-5 mt-10">
              <p>
                Las exportaciones de productos mineros lideraron el comercio con
                APEC en el primer semestre del año, con una participación del
                69.4% (US$ 15,182 millones). Les siguieron los productos
                diversos (US$ 2,507 millones, 11.5%), los agrícolas (US$ 2,252
                millones, 10.3%), los pesqueros (US$ 1,384 millones, 6.3%) y los
                textiles (US$ 544 millones, 2.5%).
              </p>
              <p>
                China sigue siendo el principal destino para nuestras
                exportaciones al bloque APEC, al cierre del primer semestre de
                2024, al concentrar un 35.1% de nuestras ventas globales y el
                53% de nuestras exportaciones al APEC, con US$ 11,607 millones
                (+2.8%). Le siguen EE. UU. (US$ 3,604 millones; -13%), Canadá
                (US$ 1,696 millones; +27.1%), Japón (US$ 1,635 millones; +25.3%)
                y Corea del Sur (US$ 1,116 millones; -14.1%).
              </p>
            </div>
            <h3 className="font-semibold mt-16 text-2xl">
              Relaciones internacionales y comercio exterior a nivel región
            </h3>
            <div className="text-2xl flex flex-col gap-5 mt-10">
              <p>
                En 2023, la exportación de Huánuco ascendió a US$ 13,4 millones,
                valor 36% mayor al registrado el año previo, gracias a la mayor
                exportación de minerales (+US$ 4 millones), principalmente,
                cobre (+US$ 3,3 millones), zinc (+US$ 416 mil), concentrados de
                plata (+US$ 96 mil) y antimonio (+US$ 88 mil).
              </p>
              <p>
                Por el contrario, la agroexportación cayó 4% debido a las
                menores ventas de legumbres (-57%) - en especial de arvejas
                (-100%) y frijoles (-54%)-, y café (-65%). No obstante,
                crecieron las ventas de papaya andina (+409%), follaje mixto
                (+302%), kudzu (+173%), quinua (+75%) y palta (+29%).
              </p>
              <p>
                La exportación de cacao, el 1º producto agropecuario exportado
                en la región, totalizó US$ 3 millones, 14% más que en 2022.
                Destacaron las ventas de cacao en polvo (+212%), pasta de cacao
                (+138%) y manteca de cacao (+43%). El cacao de la región se
                destina principalmente a la Unión Europea (58% del total) y
                EE.UU. (28%).
              </p>
              <p>
                También se incrementaron las exportaciones a Chile (+400%:
                papaya andina), Corea del Sur (+458%: palta) y Estados Unidos
                (+6%: cacao). No obstante, se redujeron los despachos a Colombia
                (-52%: frijoles), Canadá (-39%: chocolate), Hong Kong (-30%:
                palta) y Reino Unido (-15% chocolate).
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold mt-16">
            4. Políticas de Desarrollo Económico y Social
          </h2>
          <h3 className="font-semibold mt-16 text-2xl">
            Políticas a nivel nacional
          </h3>
          <div className="text-2xl flex flex-col gap-5 mt-10">
            <p>
              En Perú, las políticas de desarrollo económico y social se basan
              en el modelo de Economía Social de Mercado, adoptado en la
              Constitución de 1979 y reafirmado en el Acuerdo Nacional de 2002.
              Este modelo promueve el crecimiento económico a través de la
              iniciativa privada, con un Estado que regula y fomenta. Las
              políticas clave incluyen:
            </p>
            <ul className="flex flex-col gap-3 ml-4">
              <li>
                - Elevar la política social a un asunto de gestión pública,
                mejorando la eficiencia de los programas sociales.
              </li>
              <li>
                - Invertir en educación para impulsar el crecimiento económico y
                mejorar la distribución de ingresos.
              </li>
              <li>
                - Coordinar esfuerzos entre economistas y médicos para vincular
                la salud con el crecimiento económico.
              </li>
              <li>
                - Promover las exportaciones como fuente de crecimiento y
                empleo.
              </li>
              <li>
                - Diseñar estrategias para aliviar la pobreza optimizando los
                recursos de los programas sociales por ejemplo “Incluir para
                crear”.
              </li>
            </ul>
          </div>
          <h3 className="font-semibold mt-16 text-2xl">
            Políticas a nivel regional
          </h3>
          <div className="text-2xl flex flex-col gap-5 mt-10">
            <p>
              En la región Huánuco, la Gerencia de Desarrollo Económico del
              Gobierno Regional ha priorizado cinco cadenas productivas para
              impulsar el desarrollo e innovación regional:
            </p>
            <ul className="flex flex-col gap-3 ml-4">
              <li>- Plátano</li>
              <li>- Turismo</li>
              <li>- Acuicultura</li>
              <li>- Papa</li>
              <li>- Cacao</li>
            </ul>
            <p>Algunas iniciativas que en Huánuco fueron:</p>
            <ul className="flex flex-col gap-3 ml-4">
              <li>
                - Generar mayor presupuesto para mejorar la atención en salud,
                especialmente en establecimientos de primer nivel y servicios de
                emergencia.
              </li>
              <li>
                - Mejorar la infraestructura de los centros educativos y
                contratar psicólogos en todas las instituciones educativas.
              </li>
              <li>
                - Elaborar un plan para incluir a los niños, niñas y
                adolescentes que no acceden a la educación básica regular.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold mt-16">
            5. Retos y Oportunidades para el Desarrollo Futuro
          </h2>
          <div>
            <h3 className="font-semibold mt-16 text-2xl">
              Principales Retos a Nivel Nacional
            </h3>
            <div className="mt-10 ml-5 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium">
                  Dependencia de Recursos Naturales
                </h4>
                <p className="text-2xl">
                  Perú sigue dependiendo fuertemente de la minería, la cual
                  representa una parte significativa de su PIB.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium">Desigualdad y Pobreza</h4>
                <p className="text-2xl">
                  Persisten disparidades significativas entre las áreas urbanas
                  y rurales, lo que complica el desarrollo inclusivo.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium">
                  Crisis Educativa y Salud
                </h4>
                <p className="text-2xl">
                  La calidad del sistema educativo y de salud sigue siendo un
                  desafío. Para fomentar un crecimiento inclusivo y sostenible,
                  será crucial mejorar estos sectores.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium">
                  Incertidumbre en el Sector Minero
                </h4>
                <p className="text-2xl">
                  Enfrenta desafíos adicionales como la oposición social a
                  proyectos mineros, la burocracia en la obtención de permisos y
                  más.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mt-16 text-2xl">
              Oportunidades a Nivel Nacional
            </h3>
            <div className="mt-10 ml-5 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium">Reformas Estructurales</h4>
                <p className="text-2xl">
                  Implementar políticas económicas y reformas que promuevan la
                  inversión, la competitividad y el desarrollo inclusivo será
                  clave.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium">
                  Expansión de la Economía Digital
                </h4>
                <p className="text-2xl">
                  Crecimiento de la economía digital, Perú tiene la oportunidad
                  de modernizar sus industrias y mejorar la productividad.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium">
                  Crecimiento en Sectores Clave
                </h4>
                <p className="text-2xl">
                  A pesar de los desafíos, se proyecta un crecimiento moderado
                  en sectores como la manufactura y la construcción, con tasas
                  esperadas del 3.8% y 3.6% respectivamente.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium">
                  Fortalecimiento de la Integración Regional
                </h4>
                <p className="text-2xl">
                  Oportunidad de jugar un papel activo en la promoción del
                  comercio y la inversión en la región, lo que podría fortalecer
                  su posición económica y política a nivel global.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mt-16 text-2xl">
              Principales Retos a Nivel Regional
            </h3>
            <div className="mt-10 ml-5 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium">
                  Cambio Climático y agricultura
                </h4>
                <p className="text-2xl">
                  Estos fenómenos representan un desafío continuo para la
                  región, que deberá adaptar sus actividades económicas para
                  mitigar estos efectos.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium">
                  Brechas de Infraestructura y Servicios
                </h4>
                <p className="text-2xl">
                  Aunque el PDRC busca cerrar brechas significativas en
                  infraestructura y acceso a servicios, la región aún enfrenta
                  desafíos en términos de desarrollo equitativo, especialmente
                  en áreas rurales donde el acceso a servicios básicos sigue
                  siendo limitado.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mt-16 text-2xl">
              Principales Oportunidades a Nivel Regional
            </h3>
            <div className="mt-10 ml-5 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium">
                  Impulso a Negocios Sostenibles
                </h4>
                <p className="text-2xl">
                  A través del programa Procompite 2024, se ha destinado una
                  inversión histórica de 30 millones de soles para apoyar a 250
                  unidades de negocio en 10 cadenas productivas.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium">
                  Exportación y Innovación
                </h4>
                <p className="text-2xl">
                  Huánuco tiene el potencial de desarrollar productos
                  especializados en cada uno de sus valles, con miras a la
                  exportación. El apoyo a la agroexportación y la transferencia
                  de tecnología a través de programas como Procompite.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-medium">
                  Planeamiento Estratégico y Sostenibilidad
                </h4>
                <p className="text-2xl">
                  El enfoque del PDRC en la sostenibilidad y el desarrollo
                  estratégico ofrece una hoja de ruta clara para enfrentar los
                  desafíos de la región. Este plan incluye iniciativas para
                  mejorar la competitividad y productividad.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold mt-16">6. Referencias</h2>
          <ul className="flex flex-col gap-[14px] text-2xl ml-5 mt-10">
            <li>
              - Contreras, C., & Cueto, M. (2013). Historia del Perú
              Contemporáneo: Desde las luchas por la independencia hasta el
              presente. Instituto de Estudios Peruanos.
            </li>
            <li>
              - Thorp, R., & Bertram, G. (2013). Perú 1890-1977: crecimiento y
              políticas en una economía abierta. Instituto de Estudios Peruanos.
            </li>
            <li>
              - Matos Mar, J. (1986). Desborde popular y crisis del Estado: El
              nuevo rostro del Perú en la década de 1980. Instituto de Estudios
              Peruanos.
            </li>
            <li>
              - Andina, A. P. de N. (n.d.). Perú es un ejemplo en política
              social y mejora de programas sociales. Gob.Pe.
              https://www2.congreso.gob.pe/sicr/cendocbib/con4_uibd.nsf/B5F4A85E978B250A05257B9C0075956F/%24FILE/Sostiene_representante_del_Banco_Mundial.pdf{" "}
            </li>
            <li>
              - Lorenzo, C. B. V. P. (n.d.). Crecimiento económico y su
              influencia en el desarrollo de la región Huánuco.
              Https://Dialnet.Unirioja.Es/.
              https://dialnet.unirioja.es/servlet/articulo?codigo=8617688
            </li>
            <li>
              - Daniel Bazán (2024). Negocios internacionales.
              Https://Dialnet.Unirioja.Es/.
              https://www.comexperu.org.pe/upload/articles/revista/agosto2024/index.html#p=37
            </li>
            <li>
              - Ministerio de Comercio Exterior y Turismo (2024). Cooperación y
              relaciones internacionales en turismo.
              https://www.gob.pe/15157-ministerio-de-comercio-exterior-y-turismo-cooperacion-y-relaciones-internacionales-en-turismo
            </li>
            <li>
              - Ministerio de Comercio Exterior y Turismo (2024). REPORTE DE
              COMERCIO REGIONAL
              https://cdn.www.gob.pe/uploads/document/file/6733318/5842089-rcr-huanuco-anual-2023.pdf?v=1722649102
            </li>
            <li>
              - Alvarrán, F. V. C. (2024, June 2). Economía peruana desafíos y
              oportunidades. FORO ECONÓMICO DEL PERÚ.
              https://foroeconomicoperu.com/2024/06/01/economia-peruana-desafios-y-oportunidades/
            </li>
            <li>
              - Huánuco: PROCOMPITE 2024 Destinará S/30 Millones para
              Organizaciones con Negocios Sostenibles. (n.d.). Conservation.org.
              Retrieved September 2, 2024, from
              https://www.conservation.org/peru/noticias/2024/03/13/hu%C3%A1nuco-procompite-2024-destinar%C3%A1-s-30-millones-para-organizaciones-con-negocios-sostenibles
            </li>
          </ul>
        </section>
      </main>
      <Comentaries topic={Topics.ECONOMIC_STRUCTURE} page={Number(page)} />
    </>
  );
};

export default EconomicStructurePage;
