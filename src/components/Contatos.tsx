import React from "react";
import Mapa from "./Mapa";
import { MapPin, WhatsappLogo, InstagramLogo } from "phosphor-react";

export function Contatos() {
  return(
    <section id="contatos" className="h-[100vh] mobile:h-[55rem] flex items-center justify-center ">
      <div className="flex items-center justify-center mobile:flex-col tablet:[80%]">
        <div className="shadow-[0px_0px_10px_rgba(0,0,0,0.9)] bg-[#F1CD30] p-4  text-zinc-900 w-[50%] mobile:w-[80%] mobile:mb-4 h-[400px]">
          <h1 className="text-[40px] mb-20 font-['Patua_One']">Entre em Contato</h1>
          <p className="flex items-center mb-4"><MapPin size={32} />  José Pessoa de Queiroz Moura, Ereré - CE, 63470-000</p>
          <p className="flex items-center mb-4"><WhatsappLogo size={32} /> (88) 9 8155-8151</p>
          <p className="flex items-center mb-4"><InstagramLogo size={32} /> <a href="https://www.instagram.com/wevertons_barbershopp/" target="_blank"> @wevertons_barbershopp</a></p>
        </div>
        <Mapa />
      </div>
    </section>  
  );
}
