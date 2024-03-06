import { UserRequest } from "../../../Interfaces/UserRequest";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setItem } from "../../../components/StorageFunctions";
import axios from "axios";

export const useLogin = () => {
    const navigate = useNavigate();
    const api = process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/user'

    const getUser = async (data: UserRequest) => {
        const findLog = axios.get(`${api}/login/?username=${data.username}&password=${data.password}`);
        toast.promise(findLog, {
            loading: 'Logging',
            success: (res) => {
                navigate('/dashboard');
                setItem('user', res.data.userData);
                return res.data.msg
            },
            error: (err) => {
                console.log(err.response.data.Error)
                return err.response.data.msg
            }
        }, { loading: { duration: 2000 } });
    }

    return { getUser };
}