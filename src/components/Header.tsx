import { Hamburger } from './Hanburger';
import logo from '../imagens/logo.png';
import '../css/Header.css';

export function Header() {
  return (
    <header className="bg-zinc-900 h-[5rem] px-4 flex items-center justify-between">
      <div className="rounded-full h-[5rem] w-[5rem]">
        <img className="rounded-full h-full w-full" src={ logo } alt="Logo" />
      </div>
      <div className="h-full flex justify-around mobile:invisible mobile:hidden">
        <button className="menu-link">Home</button>
        <button className="menu-link" >Sobre</button>
        <button className="menu-link" >Serviços</button>
        <button className="menu-link" >Horarios</button>
        <button className="menu-link" >Contatos</button>
      </div>
      <button className='mobile:invisible mobile:hidden'></button>
      <Hamburger />
    </header>
  )
}