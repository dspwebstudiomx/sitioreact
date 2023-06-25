import { useState } from 'react';
import { FaDigitalOcean } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-scroll';

function Navbar() {

    const [nav, setNav] = useState(false)
    const toggleNav = () => setNav(!nav)

    return (
        <header className="h-[80px] flex items-center justify-center bg-black text-white border-b-4 border-lime-300 px-8 fixed w-full z-50">
            <div className="flex  w-full lg:w-[1200px] h-auto items-center justify-between sm:px-10">

                {/* logo */}
                <div id="logo" className='flex items-center gap-3'>
                    <div className="bg-red-500 p-3 border-2 rounded-full text-white">
                        <FaDigitalOcean width={'220px'} />
                    </div>
                    <span className='font-bold'>dspwebstudio</span>

                </div>

                {/* menu */}
                <ul className="hidden lg:flex cursor-pointer">
                    <li className="p-3 hover:border-b-2 hover:border-lime-300 active:text-lime-300">Inicio</li>
                    <li className="p-3 hover:border-b-2 hover:border-lime-300 active:text-lime-300">Servicios</li>
                    <li className="p-3 hover:border-b-2 hover:border-lime-300 active:text-lime-300">Mi Portafolio</li>
                    <li className="p-3 hover:border-b-2 hover:border-lime-300 active:text-lime-300">Contacto</li>
                </ul>

                {/* menu button */}
                <div onClick={toggleNav} className="lg:hidden z-10">
                    <FaBars />
                </div>

                {/* menu mobile*/}
                <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-900"}>
                    <li className="p-3 hover:border-b-2 hover:border-lime-300 active:text-lime-300 cursor-pointer text-3xl">Inicio</li>
                    <li className="p-3 hover:border-b-2 hover:border-lime-300 active:text-lime-300 cursor-pointer text-3xl">Servicios</li>
                    <Link activeClass="active" to="services" spy={true} smooth={true} offset={-80} duration={500} className="p-3 hover:border-b-2 hover:border-lime-300 active:text-lime-300 cursor-pointer text-3xl" onClick={toggleNav} />
                    <li className="p-3 hover:border-b-2 hover:border-lime-300 active:text-lime-300 cursor-pointer text-3xl">Mi Portafolio</li>
                    <li className="p-3 hover:border-b-2 hover:border-lime-300 active:text-lime-300 cursor-pointer text-3xl">Contacto</li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar