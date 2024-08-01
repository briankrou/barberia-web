import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleMenu }) => {
    return (
        <div
            className={`fixed inset-0 bg-[#0D0D0D] opacity-90  text-white md:hidden transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-20`}
        >
            <div className="flex flex-col p-6 space-y-4">
                <button onClick={toggleMenu} className="text-white text-3xl self-end">
                    &times;
                </button>
                <Link to="/item1" className="text-xl text-[#D96704] hover:text-[#F29F05]">
                    Inicio
                </Link>
                <Link to="/item2" className="text-xl text-[#D96704] hover:text-[#F29F05]">
                    Sobre Nosotros
                </Link>
                <Link to="/#service" className="text-xl text-[#D96704] hover:text-[#F29F05]">
                    Servicios
                </Link>
                <Link to="/item4" className="text-xl text-[#D96704] hover:text-[#F29F05]">
                    Reserva
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
