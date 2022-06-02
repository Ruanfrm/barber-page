import nevou from '../imagens/nevou.jpeg';
import dani from '../imagens/dani.jpeg';
import fael from '../imagens/fael.jpeg';
import degrade from '../imagens/degrade.jpeg';
import kauan from '../imagens/kauan.jpeg';
import lucas from '../imagens/lucas.jpeg';
import smile from '../imagens/smile.jpeg';

export function Trabalhos() {
  const imagens = [nevou, dani, fael, degrade, kauan, lucas, smile];
  return (
    <section className="h-[120vh] mobile:h-[140rem] servises-section">
      <h1 className="text-center py-4 h1-servise">Alguns Trabalhos</h1>
      <div className="h-[558px] w-[90%] mx-auto flex flex-wrap items-center justify-around">
        {
          imagens.map((imagen,index) => (
            <div
              key={ index }
              className="h-[250px] w-[250px] mb-8 border-2 border-gray-500 bg-slate-200 hover:shadow-[0px_0px_10px_rgb(255,255,255)] hover:-translate-y-2"
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