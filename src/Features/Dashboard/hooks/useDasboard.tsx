import axios from "axios";
import { UserRequest } from "../../../Interfaces/UserDomain";
import getItem, { setItem } from "../../../components/StorageFunctions";
import { useNavigate } from "react-router-dom";

export const useDashboard = () => {

    const api = process.env.REACT_APP_API_USERS;
    const navigate = useNavigate();

    const getUserAdmin = async () => {
        const getUserStorage: UserRequest | null = getItem('user');

        await axios.get<UserRequest>(`${api}/?username=${getUserStorage!.username}`).then((res) => {
            localStorage.removeItem('user');
            setItem('user', res.data);
            res.data.isAdmin ? navigate('/dashboard') : navigate('/dashboard/client');
        })
    }

    return { getUserAdmin }
}