import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useAdmin } from "./hooks/useAdmin";
import { UserRequest } from "../../Interfaces/UserRequest";
import { SearchRequest } from "../../Interfaces/SearchRequest";

export interface IAdmin {
    getUsers: (search: SearchRequest) => void;
    deleteUser: () => void;
    editUser: (data: UserRequest) => void;
    postUser: (data: UserRequest) => void;

    openAddUser: boolean;
    setOpenAddUser: Dispatch<SetStateAction<boolean>>;

    openEditUser: boolean;
    setOpenEditUser: Dispatch<SetStateAction<boolean>>;

    userId: number;
    setUserId: Dispatch<SetStateAction<number>>;

    openDelete: boolean;
    setOpenDelete: Dispatch<SetStateAction<boolean>>;

    valueSelect: string;
    setValueSelect: Dispatch<SetStateAction<string>>;

    numero: number;
    setNumero: Dispatch<SetStateAction<number>>;

    userAdmin: boolean | null;
    setUserAdmin: Dispatch<SetStateAction<boolean | null>>;

    getUserActivities: (user_id: string) => void;
}

const AdminContext = createContext({});

export const AdminProvider = ({ children }: { children: ReactNode }) => {
    const { getUsers, postUser, deleteUser, editUser, setUserId, userId, getUserActivities } = useAdmin();

    const [openAddUser, setOpenAddUser] = useState<boolean>(false);
    const [openEditUser, setOpenEditUser] = useState<boolean>(false);
    const [openDelete, setOpenDelete] = useState<boolean>(false);
    const [numero, setNumero] = useState<number>(0);
    const [valueSelect, setValueSelect] = useState<string>('');
    const [userAdmin, setUserAdmin] = useState<boolean | null>(false);

    const storage: IAdmin = {
        getUsers,
        openAddUser,
        setOpenAddUser,
        postUser,
        valueSelect,
        setValueSelect,
        numero,
        setNumero,
        userAdmin,
        setUserAdmin,
        deleteUser,
        editUser,
        openDelete,
        setOpenDelete,
        userId,
        setUserId,
        openEditUser,
        setOpenEditUser,
        getUserActivities
    };

    return <AdminContext.Provider value={storage}>{children}</AdminContext.Provider>
}

export default AdminContext;