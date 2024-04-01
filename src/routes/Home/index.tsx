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
    
    return (
        <div className="flex flex-col gap-3 items-center justify-center h-screen w-screen p-2">
            <p className="text-6xl text-center">Hola!</p>
            <p className="text-xl text-center">Bienvenid@ a la pagina "Local Seguro"</p>
            <p className='text-md text-center'>Esta no es una pagina oficial de la policia nacional</p>
            <p className="text-md text-center">ya que es una pagina dedicada para el estudio</p>
            <p className="text-sm text-center">Att. El desarrollador</p>
        </div>
    )
}