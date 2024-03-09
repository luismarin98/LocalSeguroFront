import toast from "react-hot-toast";
import axios from "axios";
import getItem, { setItem } from "../../../components/StorageFunctions";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { SearchRequest } from "../../../Interfaces/SearchRequest";
import { useState } from "react";

export const useAdmin = () => {
    const [userId, setUserId] = useState<number>(0);

    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/user';
    const user: UserRequest | null = getItem('user');

    const postUser = (data: UserRequest) => {
        const postU = axios.post(`${api}/post-user/${user!.id}`, { ...data });
        toast.promise(postU, {
            loading: 'Registrando nuevo usuario...',
            success: (res) => res.data.msg,
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } })
    }

    const getUsers = (search: SearchRequest) => {
        const filterApi = `${api}/get-${search.filtro === true || search.filtro === false ? 'rol' : search.nombre !== '' ? 'name' : 'users'}/${user!.id}/${search.filtro === true || search.filtro === false ? `?isAdmin=${search.filtro}` : search.nombre !== '' ? `?username=${search.nombre}` : ''}`;
        const get = axios.get(filterApi);
        toast.promise(get, {
            loading: 'Filtrando...',
            success: (res) => {
                setItem('users', res.data.usersArray);
                window.location.reload();
                return res.data.msg;
            },
            error: (err) => {
                setItem('users', []);
                window.location.reload();
                return err.response.data.msg;
            },
        }, { loading: { duration: 2000 } })
    }

    const editUser = (data: UserRequest) => {
        const update = axios.put(`${api}/update/${data.id}`, { ...data });
        toast.promise(update, {
            loading: 'Actualizando datos...',
            success: (res) => res.data.msg,
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } })
    }

    const deleteUser = () => {
        const del = axios.delete(`${api}/delete/${userId}`);
        toast.promise(del, {
            loading: 'Eliminando usuario...',
            success: (res) => {
                setUserId(0);
                return res.data.msg;
            },
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } })
    }

    return { getUsers, postUser, editUser, deleteUser, setUserId, userId };
}