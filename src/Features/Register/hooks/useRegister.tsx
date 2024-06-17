import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { useNavigate } from "react-router-dom";
import { ACT_REST, ApiMsg, User_REST } from "../../../components/AxiosConfig";
import { AxiosError } from "axios";
import { useSelector } from "react-redux";
import { keySelector } from "../../../Redux/Key/key.selector";
import { ActData } from "../../../Interfaces/ActivityRequest";

export const useRegister = () => {
    const navigate = useNavigate();
    const key = useSelector(keySelector);

    const postUser = async (data: UserRequest) => {
        const user = await User_REST.getBy(key!.id_user);

        data.me_register = user.data.user!.id

        const saveUser = User_REST.register(data);
        toast.promise(saveUser, {
            loading: 'Registrando...',
            success: (res) => {
                (
                    async () => {
                        const actData: ActData = {
                            id: Math.floor(Math.random() * 1000000),
                            id_admin: key!.id_user,
                            photo: user.data.user!.photo,
                            type: 'Add Local',
                            username: user.data.user!.username,
                            email: user.data.user!.email,
                            phone: user.data.user!.phone.toString(),
                            id_user: user.data.user!.id,
                            id_obj: user.data.user!.id
                        }
                        ACT_REST.saveAct(actData);
                    }
                )()
                navigate('/login');
                return res.data.msg;
            },
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg
        }, { loading: { duration: 2000 } });
    };

    return { postUser };
}