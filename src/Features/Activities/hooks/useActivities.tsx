import axios from "axios";
import toast from "react-hot-toast";
import { getSession } from "../../../components/StorageFunctions";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { ActData } from "../../../Interfaces/ActivityRequest";
import { FilterActivities } from "../../../Interfaces/SearchRequest";
import { useState } from "react";
import { ActivityResponse } from "../../../Interfaces/Responses";
import { LocalsRequest } from "../../../Interfaces/LocalRequest";
import { MotosRequest } from "../../../Interfaces/MotosRequest";
import { useDispatch } from "react-redux";
import { setActivities, setLocalAct, setMotoAct, setUserAct } from "../../../Redux/Activity/activity.slice";

export const useActivities = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [typeActivity, setTypeActivity] = useState<string>();

    const api = process.env.REACT_APP_API_ACTIVITIES ? process.env.REACT_APP_API_ACTIVITIES : 'http://localhost:3001/api/activities';
    const user: UserRequest | null = getSession('user');
    const dispatch = useDispatch();

    const filterActivities = (filter: FilterActivities) => {
        const resFilter = axios.get(`${api}/filter-activities/${user!.id}?type=${filter.type !== null ? filter.type : filter.username !== '' && `?username=${filter.username}`}`);
        toast.promise(resFilter, {
            loading: 'Cargando actividades...',
            success: (res) => {
                dispatch(setActivities(res.data.arrayActivities));
                return res.data.msg;
            },
            error: (err) => {
                console.error(err);
                return 'algo sucedio, mirar consola';
            },
        }, { loading: { duration: 2000 } });
    }

/*     const filterActivitiess = async (filter: FilterActivities) => {
        
    } */

    const getActivity = (data: ActData) => {
        const getAct = axios.get<ActivityResponse>(`${api}/get-activity/${data!.id}`);
        toast.promise(getAct, {
            loading: 'Cargando actividades...',
            success: (res) => {
                if (res.data.activity.act.type === 'Add Local') {
                    dispatch(setLocalAct(res.data.activity))
                } else if (res.data.activity.act.type === 'Add User') {
                    dispatch(setUserAct(res.data.activity))
                } else if (res.data.activity.act.type === 'Add Moto') {
                    dispatch(setMotoAct(res.data.activity))
                }
                setTypeActivity(res.data.activity.act.type)
                setOpenModal(true);
                return res.data.msg;
            },
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } });
    }

    const deleteActivity = (id: number) => {
        const delAct = axios.delete(`${api}/delete-activity/${id}`);
        toast.promise(delAct, {
            loading: 'Eliminando actividad...',
            success: (res) => {
                if (res.data.type === 'Add Local') {
                    dispatch(setLocalAct(null))
                } else if (res.data.type === 'Add Moto') {
                    dispatch(setMotoAct(null))
                } else if (res.data.type === 'Add User') {
                    dispatch(setUserAct(null))
                }
                setTypeActivity('');
                setOpenModal(false);
                return res.data.msg;
            },
            error: (err) => {
                setOpenModal(false);
                return err.response.data.msg
            },
        }, { loading: { duration: 2000 } });
    }

    const updateActivity = (id: number, data: LocalsRequest | UserRequest | MotosRequest) => {
        const updateAct = axios.put(`${api}/update-activity/${id}`, { ...data });
        toast.promise(updateAct, {
            loading: 'Actualizando actividad...',
            success: (res) => {
                if (res.data.activity.type === 'Add Local') {
                    dispatch(setLocalAct(res.data.activity))
                } else if (res.data.activity.type === 'Add User') {
                    dispatch(setUserAct(null))
                } else if (res.data.activity.type === 'Add Moto') {
                    dispatch(setMotoAct(null))
                }
                setOpenDrawer(false);
                setOpenModal(false);
                setTypeActivity('');
                return res.data.msg;
            },
            error: (err) => {
                setOpenDrawer(false);
                setOpenModal(false);
                setTypeActivity('');
                return err.response.data.msg;
            },
        }, { loading: { duration: 2000 } });
    }

    return { filterActivities, openModal, setOpenModal, getActivity, typeActivity, deleteActivity, updateActivity, openDrawer, setOpenDrawer }
}