import { LoginRequest } from "../../../Interfaces/UserRequest";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setSession } from "../../../components/StorageFunctions";
import { ApiMsg, User_REST } from "../../../components/AxiosConfig";
import { AxiosError } from "axios";

export const useLogin = () => {
    const navigate = useNavigate();

    const getUser = async (data: LoginRequest) => {
        const findLog = User_REST.login(`?username=${data.username}&password=${data.password}`);
        toast.promise(findLog, {
            loading: 'Logging',
            success: (res) => {
                debugger
                navigate(`/dashboard/${res.data.user.username}`);
                setSession('user', res.data.user);
                return res.data.msg
            },
            error: (err: AxiosError<ApiMsg>) => {
                debugger
                return err.response!.data.msg;
            }
        }, { loading: { duration: 2000 } });
    }

    return { getUser };
}