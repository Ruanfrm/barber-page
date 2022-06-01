export function Horarios() {
  return(
    <section className="h-screen section-horarios">
      <h1>Horários de funcionamento</h1>
      <div className="border border-red-400 m-auto h-[10rem] w-[900px]">
        <ul className="flex h-full">
          <li className="border border-red-400 flex flex-col items-center justify-center h-full w-[8rem]">
            <h3>
              SEG
            </h3>
            <p>Fechado</p>
          </li>
          <li className="border border-red-400 flex flex-col items-center justify-center h-full w-[8rem]">
            <h3>
              TER
            </h3>
            <p>09:00 AM</p>
            <p>ÀS</p>
            <p>21:00 PM</p>
          </li>
          <li className="border border-red-400 flex flex-col items-center justify-center h-full w-[8rem]">
            <h3>
              QUA
            </h3>
            <p>09:00 AM</p>
            <p>ÀS</p>
            <p>21:00 PM</p>
          </li>
          <li className="border border-red-400 flex flex-col items-center justify-center h-full w-[8rem]">
            <h3>
              QUI
            </h3>
            <p>09:00 AM</p>
            <p>ÀS</p>
            <p>21:00 PM</p>
          </li>
          <li className="border border-red-400 flex flex-col items-center justify-center h-full w-[8rem]">
            <h3>
              SEX
            </h3>
            <p>09:00 AM</p>
            <p>ÀS</p>
            <p>21:00 PM</p>
          </li>
          <li className="border border-red-400 flex flex-col items-center justify-center h-full w-[8rem]">
            <h3>
              SÁB
            </h3>
            <p>09:00 AM</p>
            <p>ÀS</p>
            <p>21:00 PM</p>
          </li>
          <li className="border border-red-400 flex flex-col items-center justify-center h-full w-[8rem]">
            <h3>
              DOM
            </h3>
            <p>Fechado</p>
          </li>
        </ul>
      </div>
    </section>
  )
}