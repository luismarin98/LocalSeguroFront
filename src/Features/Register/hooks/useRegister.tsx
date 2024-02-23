import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserDomain";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
    const navigate = useNavigate();

    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/users';

    const postUser = async (data: UserRequest) => {
        debugger
        const saveUser = await axios.post(`${api}/register`, { ...data });
        if (saveUser.status === 200) {
            navigate('/login');
            toast.success(saveUser.data.msg);
        } else if (saveUser.status === 404) {
            toast.error(saveUser.data.msg);
        }
    };

    return { postUser };
}