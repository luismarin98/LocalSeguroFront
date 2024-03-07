import axios from "axios";
import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserRequest";
import getItem, { removeItem, setItem } from "../../../components/StorageFunctions";
import { UpdatePassword } from "../../../Interfaces/UpdateRequest";
import { PhotoRequest } from "../../../Interfaces/PhotoRequest";

export const useProfile = () => {
    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/user';
    const user: UserRequest | null = getItem('user');

    const updatePass = (data: UpdatePassword) => {
        const putRes = axios.put(`${api}/updatePass/${user!.id}`, { data });
        toast.promise(putRes, {
            loading: 'Actualizando contraseña',
            success: (res) => res.data.msg,
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } })
    }

    const updatePhoto = (data: PhotoRequest) => {
        const putPhoto = axios.put(`${api}/updatePhoto/${user!.id}`, { data });
        toast.promise(putPhoto, {
            loading: 'Actualizando foto',
            success: (res) => {
                axios.get(`${api}/search/${user!.id}`).then((res) => setItem('user', res.data.userData));
                return res.data.msg;
            },
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } })
    }

    return { updatePass, updatePhoto }
}