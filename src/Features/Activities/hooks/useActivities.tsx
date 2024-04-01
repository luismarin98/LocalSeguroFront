import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { getSession } from "../../../components/StorageFunctions";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { ActData } from "../../../Interfaces/ActivityRequest";
import { FilterActivities } from "../../../Interfaces/SearchRequest";
import { useState } from "react";
import { LocalsRequest } from "../../../Interfaces/LocalRequest";
import { MotosRequest } from "../../../Interfaces/MotosRequest";
import { useDispatch } from "react-redux";
import { setActivities, setLocalAct, setMotoAct, setUserAct } from "../../../Redux/Activity/activity.slice";
import { ACT_REST, ApiMsg } from "../../../components/AxiosConfig";

export const useActivities = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [typeActivity, setTypeActivity] = useState<string>();

    const user: UserRequest | null = getSession('user');
    const dispatch = useDispatch();

    const filterActivities = (filter: FilterActivities) => {
        const resFilter = ACT_REST.filterAct(filter, user!.id);
        toast.promise(resFilter, {
            loading: 'Cargando actividades...',
            success: (res) => {
                dispatch(setActivities(res.data.data));
                return res.data.msg;
            },
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg,
        }, { loading: { duration: 2000 } });
    }

    const getActivity = (data: ActData) => {
        const getAct = ACT_REST.getAct(data.id);
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
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg,
        }, { loading: { duration: 2000 } });
    }

    const deleteActivity = (id: number) => {
        const delAct = ACT_REST.delAct(id);
        toast.promise(delAct, {
            loading: 'Eliminando actividad...',
            success: (res) => {
                if (res.data.type === 'Add Local') {
                    dispatch(setLocalAct([]))
                } else if (res.data.type === 'Add Moto') {
                    dispatch(setMotoAct([]))
                } else if (res.data.type === 'Add User') {
                    dispatch(setUserAct([]))
                }
                setTypeActivity('');
                setOpenModal(false);
                return res.data.msg;
            },
            error: (err: AxiosError<ApiMsg>) => {
                setOpenModal(false);
                return err.response!.data.msg
            },
        }, { loading: { duration: 2000 } });
    }

    const updateActivity = (id: number, data: LocalsRequest | UserRequest | MotosRequest) => {
        const updateAct = ACT_REST.updAct(id, data);
        toast.promise(updateAct, {
            loading: 'Actualizando actividad...',
            success: (res) => {
                if (res.data.activity.act.type === 'Add Local') {
                    dispatch(setLocalAct(res.data.activity.act))
                } else if (res.data.activity.act.type === 'Add User') {
                    dispatch(setUserAct(res.data.activity.act))
                } else if (res.data.activity.act.type === 'Add Moto') {
                    dispatch(setMotoAct(res.data.activity.act))
                }
                setOpenDrawer(false);
                setOpenModal(false);
                setTypeActivity('');
                return res.data.msg;
            },
            error: (err: AxiosError<ApiMsg>) => {
                setOpenDrawer(false);
                setOpenModal(false);
                setTypeActivity('');
                return err.response!.data.msg;
            },
        }, { loading: { duration: 2000 } });
    }

    return { filterActivities, openModal, setOpenModal, getActivity, typeActivity, deleteActivity, updateActivity, openDrawer, setOpenDrawer }
}