import { MotosRequest } from "../../../Interfaces/MotosRequest";
import { setItem, getItem } from "../../../components/StorageFunctions";
import { UserRequest } from "../../../Interfaces/UserRequest";
import toast from "react-hot-toast";
import axios from "axios";

export const useMoto = () => {
    const api = process.env.REACT_APP_API_MOTOS ? process.env.REACT_APP_API_MOTOS : 'http://localhost:3001/api/motos';
    const userId: UserRequest | null = getItem('user');

    const postMoto = (data: MotosRequest) => {
        const post = axios.post(`${api}/save`, { ...data });
        toast.promise(post, {
            loading: 'Guardando...',
            success: (res) => res.data.msg,
            error: (err) => {
                console.log(err.response.data.Error)
                return err.response.data.msg
            }
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
            error: (err) => {
                console.log(err.response.data.Error)
                return err.response.data.msg
            }
        })
    }

    return { postMoto, getMotos }
}