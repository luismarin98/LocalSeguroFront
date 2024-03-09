import { UserRequest } from "../../../Interfaces/UserRequest";
import { setItem, getItem } from "../../../components/StorageFunctions";
import axios from "axios";

export const useHomeDash = () => {
    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/user';
    const userData: UserRequest | null = getItem('user');

    const getBy = async () => {
        if (userData!.me_register !== 0) {
            await axios.get(`${api}/search/${userData!.me_register}`).then((get) => setItem('registerBy', get.data.user_data)).catch((err) => console.log(err.response.data.msg));
        }
    }

    return { getBy }
}