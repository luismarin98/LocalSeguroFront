import axios from "axios";
import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserRequest";
import getItem from "../../../components/StorageFunctions";
import { UpdatePassword } from "../../../Interfaces/UpdateRequest";

export const useProfile = () => {
    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : '';
    const user: UserRequest | null = getItem('user');

    const updatePass = (data: UpdatePassword) => {
        const putRes = axios.put(`${api}/updatePass/${user!.id}`, { data });
        toast.promise(putRes, {
            loading: 'Actualizando contraseña',
            success: (res) => res.data.msg,
            error: (err) => {
                console.log(err.response.data.Error)
                return err.response.data.msg
            },
        }, { loading: { duration: 2000 } })
    }

    const updatePhoto = (photo: string) => {
        const putPhoto = axios.put(`${api}/updatePhoto/${user!.id}`, { photo });
        toast.promise(putPhoto, {
            loading: 'Actualizando foto',
            success: (res) => res.data.msg,
            error: (err) => {
                console.log(err.response.data.Error)
                return err.response.data.msg
            },
        }, { loading: { duration: 2000 } })
    }

    return { updatePass, updatePhoto }
}