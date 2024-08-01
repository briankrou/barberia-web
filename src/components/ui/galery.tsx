import React, { useState, useEffect } from 'react';
import fot from '../../assets/images/001.jpg';

// Datos de las imágenes para el carrusel
const images = [
    fot,
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
    // Añadir más imágenes si es necesario
];

const Galery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambia de imagen cada 3 segundos

        return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
    }, []);

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setSelectedIndex(index);
    };

    return (
        <div className="bg-black p-6 rounded-lg">
            {/* Imagen Principal con cambio automático */}
            <div className="mb-6">
                <img
                    className="w-full h-64 object-cover rounded-lg shadow-lg border-3 border-[#D96704]"
                    src={images[currentIndex]}
                    alt={`Gallery Image ${currentIndex + 1}`}
                />
            </div>

            {/* Miniaturas de Imágenes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`overflow-hidden rounded-lg cursor-pointer ${selectedIndex === index ? 'border-4 border-[#D96704]' : ''}`}
                        onClick={() => handleImageClick(index)}
                    >
                        <img
                            className="w-full h-32 object-cover rounded-lg"
                            src={src}
                            alt={`Gallery Thumbnail ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Galery;
