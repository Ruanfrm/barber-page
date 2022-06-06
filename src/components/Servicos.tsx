import cabelo from '../imagens/cabelo.png';
import bar from '../imagens/Bar.png';
import quimica from '../imagens/quimica.png';
import pezinho from '../imagens/pezinho.png';
import sombrancelha from '../imagens/sombrancelha.png';
import barba from '../imagens/barba.png';
import { Chats } from "phosphor-react";

export function Servicos() {
  return(
    <section id="servicos" className="h-screen mobile:h-[60rem] tablet:h-[50rem]">
      <h1 className="h1-serv">Nossos serviços</h1>
      <div className="md:h-[24rem] md:w-[600px] m-auto flex flex-col items-center">
        <ul className="flex flex-wrap justify-around">
          <li className="card-serviço">
            <img src={cabelo} alt="cabelo" />
            <p>Cabelo</p>
          </li>
          <li className="card-serviço">
            <img  src={barba} alt="barba" />
            <p>barba</p>
          </li>
          <li className="card-serviço">
            <img  src={quimica} alt="quimica" />
            <p>Pigmentação</p>
          </li>
          <li className="card-serviço">
            <img  src={pezinho} alt="pezinho" />
            <p>pezinho</p>
          </li>
          <li className="card-serviço">
            <img  src={sombrancelha} alt="sombrancelha" />
            <p>sombrancelha</p>
          </li>
          <li className="card-serviço">
            <img  src={bar} alt="bar" />
            <p>bar</p>
          </li>
        </ul>
      <a 
        type="button"
        href="https://wa.me/message/NU3HUQEFKORMF1"
        target="_blank"
        className="buttons-out flex items-center bg-brand-100 mobile:px-8 mobile:mt-12 px-28 py-2 rounded-md text-black mt-36 hover:cursor-pointer"
      >
        Agende um serviço
        <span className="ml-4">
          <Chats size={32} />
        </span>
      </a>
      </div>
    </section>
  )
}