import { Header } from "../components/Header";
import { Trabalhos } from "../components/Trabalhos";
import { Servicos } from "../components/Servicos";
import '../css/Home.css'
import { Horarios } from "../components/Horarios";
import { Contatos } from "../components/Contatos";
import Footer from "../components/Footer";

export function Home() {
  return (
    <div className="w-screen">
      <Header/>
      <div className="img-olimpo">
        <button><a href="#sobre">Saiba Mais</a></button>
      </div>
      <section id="sobre" className="section-sobre mobile:h-[50rem]  mobile:flex mobile:flex-col mobile:items-center mobile:justify-center">
        <div className="w-[50%] mr-16 mobile:w-[80%] mobile:mr-0">
          <h1>Sobre</h1>
          <p>
            A barbearia Olimpo é a barbearia perfeita pra você, somos totalmente focado em exelência, aqui você encontrara tudo que prescisa em um ambiente confortavel e descontraido, um lugar onde cuidamos do seu estilo para todos os gostos de barba e cabelo venha cuidar do seu visual, ou apenas nos fazer uma visita para batermos um bom papo e tomar uma cerveja gelada, assistir aos seus esporte e escutar suas musicas favoritas.
          </p>
        </div>
      </section>
      <Servicos />
      <Horarios />
      <Trabalhos />
      <Contatos />
      <Footer />
    </div>
  )
}