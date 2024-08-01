import React, { useState, ChangeEvent, FormEvent } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario
        console.log('Formulario enviado:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className=" w-full   md:max-w-sm  mx-auto bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Reservar una cita</h2>
            <div className="mb-3">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-1 text-sm">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96704] text-sm"
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-1 text-sm">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96704] text-sm"
                    required
                />
            </div>



            <div className="mb-3">
                <label htmlFor="service" className="block text-gray-700 font-bold mb-1 text-sm">Servicio</label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96704] text-sm"
                    required
                >
                    <option value="">Selecciona un servicio</option>
                    <option value="corte_cabello">Corte de cabello</option>
                    <option value="corte_barba">Corte de barba</option>
                    <option value="afeitado_completo">Afeitado completo</option>
                    <option value="tinte_cabello">Tinte para cabello</option>
                    <option value="tratamiento_capilar">Tratamiento capilar</option>
                    <option value="corte_infantil">Corte infantil</option>
                    <option value="masaje_capilar">Masaje capilar</option>
                    <option value="peinado_eventos">Peinado para eventos</option>
                </select>
            </div>

            <div className='flex flex-row space-x-3'>
                <div className="mb-3 w-50">
                    <label htmlFor="date" className="block text-gray-700 font-bold mb-1 text-sm">Fecha</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className=" px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96704] text-sm"
                        required
                    />
                </div>

                <div className="mb-3 w-[100px]">
                    <label htmlFor="time" className="block text-gray-700 font-bold mb-1 text-sm">Hora</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className=" px-2  py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96704] text-sm"
                        required
                    />
                </div>
                <div className="mb-3">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-1 text-sm">Teléfono</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D96704] text-sm"
                    required
                />
            </div>
            </div>

            <button type="submit" className="w-full bg-[#D96704] text-white py-1 rounded-lg hover:bg-[#8C441B] focus:outline-none focus:ring-2 focus:ring-[#D96704] focus:ring-opacity-50 text-sm">
                Reservar
            </button>
        </form>
    );
};

export default Form;
