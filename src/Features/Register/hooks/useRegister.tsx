import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserDomain";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
    const navigate = useNavigate();

    const api = 'http://localhost:3001/api/users';

    const postUser = async (data: UserRequest) => {
        debugger
        const findUser = await axios.get<UserRequest[]>(`${api}/?username=${data.username}`);

        if (findUser.data.length > 0 && findUser.data[0].username === data.username) {
            return toast.error('Puede que haya un usuario con un nombre similar');
        } else {
            const response = axios.post(api, { ...data });
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