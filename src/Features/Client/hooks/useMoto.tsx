import axios from "axios"
import { MotosRequest } from "../../../Interfaces/MotosRequest";
import getItem, { setItem } from "../../../components/StorageFunctions";
import { UserRequest } from "../../../Interfaces/UserRequest";
import toast from "react-hot-toast";

export const useMoto = () => {
    const api = 'http://localhost:3001/api/motos';
    const userId: UserRequest | null = getItem('user');

    const postMoto = (data: MotosRequest) => {
        const post = axios.post(`${api}/postMoto`, { ...data });
        toast.promise(post, {
            loading: 'Guardando...',
            success: (res) => res.data.msg,
            error: 'Algo sucedio, intente nuevamente',
        })
    }

    const getMotos = () => {
        const motos = axios.get(`${api}/search/${userId!.id}`);
        toast.promise(motos, {
            loading: 'Cargando...',
            success: (res) => {
                setItem('moto', res.data.motosArray);
                return res.data.msg;
            },
            error: 'Algo sucedio, intente nuevamente',
        })
    }

    return { postMoto, getMotos }
}