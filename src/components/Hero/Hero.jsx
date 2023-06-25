import { Link } from 'react-scroll'
import Lottie from 'lottie-react'
import HeroLottie from "./hero.json"

const Hero = () => {

    const style = {
        height: '400px',
    }

    return (
        <section className='w-full h-[100vh] sm:h-auto bg-slate-900 lg:px-6 py-12 lg:py-12 flex  flex-col justify-center items-start text-white lg:h-[100vh]'>

            {/* Contendor */}
            <div className=" w-[85vw] lg:w-[900px] m-auto grid grid-cols-1  sm:grid-cols-2 sm:gap-10 mt-28">
                {/* Descripción */}
                <div className='flex flex-col justify-center'>
                    {/* Descrición */}
                    <p className='text-small'>Hola soy Daniel,</p>
                    <h1 className='font-bold text-2xl md:text-3xl text-lime-300 animate__animated animate__bounce uppercase'>Diseñador y Desarrollador Web</h1>
                    <br />
                    <p className='text-xl text-slate-100'>
                        Estoy aquí para crear una presencia en línea única y funcional para tu negocio. Comencemos a hacer realidad tu visión web juntos.
                    </p>
                    <br />

                    {/* Botones */}
                    <div className="w-[75%] md:w-full  mx-auto md:ml-0 grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 mt-20 md:mt-8 px-6">

                        <Link activeClass="active" to="DiseñoWeb" spy={true} smooth={true} offset={-200} duration={500} className='bg-lime-400 text-black hover:bg-lime-300 rounded-md  w-full md:w-auto sm:py-2 sm:px-4 p-4 cursor-pointer text-center'>Servicios</Link>

                        <Link activeClass="active" to="servicios2" spy={true} smooth={true} offset={-200} duration={500} className='bg-pink-500 rounded  w-full md:w-auto sm:py-2 sm:px-4 p-4 cursor-pointer text-center'>Portafolio</Link>
                    </div>
                </div>

                {/* Imagen */}
                <div className="sm:flex justify-center align-middle hidden">
                    <Lottie animationData={HeroLottie} loop={true} style={style} />
                </div>
            </div >

        </section >
    )
}

export default Hero