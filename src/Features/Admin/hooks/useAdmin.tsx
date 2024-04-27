import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { getSession } from "../../../components/StorageFunctions";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { SearchRequest } from "../../../Interfaces/SearchRequest";
import { useState } from "react";
import { ActData } from "../../../Interfaces/ActivityRequest";
import { useDispatch } from "react-redux";
import { list_users } from "../../../Redux/User/user.slice";
import { ACT_REST, ApiMsg, User_REST } from "../../../components/AxiosConfig";

export const useAdmin = () => {
    const [userId, setUserId] = useState<number>(0);
    const dispatch = useDispatch();

    const user: UserRequest | null = getSession('user');

    const postUser = (data: UserRequest) => {
        const postU = User_REST.postUser(user!.id, data);
        toast.promise(postU, {
            loading: 'Registrando nuevo usuario...',
            success: (res) => {
                (
                    async () => {
                        const actData: ActData = {
                            id: Math.floor(Math.random() * 1000000),
                            id_admin: user!.me_register,
                            photo: user!.photo,
                            type: 'Add User',
                            username: user!.username,
                            email: user!.email,
                            phone: user!.phone.toString(),
                            id_user: user!.id,
                            id_obj: data.id
                        }
                        ACT_REST.saveAct(actData);
                    }
                )()
                return res.data.msg
            },
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg,
        }, { loading: { duration: 2000 } })
    }

    const getUsers = (search: SearchRequest) => {
        const filterApi = `/get-${search.filtro === true || search.filtro === false ? 'rol' : search.nombre !== '' ? 'name' : 'users'}/${user!.id}/${search.filtro === true || search.filtro === false ? `?isAdmin=${search.filtro}` : search.nombre !== '' ? `?username=${search.nombre}` : ''}`;
        const get = User_REST.getUsers(filterApi);
        toast.promise(get, {
            loading: 'Filtrando...',
            success: (res) => {
                dispatch(list_users(res.data.usersArray))
                return res.data.msg;
            },
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg,
        }, { loading: { duration: 2000 } })
    }

    const editUser = (data: UserRequest) => {
        const update = User_REST.editUser(data.id, data)
        toast.promise(update, {
            loading: 'Actualizando datos...',
            success: (res) => res.data.msg,
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg,
        }, { loading: { duration: 2000 } })
    }

    const deleteUser = () => {
        const del = User_REST.deleteUser(userId)
        toast.promise(del, {
            loading: 'Eliminando usuario...',
            success: (res) => {
                setUserId(0);
                return res.data.msg;
            },
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg,
        }, { loading: { duration: 2000 } })
    }

    return { getUsers, postUser, editUser, deleteUser, setUserId, userId };
}