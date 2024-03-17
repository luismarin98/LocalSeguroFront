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
import { ApiMsg, User_REST } from "../../../components/AxiosConfig";

export const useProfile = () => {
    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/user';
    const localApi = process.env.REACT_APP_API_LOCALS ? process.env.REACT_APP_API_LOCALS : 'http://localhost:3001/api/locals';
    const motoApi = process.env.REACT_APP_API_MOTOS ? process.env.REACT_APP_API_MOTOS : 'http://localhost:3001/api/motos';

    const user: UserRequest | null = getSession('user');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getLocals = async () => {
        const get = await axios.get(`${localApi}/search/${user!.id}`);
        dispatch(setLocal(get.data.localsArray))
    }

    const getMotos = async () => {
        const get = await axios.get(`${motoApi}/search/${user!.id}`);
        dispatch(setMoto(get.data.motosArray))
    }

    const getUser = () => {
        const upd = axios.get(`${api}/search/${user!.id}`);
        toast.promise(upd, {
            loading: 'Datos actualizados',
            success: (res) => res.data.msg,
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } })
    }

    const updatePass = (data: UpdatePassword) => {
        const putRes = axios.put(`${api}/updatePass/${user!.id}`, { data });
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
        const putPhoto = axios.put(`${api}/updatePhoto/${user!.id}`, { data });
        toast.promise(putPhoto, {
            loading: 'Actualizando foto',
            success: (res) => {
                dispatch(setUser(res.data.userData))
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