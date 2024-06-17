import { useState } from "react";
import { Disclosure } from "../../components/Disclosure";

export const Privacidad = () => {

    const policys = [
        {
            title: 'Información que recopilamos',
            description: <div className="w-full h-full text-justify p-2 transition duration-300 ease-in-out">
                <p>En “Local Seguro”, operado por la Policía Nacional del Ecuador, recopilamos información personal del usuario, incluyendo pero no limitado a nombres, DNI, correo electrónico, teléfono, y otros datos necesarios. Esta información será almacenada en nuestra base de datos y se mantendrá en la más estricta confidencialidad.</p>
            </div>
        },
        {
            title: 'Uso de la información',
            description: <div className="w-full h-full text-justify p-2 transition duration-300 ease-in-out">
                <p>La información recopilada se utilizará exclusivamente para propiedades de interacción de la página y otros fines relacionados con el servicio que ofrecemos. Cualquier uso adicional de la información estará sujeto a la aprobación explícita del usuario.</p>
            </div>
        },
        {
            title: 'Compartir información',
            description: <div className="w-full h-full text-justify p-2 transition duration-300 ease-in-out">
                <p>Bajo ninguna circunstancia compartiremos la información del usuario con terceros.</p>
            </div>
        },
        {
            title: 'Opciones del usuario',
            description: <div className="w-full h-full text-justify p-2 transition duration-300 ease-in-out">
                <p>Los usuarios no pueden compartir información sobre la página. Cualquier intento de hacerlo resultará en una suspensión inmediata y posiblemente en acciones legales.</p>
            </div>
        },
        {
            title: 'Seguridad',
            description: <div className="w-full h-full text-justify p-2 transition duration-300 ease-in-out">
                <p>Utilizamos la mejor lógica en programación y tecnología para garantizar la seguridad de la información del usuario. Cualquier violación de la seguridad será tratada con la máxima seriedad y puede resultar en acciones legales.</p>
            </div>
        }
    ]

    const [openDisclosureIndex, setOpenDisclosureIndex] = useState<number | null>(null);

    const handleDisclosureClick = (index: number) => {
        setOpenDisclosureIndex(index);
    };

    const handleOpen = (index: number): boolean => index === openDisclosureIndex ? true : false;

    return (
        <div className="w-full h-full p-3">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <p className="font-bold text-2xl text-black bg-white px-4 py-1 rounded-md shadow-inner shadow-neutral-800">Politicas de Privacidad</p>
                <div className="flex flex-col items-center justify-center p-3 w-full">
                    {policys.map((d, i) => {
                        return <Disclosure key={i} title={d.title} children={d.description} isOpen={handleOpen(i)} clickEvent={() => handleDisclosureClick(i)} />
                    })}
                </div>
            </div>
        </div>
    )
}