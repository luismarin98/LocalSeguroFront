import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { UserRequest } from "../../../Interfaces/UserDomain";

export const useAdmin = () => {
    const [users, setUsers] = useState<UserRequest[]>([]);

    const api = '';

    const getUsers = async () => {
        const response = await axios.get<UserRequest[]>(api);
        if (response.data.length > 0) {
            setUsers(response.data);
            toast.success('Usuarios Cargados correctamente');
        } else {
            toast.error('Algo sucedio en la carga de usuarios, intente nuevamente');
        }
    }

    return { users, getUsers };
}