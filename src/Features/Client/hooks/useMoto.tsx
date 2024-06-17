import { MotosRequest } from "../../../Interfaces/MotosRequest";
import { getSession } from "../../../components/StorageFunctions";
import { UserRequest } from "../../../Interfaces/UserRequest";
import toast from "react-hot-toast";
import { ActData } from "../../../Interfaces/ActivityRequest";
import { useDispatch } from "react-redux";
import { setListMoto } from "../../../Redux/Moto/moto.slice";
import { ACT_REST, ApiMsg, Moto_REST } from "../../../components/AxiosConfig";
import { AxiosError } from "axios";

export const useMoto = () => {

    const user: UserRequest | null = getSession('user');
    const dispatch = useDispatch();

    const postMoto = (data: MotosRequest) => {
        const post = Moto_REST.save(data);
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
                            phone: user!.phone.toString(),
                            id_user: user!.id,
                            id_obj: data.id
                        }
                        ACT_REST.saveAct(actData);
                    }
                )()
                return res.data.msg
            },
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg,
        })
    }

    const getMotos = async () => {
        await Moto_REST.get(user!.id).then((res) => {
            dispatch(setListMoto(res.data.motosArray));
            toast.success(res.data.msg);
        }).catch((err: AxiosError<ApiMsg>) => {
            toast.error(err.response!.data.msg);
        })
    }

    return { postMoto, getMotos }
}