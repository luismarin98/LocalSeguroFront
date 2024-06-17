import { useEffect } from "react"
import { UserRequest } from "../../Interfaces/UserRequest"
import { getSession } from "../../components/StorageFunctions"
import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const user: UserRequest | null = getSession('user');
        if (user) return navigate(`/dashboard/${user!.username}`);
    }, [navigate])

    const listThigns = [
        {
            title: 'Listado de Locales Certificados',
            description: 'Explora nuestra base de datos para encontrar locales que han sido evaluados y certificados por la Policía Nacional. Estos establecimientos cumplen con los requisitos de seguridad y están comprometidos con la protección de sus clientes y empleados'
        },
        {
            title: 'Información Detallada',
            description: 'Obtén detalles sobre las medidas de seguridad implementadas en cada local. Desde sistemas de vigilancia hasta protocolos de emergencia, te proporcionamos información completa para que puedas tomar decisiones informadas'
        },
        {
            title: 'Reporte de Incidentes',
            description: 'Si eres testigo de algún incidente en un local, puedes reportarlo directamente a través de nuestra plataforma. Tu contribución es fundamental para mantener la seguridad de nuestra comunidad'
        },
        {
            title: 'Recursos Adicionales',
            description: 'Además de la información sobre locales seguros, también ofrecemos consejos de seguridad, recomendaciones para prevenir situaciones de riesgo y enlaces a otras dependencias de la Policía Nacional'
        }
    ]

    return <div className="w-full h-full text-white p-5">
        <div className="flex flex-col justify-center items-center gap-4 h-full w-full p-4">
            <div className="w-full h-full md:w-5/6 flex flex-col justify-center items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-building-store"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l18 0" /><path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" /><path d="M5 21l0 -10.15" /><path d="M19 21l0 -10.15" /><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" /></svg>
                <p className="text-xl font-bold text-justify">Bienvenidos a nuestra Plataforma de "Local Seguro"</p>
                <p className='text-lg text-justify'>En esta plataforma, la Policía Nacional se compromete a garantizar la seguridad de todos los ciudadanos. Aquí encontrarás información actualizada sobre los locales que cumplen con los estándares de seguridad y protección.</p>
            </div>
            <div className="p-2 rounded-md w-full h-full">
                <div className="w-full h-full flex flex-col gap-3 items-center justify-between">
                    <p className="text-lg text-center">¿Qué encontrarás en nuestra plataforma?</p>
                    <div className="h-full w-full p-3">
                        <div className="overflow-x-auto grid grid-rows-1 grid-flow-col gap-4 w-full h-full">
                            {
                                listThigns.map((data, i) => (
                                    <div className="bg-white text-black rounded-md p-2 flex flex-col gap-2 items-center justify-center w-[30vh] md:w-full h-full" key={i}>
                                        <p className="font-semibold text-lg text-center">{data.title}</p>
                                        <p className="text-sm text-justify">{data.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}



