import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useAdmin } from "./hooks/useAdmin";
import { UserRequest } from "../../Interfaces/UserRequest";

export interface IAdmin {
    getUsers: () => Promise<void>;
    users: UserRequest[];
    openAddUser: boolean;
    setOpenAddUser: Dispatch<SetStateAction<boolean>>;
}

const AdminContext = createContext({});

export const AdminProvider = ({ children }: { children: ReactNode }) => {
    const { getUsers, users } = useAdmin();
    const [openAddUser, setOpenAddUser] = useState<boolean>(false);

    const storage: IAdmin = { getUsers, users, openAddUser, setOpenAddUser };

    return <AdminContext.Provider value={storage}>{children}</AdminContext.Provider>
}

export default AdminContext;