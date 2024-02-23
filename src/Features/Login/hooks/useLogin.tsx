import { UserRequest } from "../../../Interfaces/UserDomain";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate();
    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/users'

    const getUser = async (data: UserRequest) => {
        try {
            const response = await axios.get<UserRequest[]>(`${api}?username=${data.username}&password=${data.password}`);
            if (response.data.length > 0 && response.data[0].username === data.username) {
                toast.success(`Bienvenid@ ${response.data[0].username}`);
                navigate('/dashboard');
                localStorage.setItem('user', JSON.stringify(response.data[0]));
            } else if (response.data.length < 0) {
                toast.error('Puede que no te encuentres registrado!');
            }
        } catch (error) {
            console.error(error);
            toast.error('Algo sucedio, intente nuevamente');
        }
    }

    return { getUser };
}