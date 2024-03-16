import { LocalsRequest } from "../../../Interfaces/LocalRequest";
import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { getSession } from "../../../components/StorageFunctions";
import axios from "axios";
import { ActData } from "../../../Interfaces/ActivityRequest";
import { useDispatch } from "react-redux";
import { setListLocal } from "../../../Redux/Local/locals.slice";

export const useLocal = () => {
    const api = process.env.REACT_APP_API_LOCALS ? process.env.REACT_APP_API_LOCALS : 'http://localhost:3001/api/locals';
    const actApi = process.env.REACT_APP_API_ACTIVITIES ? process.env.REACT_APP_API_ACTIVITIES : 'http://localhost:3001/api/activities';
    const user: UserRequest | null = getSession('user');
    const dispatch = useDispatch();

    const postLocal = async (data: LocalsRequest) => {
        const postLocal = axios.post(`${api}/save`, { ...data });
        toast.promise(postLocal, {
            loading: 'Guardando informacion',
            success: (res) => {
                (
                    async () => {
                        const actData: ActData = {
                            id: Math.floor(Math.random() * 1000000),
                            id_admin: user!.me_register,
                            photo: user!.photo,
                            type: 'Add Local',
                            username: user!.username,
                            email: user!.email,
                            phone: user!.phone,
                            id_user: user!.id,
                            id_obj: data.id
                        }
                        await axios.post(`${actApi}/save-activity`, { ...actData });
                    }
                )()
                return res.data.msg;
            },
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } });
    }

    const getLocals = async () => {
        const find = axios.get(`${api}/search/${user!.id}`);
        toast.promise(find, {
            loading: 'Cargando locales...',
            success: (res) => {
                dispatch(setListLocal(res.data.localsArray));
                return res.data.msg;
            },
            error: (err) => err.response.data.msg
        }, { loading: { duration: 2000 } })
    }

    return { postLocal, getLocals }
}