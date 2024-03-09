import axios from "axios";
import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { removeItem, setItem, getItem } from "../../../components/StorageFunctions";
import { UpdatePassword } from "../../../Interfaces/UpdateRequest";
import { PhotoRequest } from "../../../Interfaces/PhotoRequest";
import { useNavigate } from "react-router-dom";

export const useProfile = () => {
    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/user';
    const localApi = process.env.REACT_APP_API_LOCALS ? process.env.REACT_APP_API_LOCALS : 'http://localhost:3001/api/locals';
    const motoApi = process.env.REACT_APP_API_MOTOS ? process.env.REACT_APP_API_MOTOS : 'http://localhost:3001/api/motos';

    const user: UserRequest | null = getItem('user');
    const navigate = useNavigate();

    const getLocals = async () => {
        const get = await axios.get(`${localApi}/search/${user!.id}`);
        setItem('local', get.data.localsArray);
    }

    const getMotos = async () => {
        const get = await axios.get(`${motoApi}/search/${user!.id}`);
        setItem('moto', get.data.motosArray);
    }

    const getUser = () => {
        const upd = axios.get(`${api}/search/${user!.id}`);
        //removeItem('user');
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
                removeItem('user');
                removeItem('moto');
                removeItem('local');
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
                removeItem('user');
                setItem('user', res.data.userData);
                window.location.reload();
                return res.data.msg;
            },
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } })
    }



    return { updatePass, updatePhoto, getUser, getLocals, getMotos }
}