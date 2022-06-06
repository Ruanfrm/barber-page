import { Hamburger } from './Hanburger';
import logo from '../imagens/logo.png';
import '../css/Header.css';

export function Header() {
  return (
    <header id="home" className="bg-zinc-900 h-[5rem] px-4 flex items-center justify-between">
      <div className="rounded-full h-[5rem] w-[5rem]">
        <img className="rounded-full h-full w-full" src={ logo } alt="Logo" />
      </div>
      <div className="h-full flex justify-around mobile:invisible mobile:hidden tablet:w-[60%]">
        <button className="menu-link"><a href="#home">Home</a></button>
        <button className="menu-link" ><a href="#sobre">Sobre</a></button>
        <button className="menu-link" ><a href="#servicos">Serviços</a></button>
        <button className="menu-link" ><a href="#horarios">Horarios</a></button>
        <button className="menu-link" ><a href="#contatos">Contatos</a></button>
      </div>
      <button className='mobile:invisible mobile:hidden'></button>
      <Hamburger />
    </header>
  )
}