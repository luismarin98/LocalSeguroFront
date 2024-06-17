import { useState } from "react";
import { Disclosure } from "../../components/Disclosure";

interface propsDisc {
    title: string;
    children: JSX.Element;
}

export const About = () => {

    const disclosures: propsDisc[] = [
        {
            title: '¿Qué nos inspiró a comenzar este proyecto? ¿Cuál es la visión a largo plazo?',
            children: <div className="w-full h-full text-justify p-2 transition duration-300 ease-in-out">
                <p>
                    El proyecto Local Seguro nace de la necesidad de brindar a la ciudadanía una herramienta que les permita sentirse más seguros en sus comunidades. La inseguridad es un problema que afecta a todos los niveles de la sociedad, y es especialmente preocupante en las zonas más vulnerables.
                </p>
            </div>
        },
        {
            title: '¿Qué hace que Local Seguro sea diferente de otras iniciativas de seguridad ciudadana?',
            children: <div className="w-full h-full text-justify p-2 transition duration-300 ease-in-out">
                <p>
                    Local Seguro se diferencia de otras iniciativas de seguridad ciudadana en que se basa en la colaboración entre vecinos. No se trata de una herramienta que se impone desde arriba, sino que se construye desde la base.
                </p>
            </div>
        },
        {
            title: '¿Cómo puedo colaborar con Local Seguro?',
            children: <div className="w-full h-full text-justify p-2 transition duration-300 ease-in-out">
                <p>
                    Hay muchas maneras de colaborar con Local Seguro. Puedes unirte a la red, crear un grupo de vecinos en tu comunidad, compartir información sobre la seguridad en tu zona, o simplemente correr la voz sobre el proyecto.
                </p>
            </div>
        }
    ];

    const [openDisclosureIndex, setOpenDisclosureIndex] = useState<number | null>(null);

    const handleDisclosureClick = (index: number) => {
        setOpenDisclosureIndex(index);
    };

    const handleOpen = (index: number): boolean => index === openDisclosureIndex ? true : false;

    return (
        <div className="w-full h-full p-3">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <p className="font-bold text-2xl text-black bg-white px-4 py-1 rounded-md shadow-inner shadow-neutral-800">Nosotros</p>
                <div className="flex flex-col items-center justify-center p-3 w-full">
                    {disclosures.map((d, i) => {
                        return <Disclosure key={i} title={d.title} children={d.children} isOpen={handleOpen(i)} clickEvent={() => handleDisclosureClick(i)} />
                    })}
                </div>
            </div>
        </div >
    )
}