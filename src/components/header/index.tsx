
import 'animate.css';
import logo from '../../assets/images/logo.png';
const Header = () => {
    return (
        <header className="relative bg-cover bg-center h-[100vh] text-white bg-[url('/src/assets/baner.jpg')] flex items-center justify-center">
            {/* Capa de superposición */}
            <div className="absolute inset-0 bg-black opacity-50 z-5"></div>

            {/* Contenido del encabezado */}
            <div className="relative text-center z-10 px-4 ">
                <div className='w-full flex justify-center'>
                    <img className='w-80' src={logo} alt="logo" />
                </div>

                {/* Animación para el texto */}

                <h1 className="text-4xl  md:text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s animate__animated animate__fadeInUp">
                    Bienvenido a El Corte De Oro, donde cada corte es una obra de arte
                </h1>
                {/* Animación para el botón */}
                <button className="bg-[#D96704] m-5 hover:bg-[#5f3715] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transform transition-transform duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-2s animate__bounceIn">
                    Reserva tu cita
                </button>
            </div>
        </header>
    );
}

export default Header;
