import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserDomain";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
    const navigate = useNavigate();

    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/users';

    const postUser = async (data: UserRequest) => {
        debugger
        const findUser = await axios.get(`${api}/register/?username=${data.username}`);

        if (findUser) {
            return toast.error(findUser.data.msg);
        } else {
            const response = axios.post(`${api}`, { ...data });
            toast.promise(response, {
                loading: 'Registrando...',
                success: () => {
                    navigate('/login');
                    return 'Registro exitoso';
                },
                error: 'Algo ha sucedido, intente nuevamente',
            }, {
                loading: { duration: 2000 }
            })
        }
    };

    return { postUser };
}