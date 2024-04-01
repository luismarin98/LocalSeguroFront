import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { getSession, setItem } from "../../../components/StorageFunctions";
import { UpdatePassword } from "../../../Interfaces/UpdateRequest";
import { PhotoRequest } from "../../../Interfaces/PhotoRequest";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLocal } from "../../../Redux/Local/locals.slice";
import { setMoto } from "../../../Redux/Moto/moto.slice";
import { setUser } from "../../../Redux/User/user.slice";
import { ApiMsg, Local_REST, Moto_REST, User_REST } from "../../../components/AxiosConfig";

export const useProfile = () => {

    const user: UserRequest | null = getSession('user');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getLocals = async () => {
        const get = await Local_REST.get(user!.id);
        dispatch(setLocal(get.data.localsArray))
    }

    const getMotos = async () => {
        const get = await Moto_REST.getMotos(user!.id);
        dispatch(setMoto(get.data.motosArray))
    }

    const getUser = () => {
        const upd = User_REST.search(user!.id);
        toast.promise(upd, {
            loading: 'Datos actualizados',
            success: (res) => res.data.msg,
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } })
    }

    const updatePass = (data: UpdatePassword) => {
        const putRes = User_REST.updatePass(user!.id, data)
        toast.promise(putRes, {
            loading: 'Actualizando contraseña',
            success: (res) => {
                navigate('/login');
                return res.data.msg
            },
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } })
    }

    const updatePhoto = (data: PhotoRequest) => {
        const putPhoto = User_REST.updatePhoto(user!.id, data);
        toast.promise(putPhoto, {
            loading: 'Actualizando foto',
            success: (res) => {
                dispatch(setUser(res.data.user));
                return res.data.msg;
            },
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } })
    }

    const getBy = () => {
        toast.promise(User_REST.getBy(user!.me_register), {
            loading: 'Cargando datos...',
            success: (res) => {
                setItem('registerBy', res.data.user);
                return res.data.msg;
            },
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg,
        })
    }

    return { updatePass, updatePhoto, getUser, getLocals, getMotos, getBy }
}