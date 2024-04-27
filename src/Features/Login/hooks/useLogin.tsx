import { LoginRequest } from "../../../Interfaces/UserRequest";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setSession } from "../../../components/StorageFunctions";
import { ApiMsg, User_REST } from "../../../components/AxiosConfig";
import { AxiosError } from "axios";
import { useState } from "react";

export const useLogin = () => {
    const navigate = useNavigate();
    const [enable, setEnable] = useState<boolean>(false);

    const getUser = async (data: LoginRequest) => {
        setEnable(true);
        const findLog = User_REST.login(`?username=${data.username}&password=${data.password}`);
        toast.promise(findLog, {
            loading: 'Logging',
            success: (res) => {
                navigate(`/dashboard/${res.data.user.username}`);
                setSession('user', res.data.user);
                setEnable(false)
                return res.data.msg
            },
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg,
        }, { loading: { duration: 2000 } });
    }

    return { getUser, enable };
}