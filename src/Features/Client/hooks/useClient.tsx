import { useState } from "react"
import { LocalsRequest } from "../../../Interfaces/LocalRequest"
import axios from "axios";
import toast from "react-hot-toast";

export const useClient = () => {
    const [localData, setLocalsData] = useState<LocalsRequest[]>([]);

    const uri = '';

    const getLocals = async () => {
        const requests = axios.get<LocalsRequest[]>(uri);
        toast.promise(requests, {
            loading: 'Loading Locals',
            success: (res) => {
                setLocalsData(res.data);
                return 'Locales Cargados exitosamente';
            },
            error: (err) => `${err}`,
        })

    };
    const setlocal = () => { };
    const putLocal = () => { };
    const deleteLocal = () => { };

    return { localData, getLocals }
}