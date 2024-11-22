import Image from "next/image";
import BanderaHuanuco from "@/../public/bandera-huanuco.png";
import BanderaPeru from "@/../public/bandera-peru.png";
import MemberCard from "../components/MemberCard";

export default function Home() {
  return (
    <main>
      <div className="bg-[#111827] text-white p-40 flex items-center">
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            Estudio de la realidad nacional y regional
          </h1>
          <p className="text-xl font-semibold mt-10 text-gray-200">
            Es esta web tocaremos temas de interés nacional, abordaremos sus
            antecedentes, proyecciones a futuro, impacto en el ámbito nacional y
            regional y no solamente podrás encontrar información sobre tema,
            sino que podrás interactuar con otros usuarios y compartir tus
            opiniones.
          </p>
        </div>
        <div className="flex-1 flex justify-center gap-20 hover:scale-110 transition-transform duration-300 relative overflow-hidden group">
          <Image
            alt="Bandera del Perú"
            src={BanderaPeru}
            className="w-60 h-60 rotate-12 z-[1]"
          />
          <Image
            alt="Bandera de Huánuco"
            src={BanderaHuanuco}
            className="w-80 h-80 -rotate-12 z-[1]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-0 h-0 bg-white rounded-full opacity-0 transition-all duration-500 group-hover:w-64 group-hover:h-64 group-hover:opacity-10"></div>
            <div className="absolute w-0 h-0 bg-white rounded-full opacity-0 transition-all duration-700 group-hover:w-48 group-hover:h-48 group-hover:opacity-5"></div>
            <div className="absolute w-0 h-0 bg-white rounded-full opacity-0 transition-all duration-900 group-hover:w-32 group-hover:h-32 group-hover:opacity-[0.02]"></div>
          </div>
        </div>
      </div>
      <div className="p-20">
        <h2 className="text-3xl font-semibold text-center">Somos el Grupo 2</h2>
        <div className="mt-20 flex flex-wrap justify-center gap-20">
          <MemberCard
            name="Romero Bardales Leonardo Josué"
            photo={BanderaHuanuco}
            linkUrl="https://github.com/LeonN534"
          />
          <MemberCard
            name="Carbajal Herrera Luis Manuel"
            photo={BanderaHuanuco}
            linkUrl="www.google.com"
          />
          <MemberCard
            name="Claudio Montes Kevin Saith"
            photo={BanderaHuanuco}
            linkUrl="www.google.com"
          />
          <MemberCard
            name="Julca Garcia Jhonatan Aníbal"
            photo={BanderaHuanuco}
            linkUrl="www.google.com"
          />
          <MemberCard
            name="Rosa Lucas Fredhy Eduardo"
            photo={BanderaHuanuco}
            linkUrl="https://github.com/lucsducks"
          />
        </div>
      </div>
    </main>
  );
}
