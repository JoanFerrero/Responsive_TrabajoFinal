import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";

const MainPage = () => {
  return (
    <section className="w-full bg-[url('https://tailframes.com/images/squares-bg.webp')]">
      <div className="flex">
        <div className="w-full min-[1220px]:w-1/3 overflow-hidden">
          <aside className="w-64 text-black-500 m-8">
            <ul>
              <li className="py-2 px-4 font-black items-center"> <BiSolidUser size={30}/> Mi cuenta <MdKeyboardArrowDown size={30} /> <MdKeyboardArrowUp size={30} /></li>
              <li className="py-2 px-4">Mis datos</li>
              <li className="py-2 px-4">Mis notificaciones</li>
              <li className="py-2 px-4">Mis viajes</li>
              <li className="py-2 px-4">Mis incidencias</li>
            </ul>
          </aside>
        </div>
        <div className="hidden  min-[1220px]:block w-2/3 h-screen overflow-hidden"> 
          <h1>Hola</h1>
        </div>
      </div>
    </section>
  )
}

export default MainPage;