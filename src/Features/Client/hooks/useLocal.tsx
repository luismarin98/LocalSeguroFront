import { LocalsRequest } from "../../../Interfaces/LocalRequest";
import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { getSession } from "../../../components/StorageFunctions";
import { ActData } from "../../../Interfaces/ActivityRequest";
import { useDispatch } from "react-redux";
import { setListLocal } from "../../../Redux/Local/locals.slice";
import { ACT_REST, ApiMsg, Local_REST } from "../../../components/AxiosConfig";
import { AxiosError } from "axios";

export const useLocal = () => {

    const user: UserRequest | null = getSession('user');
    const dispatch = useDispatch();

    const postLocal = async (data: LocalsRequest) => {
        const postLocal = Local_REST.save(data);
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
                        ACT_REST.saveAct(actData);
                    }
                )()
                return res.data.msg;
            },
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg,
        }, { loading: { duration: 2000 } });
    }

    const getLocals = async () => {
        await Local_REST.get(user!.id).then((res) => {
            dispatch(setListLocal(res.data.localsArray));
        toast.success(res.data.msg);
        }).catch((err: AxiosError<ApiMsg>) => {
            toast.error(err.response!.data.msg);
        })
        
    }

    return { postLocal, getLocals }
}