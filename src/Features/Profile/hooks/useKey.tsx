import toast from "react-hot-toast";
import { KeyRequest } from "../../../Interfaces/KeyRequest";
import { ApiMsg, Key_REST } from "../../../components/AxiosConfig";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { getSession } from "../../../components/StorageFunctions";
import { useState } from "react";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { setKey } from "../../../Redux/Key/key.slice";

export const useKey = () => {
    const user: UserRequest | null = getSession('user');
    const [openKeyModal, setOpenKeyModal] = useState<boolean>(false);
    const dispatch = useDispatch();

    const postKey = (data: KeyRequest) => {
        const pst = Key_REST.generate(data.id_user, data);
        toast.promise(pst, {
            loading: 'Generando llave...',
            success: (res) => res.data.msg,
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg
        })
    }

    const getKey = () => {
        const get = Key_REST.show(user!.id);
        toast.promise(get, {
            loading: 'Mostrando llave...',
            success: (res) => {
                dispatch(setKey(res.data.key));
                setOpenKeyModal(true);
                return res.data.msg;
            },
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg
        }, {
            loading: { duration: 2000 }
        });
    }

    const updateKey = (data: KeyRequest) => {
        const upd = Key_REST.update(data.id_user, data);
        toast.promise(upd, {
            loading: 'Actualizando llave...',
            success: (res) => res.data.msg,
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg
        });
    }

    const deleteKey = () => {
        const del = Key_REST.delete(user!.id);
        toast.promise(del, {
            loading: 'Eliminado llave...',
            success: (res) => res.data.msg,
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg
        });
    }

    return { postKey, openKeyModal, setOpenKeyModal, getKey, updateKey, deleteKey }
}