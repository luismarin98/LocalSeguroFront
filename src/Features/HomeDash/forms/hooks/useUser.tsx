import axios from "axios"
import { UserRequest } from "../../../../Interfaces/UserRequest"
import { setItem } from "../../../../components/StorageFunctions";
import toast from "react-hot-toast";

export const useUser = () => {

    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/users/relativity';
    const getUser = async (id: number) => {
        const res = axios.get<UserRequest[] | null>(`${api}/${id}`);
        toast.promise(res, {
            loading: 'Cargando usuarios',
            success: (res) => {
                setItem('users', res.data);
                return 'Actualizacion exitosa';
            },
            error: 'algo sucedio, intente nuevamente',
        }, {
            loading: {
                duration: 2000
            }
        })
    }

    return { getUser }
}