import cabelo from '../imagens/cabelo.png';
import bar from '../imagens/Bar.png';
import quimica from '../imagens/quimica.png';
import pezinho from '../imagens/pezinho.png';
import sombrancelha from '../imagens/sombrancelha.png';
import barba from '../imagens/barba.png';

export function Servicos() {
  return(
    <section className="h-screen mobile:h-[55rem]">
      <h1 className="h1-serv">Nossos serviços</h1>
      <div className="md:h-[24rem] md:w-[600px] m-auto">
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
      </div>
    </section>
  )
}