export function Serviços() {
  const imagens = ['1', '2', '3', '4', '5', '6','7'];
  return (
    <section className="h-screen bg-[#080808]">
      <h1 className="text-center py-4 h1-servise">Nossos Serviços</h1>
      <div className="h-[558px] w-[1200px] mx-auto flex flex-wrap items-center justify-around">
        {
          imagens.map((imagen,index) => (
            <div
              key={ index }
              className="h-[250px] w-[250px] rounded-[10px] border-2 border-gray-500 bg-slate-200"
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