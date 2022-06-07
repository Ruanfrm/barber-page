import { Chats } from "phosphor-react";

export function Horarios() {
  return(
    <section id="horarios" className="h-screen mobile:h-[70rem] tablet:h-[55rem] section-horarios">
      <h1 className=" text-[50px] mobile:text-[30px]">Horários de funcionamento</h1>
      <div className="z-0 flex flex-col items-center mx-auto mt-12 desktop:mt-20 mobile:h-auto h-[10rem] w-[80%]">
        <ul className="flex items-center tablet:flex-wrap tablet:w-[600px] tablet:justify-around h-full mobile:flex-col mobile:items-center ">
          <li className="li-horarios mb-4 flex flex-col items-center justify-center h-full w-[8rem]">
            <h3>
              SEG
            </h3>
            <p>Fechado</p>
          </li>
          <li className="li-horarios mb-4 flex flex-col items-center justify-center h-full w-[8rem]">
            <h3>
              TER
            </h3>
            <p>09:00 AM</p>
            <p>ÀS</p>
            <p>21:00 PM</p>
          </li>
          <li className="li-horarios mb-4 flex flex-col items-center justify-center h-full w-[8rem]">
            <h3>
              QUA
            </h3>
            <p>09:00 AM</p>
            <p>ÀS</p>
            <p>21:00 PM</p>
          </li>
          <li className="li-horarios mb-4 flex flex-col items-center justify-center h-full w-[8rem]">
            <h3>
              QUI
            </h3>
            <p>09:00 AM</p>
            <p>ÀS</p>
            <p>21:00 PM</p>
          </li>
          <li className="li-horarios mb-4 flex flex-col items-center justify-center h-full w-[8rem]">
            <h3>
              SEX
            </h3>
            <p>09:00 AM</p>
            <p>ÀS</p>
            <p>21:00 PM</p>
          </li>
          <li className="li-horarios mb-4 flex flex-col items-center justify-center h-full w-[8rem]">
            <h3>
              SÁB
            </h3>
            <p>09:00 AM</p>
            <p>ÀS</p>
            <p>21:00 PM</p>
          </li>
          <li className="li-horarios mobile:mb-4 flex flex-col items-center justify-center h-full w-[8rem]">
            <h3>
              DOM
            </h3>
            <p>Fechado</p>
          </li>
        </ul>
        <a 
          type="button"
          href="https://wa.me/message/NU3HUQEFKORMF1"
          target="_blank"
          className="buttons-out flex items-center bg-brand-100 mobile:px-8 mobile:mt-12 tablet:mt-[28rem] px-28 py-2 rounded-md text-black mt-36 hover:cursor-pointer"
        >
          Marque um Horário 
          <span className="ml-4">
            <Chats size={32} />
          </span>
        </a>
      </div>
    </section>
  )
}