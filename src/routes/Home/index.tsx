import { useEffect } from "react"
import { UserRequest } from "../../Interfaces/UserRequest"
import { getItem } from "../../components/StorageFunctions"
import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const user: UserRequest | null = getItem('user');
        if (user !== null) return navigate('/dashboard');
    }, [])
    
    return (
        <div className="flex flex-col gap-3 items-center justify-center h-screen">
            <p className="text-3xl text-center">Bienvenid@ a tu pagina "Local Seguro"</p>
        </div>
    )
}