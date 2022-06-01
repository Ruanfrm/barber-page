import { Header } from "../components/Header";
import { Trabalhos } from "../components/Trabalhos";
import { Servicos } from "../components/Servicos";
import '../css/Home.css'

export function Home() {
  return (
    <div className="w-screen">
      <Header/>
      <div className="img-olimpo">
        <button>Saiba Mais</button>
      </div>
      <section className="section-sobre">
        <div>
          <h1>Sobre</h1>
          <p>
          A Confraria da Barba é a barbearia da sua época. Focada em excelência, a Confraria
          conta com tudo que o homem moderno precisa. Um ambiente confortável, descontraído e
          exclusivamente masculino, com cuidados para todos os estilos de barba e cabelo,
          além de serviços como massagem, podologia, estética masculina e dia do noivo. Uma
          barbearia premium, para cuidar do visual, tomar uma cerveja gelada, assistir aos
          seus esportes favoritos ou jogar uma partida de sinuca.
          Seja um confrade. Cadastre-se e receba as novidades, eventos e condições especiais
          da Confraria da Barba.
          </p>
        </div>
      </section>
      <Servicos />
      <Trabalhos />
    </div>
  )
}