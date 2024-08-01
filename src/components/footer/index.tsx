import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Map from '../ui/Map'
import logo from '../../assets/images/logo.png'
const Footer: React.FC = () => {
    return (
        <footer className="bg-black   text-white p-10 ">
            <div className='container grid grid-cols-1 md:grid-cols-3 gap-8 m-auto '>
                <div className='flex flex-row align-top  justify-between'>
                    <div className=''>
                        <h3 className="uppercase font-bold mb-4 text-[#D96704]">Información</h3>
                        <ul>
                            <li><Link to="/" className="hover:text-[#D96704]">Inicio</Link></li>
                            <li><Link to="/about" className="hover:text-[#D96704]">Sobre Nosotros</Link></li>
                            <li><Link to="/services" className="hover:text-[#D96704]">Servicios</Link></li>
                            <li><Link to="/reservation" className="hover:text-[#D96704]">Reserva</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="uppercase font-bold mb-4 text-center  text-[#D96704]">Síguenos</h3>
                        <ul className="flex space-x-6 text-left">
                            <li>
                                <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF size={24} className="hover:text-[#D96704]" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={24} className="hover:text-[#D96704]" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter size={24} className="hover:text-[#D96704]" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col items-center z-0'>
                    <h3 className="uppercase font-bold mb-4  text-[#D96704]">Nuestra Ubicacion</h3>
                    <Map />
                    <div className='text-left my-2 w-full'>
                        <p>Dirección: Calle Falsa 123, Bogotá</p>
                        <p>Horario: Lunes a Viernes, 9am - 8pm</p>
                        <p>Sábados, 9am - 6pm</p>
                        <p>Teléfono: +57 123 456 7890</p>
                    </div>

                </div>
                <div className="flex flex-col items-center">

                        <img   className='h-[150px] w-[150px]' src={logo} alt="logo" />
             
                </div>


            </div>
        </footer>
    );
}

export default Footer;
