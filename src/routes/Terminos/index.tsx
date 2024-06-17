import { useState } from "react";
import { Disclosure } from "../../components/Disclosure";

export const Terminos = () => {
    const terms = [
        {
            title: 'Descripción del servicio',
            description: <div className="w-full h-full text-justify p-2 transition duration-300 ease-in-out">
                <p>Ofrecemos un seguimiento de los locales que pasan por momentos críticos por la crisis de inseguridad que pasa el país. Este servicio debe ser utilizado de manera responsable y con respeto a los términos aquí establecidos.</p>
            </div>
        },
        {
            title: 'Condiciones de uso',
            description: <div className="w-full h-full text-justify p-2 transition duration-300 ease-in-out">
                <p>Los usuarios no podrán compartir información a terceros, ni darle un mal uso a la página. Cualquier violación de estas condiciones resultará en sanciones severas, incluyendo pero no limitado a la suspensión de la cuenta y posibles acciones legales.</p>
            </div>
        },
        {
            title: 'Política de cancelación/terminación',
            description: <div className="w-full h-full text-justify p-2 transition duration-300 ease-in-out">
                <p>En caso de uso indebido, nos reservamos el derecho de bloquear la cuenta del usuario de manera inmediata y sin previo aviso.</p>
            </div>
        },
        {
            title: 'Limitaciones de responsabilidad',
            description: <div className="w-full h-full text-justify p-2 transition duration-300 ease-in-out">
                <p>El dueño de la página no tendrá limitaciones siempre y cuando no se incumplan las normas establecidas. Cualquier intento de eludir estas normas será tratado con la máxima seriedad y puede resultar en acciones legales.</p>
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
                <p className="font-bold text-2xl text-black bg-white px-4 py-1 rounded-md shadow-inner shadow-neutral-800">Terminos y Condiciones</p>
                <div className="flex flex-col items-center justify-center p-3 w-full">
                    {terms.map((d, i) => {
                        return <Disclosure key={i} title={d.title} children={d.description} isOpen={handleOpen(i)} clickEvent={() => handleDisclosureClick(i)} />
                    })}
                </div>
            </div>
        </div>
    )
}