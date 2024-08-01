import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Galey from '../components/ui/galery'
import Form from '../components/form'
import data from '../model/services'
const Nosotros: React.FC = () => {
    const servicesRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#services" && servicesRef.current) {
            servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);


    // Definición del componente Card con tipos correctos
    const Card = ({
        titulo,
        descripcion,
        precio,
        img
    }: {
        titulo: string;
        descripcion: string;
        precio: number;
        img: string;
    }) => {
        return (
            <div className='shadow-lg bg-white rounded-lg overflow-hidden w-full border border-gray-200'>
                <img src={img} alt="Peluquería" className="w-full h-48 " />
                <div className="p-4">
                    <h3 className='font-nunito font-black text-xl mb-4'>{titulo}</h3>
                    <p className='text-[#646273]-600 text-sm mb-2'>{descripcion}</p>
                    <p className='text-[#8C441B] font-semibold'>Precio: ${precio}</p>
                </div>
            </div>
        );
    };

    return (
        <div className='bg-[#ebe8e6] pt-28'>
            <div className=' mx-auto px-4 py-6 flex  flex-col justify-center'>
                <section className='bg-gray-50 py-12 px-6'>
                    <div className='container mx-auto'>
                        <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>
                            Sobre Nosotros
                        </h2>
                        <p className='text-lg text-gray-700 mb-8'>
                            Nuestra misión es ofrecer a cada cliente una experiencia única y personalizada que resalte su belleza y estilo. Desde nuestro humilde comienzo , nos hemos comprometido a brindar servicios de peluquería excepcionales en un ambiente acogedor y profesional.
                        </p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <article className='font-nunito bg-white p-6 rounded-lg shadow-lg'>
                                <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
                                    Nuestro Equipo
                                </h3>
                                <p className='text-md text-gray-600'>
                                    Nuestro equipo de estilistas altamente capacitados y apasionados está siempre a la vanguardia de las últimas tendencias y técnicas en peluquería. Cada miembro de nuestro equipo trae consigo años de experiencia y un profundo conocimiento de la moda y el cuidado del cabello. Nos enorgullecemos de nuestro enfoque personalizado, adaptándonos a las necesidades y preferencias individuales de cada cliente.
                                </p>
                            </article>
                            <Galey />
                        </div>
                    </div>
                </section>


                {/* Sección de Tarjetas */}

                <section ref={servicesRef} id="services" className='bg-gray-100 py-12'>
                    <div className='container mx-auto px-4 md:px-8'>
                        <h2 className='text-4xl font-extrabold text-center text-gray-900 mb-12'>
                            Nuestros Servicios
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
                            {data.map((item, index) => (
                                <Card
                                    key={index}
                                    titulo={item.titulo}
                                    descripcion={item.descripcion}
                                    precio={item.precio}
                                    img={item.img}
                                />
                            ))}
                        </div>
                    </div>
                </section>



                <div className='grid grid-cols-1 md:grid-cols-2  my-10'>
                    <div className='flex justify-center items-center py-5 md:p-5'>
                        <video
                            autoPlay
                            loop
                            muted
                            className='w-full max-w-lg rounded-xl shadow-xl border-3 border-[#D96704]'
                            src="src/assets/video_001.mp4"
                        ></video>
                    </div>
                    <div className=' flex justify-center items-start'>
                        <div className=' border border-gray-200 w-full max-w-lg'>
                            <Form />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Nosotros;
