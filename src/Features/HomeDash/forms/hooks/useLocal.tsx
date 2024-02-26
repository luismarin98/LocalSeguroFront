import axios from "axios";
import { LocalsRequest } from "../../../../Interfaces/LocalRequest";
import toast from "react-hot-toast";
import { UserRequest } from "../../../../Interfaces/UserRequest";
import getItem from "../../../../components/StorageFunctions";

export const useLocal = () => {
    const api = process.env.REACT_APP_API_LOCALS ? process.env.REACT_APP_API_LOCALS : 'http://localhost:3001/api/users/locals';
    const userLocal: UserRequest | null = getItem('user');

    const postLocal = async (data: LocalsRequest) => {
        const postLocal = axios.post(`${api}/${userLocal!.id}`, { ...data });
        toast.promise(postLocal, {
            loading: 'Guardando informacion',
            success: (res) => res.data.msg,
            error: 'Algo ha sucedido, intente nuevamente',
        });
    }

    return { postLocal }
}