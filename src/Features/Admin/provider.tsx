import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useAdmin } from "./hooks/useAdmin";
import { UserRequest } from "../../Interfaces/UserRequest";
import { SearchRequest } from "../../Interfaces/SearchRequest";

export interface IAdmin {
    getUsers: (search: SearchRequest) => void;

    openAddUser: boolean;
    setOpenAddUser: Dispatch<SetStateAction<boolean>>;
    postUser: (data: UserRequest) => void;

    valueSelect: string;
    setValueSelect: Dispatch<SetStateAction<string>>;

    numero: string;
    setNumero: Dispatch<SetStateAction<string>>;

    userAdmin: boolean | null;
    setUserAdmin: Dispatch<SetStateAction<boolean | null>>;
}

const AdminContext = createContext({});

export const AdminProvider = ({ children }: { children: ReactNode }) => {
    const { getUsers, postUser } = useAdmin();

    const [openAddUser, setOpenAddUser] = useState<boolean>(false);
    const [numero, setNumero] = useState<string>('');
    const [valueSelect, setValueSelect] = useState<string>('');
    const [userAdmin, setUserAdmin] = useState<boolean | null>(false);

    const storage: IAdmin = { getUsers, openAddUser, setOpenAddUser, postUser, valueSelect, setValueSelect, numero, setNumero, userAdmin, setUserAdmin };

    return <AdminContext.Provider value={storage}>{children}</AdminContext.Provider>
}

export default AdminContext;