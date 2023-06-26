/*
Sección: Diseño Web
Desarrollado por: Daniel Pérez
dspwebstudio.com
Fecha: 23/06/2023
*/
//import Lottie from "lottie-react";
//import DesarrolloWeb from "./DesarrolloWeb.json"


export const WebDevelopment = () => {

    return (
        <div id="DesarrolloWeb">


            {/* Diseño Web */}
            <section className=' flex justify-center text-slate-900 pt-20 pb-24 md:h-[65h]'>
                <div className="container grid md:grid-cols-2 w-[70vw] xl:w-[60vw] justify-center align-middle">

                    {/* Título */}
                    <div className="flex flex-col self-center lg:mb-0">
                        <h2 className="font-bold uppercase text-[36px] text-center sm:text-left text-blue-900" style={{ letterSpacing: '1px' }}>Desarrollo Web</h2>
                        <div className="">
                            {/* <Lottie animationData={DesarrolloWeb} loop={true} style={{ width: '250px' }} /> */}
                        </div>
                    </div>

                    {/* Texto Descriptivo */}
                    <div className="h-auto w-auto flex justify-center align-middle">
                        <p className="text-lg">
                            <span className="font-bold">
                                ¡Déjanos crear el sitio web perfecto para tu negocio!
                            </span> Nuestro servicio de Diseño Web combina creatividad y funcionalidad para transmitir tu mensaje de manera efectiva. Nos encargamos de cada detalle, desde el diseño atractivo hasta la navegación intuitiva, para brindar una experiencia agradable a tus clientes. Simplifica tu presencia en línea con un sitio web que refleje la esencia de tu marca y te ayude a destacar en el mundo digital.
                            <br /><br />
                            <a className="font-bold cursor-pointer hover:text-blue-700 text-2xl" href="#">
                                ¡Contáctanos y déjanos hacer realidad tu visión!
                            </a>

                        </p>
                    </div>

                </div>
            </section >

        </div>
    )
}