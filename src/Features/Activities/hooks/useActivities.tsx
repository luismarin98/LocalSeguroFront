import axios from "axios";
import toast from "react-hot-toast";
import { getItem, setItem } from "../../../components/StorageFunctions";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { ActData } from "../../../Interfaces/ActivityRequest";

export const useActivities = () => {
    const api = process.env.REACT_APP_API_ACTIVITIES ? process.env.REACT_APP_API_ACTIVITIES : 'http://localhost:3001/api/activities';
    const user: UserRequest | null = getItem('user');

    const getActivities = () => {
        const get = axios.get(`${api}/get-activities/${user!.id}`);
        toast.promise(get, {
            loading: 'Cargando actividades...',
            success: (res) => {
                const act: ActData = res.data.arrayActivities;
                setItem('activities', act);
                return res.data.msg;
            },
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } });
    }

    return { getActivities }
}