import { MotosRequest } from "../../../Interfaces/MotosRequest";
import { setItem, getItem } from "../../../components/StorageFunctions";
import { UserRequest } from "../../../Interfaces/UserRequest";
import toast from "react-hot-toast";
import axios from "axios";
import { ActData } from "../../../Interfaces/ActivityRequest";

export const useMoto = () => {
    const api = process.env.REACT_APP_API_MOTOS ? process.env.REACT_APP_API_MOTOS : 'http://localhost:3001/api/motos';
    const actApi = process.env.REACT_APP_API_ACTIVITIES ? process.env.REACT_APP_API_ACTIVITIES : 'http://localhost:3001/api/activities';
    const user: UserRequest | null = getItem('user');

    const postMoto = (data: MotosRequest) => {
        const post = axios.post(`${api}/save`, { ...data });
        toast.promise(post, {
            loading: 'Guardando...',
            success: (res) => {
                (
                    async () => {
                        const actData: ActData = {
                            id: Math.floor(Math.random() * 1000000),
                            id_admin: user!.me_register,
                            photo: user!.photo,
                            type: 'Add Moto',
                            username: user!.username,
                            email: user!.email,
                            phone: user!.phone,
                            id_user: user!.id,
                            id_obj: data.id
                        }
                        await axios.post(`${actApi}/save-activity`, { ...actData });
                    }
                )()
                return res.data.msg
            },
            error: (err) => {
                console.log(err.response.data.Error)
                return err.response.data.msg
            }
        })
    }

    const getMotos = () => {
        const motos = axios.get(`${api}/search/${user!.id}`);
        toast.promise(motos, {
            loading: 'Cargando...',
            success: (res) => {
                setItem('moto', res.data.motosArray);
                return res.data.msg;
            },
            error: (err) => {
                console.log(err.response.data.Error)
                return err.response.data.msg
            }
        })
    }

    return { postMoto, getMotos }
}