import { ReactNode, createContext } from "react";
import { useAdmin } from "./hooks/useAdmin";
import { UserRequest } from "../../Interfaces/UserDomain";

export interface IAdmin {
    getUsers: () => Promise<void>;
    users: UserRequest[];
}

const AdminContext = createContext({});

export const AdminProvider = ({ children }: { children: ReactNode }) => {
    const { getUsers, users } = useAdmin();

    const storage: IAdmin = { getUsers, users };

    return <AdminContext.Provider value={storage}>{children}</AdminContext.Provider>
}

export default AdminContext;