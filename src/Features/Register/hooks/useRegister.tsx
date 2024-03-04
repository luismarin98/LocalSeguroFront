import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserRequest";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
    const navigate = useNavigate();

    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/user';

    const postUser = (data: UserRequest) => {
        debugger
        const saveUser = axios.post(`${api}/register`, { ...data });
        toast.promise(saveUser, {
            loading: 'Registrando...',
            success: (res) => {
                navigate('/login');
                return res.data.msg;
            },
            error: 'Algo sucedio, intente nuevamente',
        }, { loading: { duration: 2000 } });
    };

    return { postUser };
}