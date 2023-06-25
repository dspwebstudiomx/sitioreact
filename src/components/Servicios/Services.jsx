
const Services = () => {
    return (

        <section className="w-full h-auto lg:h-screen  text-slate-50 bg-slate-900 px-6 sm:px-16 gap-6 py-16">
            <h2 className="text-center text-3xl mb-14 mx-auto  w-[200px] border-b-2 border-lime-300 pb-4 text-slate-100">Mis Servicios</h2>

            {/* Tarjetas */}
            <div id="services" className="w-full lg:w-[1440px] h-auto grid sm:grid-cols-2 xl:grid-cols-4 gap-7 self-center">


                {/* Diseño Web */}
                <div className="p-7 bg-pink-500 flex flex-col gap-4 items-start rounded-lg">
                    <h1 className="text-xl">Diseño Web</h1>
                    <p>Transformo tus ideas en una experiencia web impresionante. Diseño web a medida, moderno y funcional que cautivará a tus visitantes.
                    </p>
                    <button className="hover:bg-pink-600 px-4 py-2 border border-slate-50 rounded-sm mt-4">Ver más</button>
                </div>

                {/* Desarrollo Web */}
                <div className="p-7 bg-sky-600 flex flex-col gap-4 items-start rounded-lg">
                    <h1 className="text-xl">Desarrollo Web</h1>
                    <p>Convierto tu visión en un sitio web interactivo y potente. Desarrollo web personalizado, optimizado y adaptado a tus necesidades. Juntos, llevaremos tu presencia en línea al siguiente nivel.
                    </p>
                    <button className="hover:bg-sky-700 px-4 py-2 border  border-slate-50 rounded-sm mt-4">Ver más</button>
                </div>

                {/* Posicionamiento */}
                <div className="p-7 bg-violet-700 flex flex-col gap-4 items-start rounded-lg">
                    <h1 className="text-xl">Posicionamiento</h1>
                    <p>Haz que tu negocio destaque en los motores de búsqueda. Aumento de visibilidad, tráfico orgánico y resultados duraderos con mi servicio de posicionamiento web. ¡Consigue más clientes y crece en línea!
                    </p>
                    <button className="hover:bg-violet-900 px-4 py-2 border  border-slate-50 rounded-sm mt-4">Ver más</button>
                </div>

                {/* Mantenimiento */}
                <div className="p-7 bg-lime-400 flex flex-col gap-4 items-start rounded-lg border-4 border-lime-700">
                    <h1 className="text-xl">Mantenimiento</h1>
                    <p>Mantén tu sitio web actualizado, seguro y funcionando sin problemas. Mi servicio de mantenimiento web te brinda tranquilidad y tiempo para enfocarte en tu negocio principal. ¡Cuenta conmigo para cuidar de tu presencia en línea!
                    </p>
                    <button className="hover:bg-lime-500 px-4 py-2 border border-slate-50 mt-4  rounded-sm">Ver más</button>
                </div>
            </div>

        </section>
    )
}

export default Services