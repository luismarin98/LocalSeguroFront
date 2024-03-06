import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useRegister = () => {
    const navigate = useNavigate();

    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/user';

    const postUser = (data: UserRequest) => {
        const saveUser = axios.post(`${api}/register`, { ...data });
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