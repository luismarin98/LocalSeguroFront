import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { useNavigate } from "react-router-dom";
import { User_REST } from "../../../components/AxiosConfig";

export const useRegister = () => {
    const navigate = useNavigate();

    const postUser = (data: UserRequest) => {
        const saveUser = User_REST.register(data);
        toast.promise(saveUser, {
            loading: 'Registrando...',
            success: (res) => {
                navigate('/login');
                return res.data.msg;
            },
            error: (err) => {
                console.log(err.response.data.Error)
                return err.response.data.msg
            }
        }, { loading: { duration: 2000 } });
    };

    return { postUser };
}