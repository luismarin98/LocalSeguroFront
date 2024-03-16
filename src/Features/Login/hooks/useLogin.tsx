import { LoginRequest } from "../../../Interfaces/UserRequest";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setSession } from "../../../components/StorageFunctions";
import { User_REST } from "../../../components/AxiosConfig";

export const useLogin = () => {
    const navigate = useNavigate();
    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/user'

    const getUser = async (data: LoginRequest) => {
        const findLog = User_REST.login(`?username=${data.username}&password=${data.password}`);
        toast.promise(findLog, {
            loading: 'Logging',
            success: (res) => {
                navigate(`/dashboard/${res.userData.username}`);
                setSession('user', res.userData);
                return res.msg
            },
            error: (err) => err.response.data.msg,
        }, { loading: { duration: 2000 } });
    }

    return { getUser };
}