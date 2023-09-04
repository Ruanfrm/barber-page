export default function Footer() {
  return(
    <footer className="bg-zinc-900 h-[5rem] flex items-center justify-center">
      <p className="flex items-center justify-center mobile:flex-col">
        <span>Weverton Barber |</span> 
        <span>Direitos reservados |</span> 
        <span>
          Desenvolvido por
          <a
            href="https://ruanfr.com"
            className="text-[#f1cd30] ml-2 hover:text-[#f1ce3088]"
            target="_blanck"
          >
            Ruan Freire
          </a>
        </span>
      </p>
    </footer>
  )
}