export default function Footer() {
  return(
    <footer className="bg-zinc-900 h-[5rem] flex items-center justify-center">
      <p className="flex items-center justify-center mobile:flex-col">
        <span>Olimpo Barber |</span> 
        <span>Direitos reservados |</span> 
        <span>
          Desenvolvido por
          <a
            href="https://www.linkedin.com/in/leonardo-ferraz-149480228/"
            className="text-[#f1cd30] ml-2 hover:text-[#f1ce3088]"
            target="_blanck"
          >
            Leonardo Ferraz
          </a>
        </span>
      </p>
    </footer>
  )
}