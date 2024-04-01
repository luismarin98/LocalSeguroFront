import { ApiMsg, Key_REST } from "../../../components/AxiosConfig"
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setKey } from "../../../Redux/Key/key.slice";

export const useVerify = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const processVerify = (key: string) => {
        const very = Key_REST.verify(key);
        toast.promise(very, {
            loading: 'Verificando...',
            success: (res) => {
                navigate(`/register/${key}`);
                dispatch(setKey(res.data.key));
                return res.data.msg;
            },
            error: (err: AxiosError<ApiMsg>) => err.response!.data.msg
        });
    }

    return { processVerify }
}