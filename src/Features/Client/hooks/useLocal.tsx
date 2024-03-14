import { LocalsRequest } from "../../../Interfaces/LocalRequest";
import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { setItem, getItem } from "../../../components/StorageFunctions";
import axios from "axios";
import { ActData } from "../../../Interfaces/ActivityRequest";

export const useLocal = () => {
    const api = process.env.REACT_APP_API_LOCALS ? process.env.REACT_APP_API_LOCALS : 'http://localhost:3001/api/locals';
    const actApi = process.env.REACT_APP_API_ACTIVITIES ? process.env.REACT_APP_API_ACTIVITIES : 'http://localhost:3001/api/activities';
    const user: UserRequest | null = getItem('user');

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
            error: (err) => {
                console.log(err.response.data.Error)
                return err.response.data.msg
            },
        }, { loading: { duration: 2000 } });
    }

    const getLocals = async () => {
        const find = axios.get(`${api}/search/${user!.id}`);
        toast.promise(find, {
            loading: 'Cargando locales...',
            success: (res) => {
                setItem('locals', res.data.localsArray);
                window.location.reload();
                return res.data.msg;
            },
            error: (err) => {
                console.log(err.response.data.Error)
                return err.response.data.msg
            }
        }, { loading: { duration: 2000 } })
    }

    return { postLocal, getLocals }
}