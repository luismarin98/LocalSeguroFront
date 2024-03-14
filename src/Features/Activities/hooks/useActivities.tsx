import axios from "axios";
import toast from "react-hot-toast";
import { getItem, removeItem, setItem } from "../../../components/StorageFunctions";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { ActData } from "../../../Interfaces/ActivityRequest";
import { FilterActivities } from "../../../Interfaces/SearchRequest";
import { useState } from "react";
import { ActivityResponse } from "../../../Interfaces/Responses";

export const useActivities = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [typeActivity, setTypeActivity] = useState<string>();

    const api = process.env.REACT_APP_API_ACTIVITIES ? process.env.REACT_APP_API_ACTIVITIES : 'http://localhost:3001/api/activities';
    const user: UserRequest | null = getItem('user');

    const filterActivities = (filter: FilterActivities) => {
        const resFilter = axios.get(`${api}/filter-activities/${user!.id}?type=${filter.type !== null ? filter.type : filter.username !== '' && `?username=${filter.username}`}`);
        toast.promise(resFilter, {
            loading: 'Cargando actividades...',
            success: (res) => {
                removeItem('activities');
                const act: ActData = res.data.arrayActivities;
                setItem('activities', act);
                return res.data.msg;
            },
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } });
    }

    const getActivity = (data: ActData) => {
        const getAct = axios.get<ActivityResponse>(`${api}/get-activity/${data!.id}`);
        toast.promise(getAct, {
            loading: 'Cargando actividades...',
            success: (res) => {
                removeItem('activity');
                if (res.data.activity.act.type === 'Add Local') {
                    setItem('activityLocal', res.data.activity);
                } else if (res.data.activity.act.type === 'Add Moto') {
                    setItem('activityUser', res.data.activity);
                } else if (res.data.activity.act.type === 'Add User') {
                    setItem('activityMoto', res.data.activity);
                }

                setTypeActivity(res.data.activity.act.type)
                setOpenModal(true);
                return res.data.msg;
            },
            error: (err) => {
                console.error(err);
                return 'Algo sucedio, intente nuevamente'
            },
        }, { loading: { duration: 2000 } });
    }

    return { filterActivities, openModal, setOpenModal, getActivity, typeActivity }
}