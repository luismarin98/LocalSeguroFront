import axios from "axios";
import { UserRequest } from "../../../Interfaces/UserDomain";
import { removeItem, setItem } from "../../../components/StorageFunctions";

export const useHomeDash = () => {
    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/users';

    const getUserData = async (id: number) => {
        debugger
        await axios.get<UserRequest | undefined>(`${api}/home/${id}`).then((res) => {
            removeItem('user');
            setItem('user', res.data);
        }).catch((err) => {
            console.error(err);
        })
    }

    return { getUserData }
}