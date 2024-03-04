import axios from "axios";
import { LocalsRequest } from "../../../Interfaces/LocalRequest";
import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserRequest";
import getItem, { setItem } from "../../../components/StorageFunctions";

export const useLocal = () => {
    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/locals';
    const user: UserRequest | null = getItem('user');

    const postLocal = async (data: LocalsRequest) => {
        const postLocal = axios.post(`${api}/save`, { ...data });
        toast.promise(postLocal, {
            loading: 'Guardando informacion',
            success: (res) => res.data.msg,
            error: 'Algo ha sucedido, intente nuevamente',
        }, { loading: { duration: 2000 } });
    }

    const getLocals = async () => {
        const find = axios.get(`${api}/search/${user!.id}`);
        toast.promise(find, {
            loading: 'Cargando locales...',
            success: (res) => {
                setItem('locals', res.data.localsArray);
                window.location.reload();
                return res.data.msg;
            },
            error: 'Algo sucedio, intente nuevamente',
        }, { loading: { duration: 2000 } })
    }

    return { postLocal, getLocals }
}