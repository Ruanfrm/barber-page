import nevou from '../imagens/nevou.png';
import dani from '../imagens/dani.png';
import fael from '../imagens/fael.png';
import degrade from '../imagens/degrade.png';
import kauan from '../imagens/kauan.png';
import lucas from '../imagens/lucas.png';
import smile from '../imagens/smile.png';

export function Trabalhos() {
  const imagens = [nevou, dani, fael, degrade, kauan, lucas, smile];
  return (
    <section className="h-[120vh] mobile:h-[140rem] tablet:h-[80rem] servises-section">
      <h1 className="text-center py-4 h1-servise mb-8">Alguns Trabalhos</h1>
      <div className="h-[558px] w-[90%] mobile:w-[350px] mx-auto flex flex-wrap items-center justify-around">
        {
          imagens.map((imagen,index) => (
            <div
              key={ index }
              className="h-[250px] w-[250px] mb-8  bg-slate-200 hover:shadow-[0px_0px_5px_rgb(255,255,255,0.5)] hover:-translate-y-2"
            >
              <img
                src={imagen}
                alt={imagen}
                className="h-full w-full"
              />
            </div>
          ))
        }
      </div>
    </section>
  )

}