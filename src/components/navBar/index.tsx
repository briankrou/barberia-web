import React from 'react';
import { HiMenu } from 'react-icons/hi';
import useNavbarToggle from '../../hooks/useNavbarToggle'; // Ajusta la ruta según tu estructura de archivos
import Sidebar from '../sidebar/index'; // Ajusta la ruta según tu estructura de archivos
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Navbar: React.FC = () => {
    const { isOpen, toggleMenu } = useNavbarToggle();

    return (
        <>
            <nav className="fixed bg-[#0D0D0D] text-white w-full">
                <div className="flex items-center space-x-4 justify-between p-6">
                    <div className="flex flex-col items-center">
                        <img className='h-[80px] w-[80px]' src={logo} alt="logo" />
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-white">
                            <HiMenu size={30} />
                        </button>
                    </div>
                    <div className="hidden md:flex justify-between w-full">
                        <div className="text-sm flex flex-col md:flex-row space-x-4 mx-auto">
                            <Link to="/" className="block text-3xl md:mt-0 text-[#D96704] hover:text-[#F29F05]">
                                Inicio
                            </Link>
                            <Link to="/nosotros" className="block text-3xl md:mt-0 text-[#D96704] hover:text-[#F29F05]">
                                Sobre Nosotros
                            </Link>
                            <Link to="#services" className="block text-3xl md:mt-0 text-[#D96704] hover:text-[#F29F05]">
                                Servicios
                            </Link>
                            <Link to="/reservar" className="block text-3xl md:mt-0 text-[#D96704] hover:text-[#F29F05]">
                                Reserva
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Componente Sidebar */}
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
        </>
    );
}

export default Navbar;
