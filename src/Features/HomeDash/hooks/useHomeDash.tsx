import { UserRequest } from "../../../Interfaces/UserRequest";
import getItem, { removeItem, setItem } from "../../../components/StorageFunctions";
import { LocalsRequest } from "../../../Interfaces/LocalRequest";
import toast from "react-hot-toast";
import axios from "axios";

export const useHomeDash = () => {
    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/users';
    const userData: UserRequest | null = getItem('user');

    const getUserData = async () => {
        debugger
        await axios.get<UserRequest | undefined>(`${api}/home/?id=${userData!.id}`).then((res) => {
            removeItem('user');
            setItem('user', res.data);
        }).catch((err) => {
            console.error(err);
        })
    }

    const getLocals = async (id: string) => {
        const res = axios.get<LocalsRequest[]>(`${api}/locals/?id=${id}`)
        toast.promise(res, {
            loading: 'Cargando historial de datos agregados',
            success: (res) => {
                removeItem('locals');
                setItem('locals', res.data[0]);
                document.location.reload();
                return 'Historial actualizado';
            },
            error: 'Algo ha sucedido, intente nuevamente'
        }, { loading: { duration: 2000 } })
    }

    return { getUserData, getLocals }
}