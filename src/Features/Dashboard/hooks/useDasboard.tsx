import axios from "axios";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { getSession } from "../../../components/StorageFunctions";
import { useNavigate } from "react-router-dom";

export const useDashboard = () => {

    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/users';
    const navigate = useNavigate();

    const getUserAdmin = async () => {
        const getUserStorage: UserRequest | null = getSession('user');

        await axios.get<UserRequest>(`${api}/?username=${getUserStorage!.username}`).then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data));
            res.data.isAdmin ? navigate('/dashboard') : navigate('/dashboard/client');
        })
    }

    return { getUserAdmin }
}