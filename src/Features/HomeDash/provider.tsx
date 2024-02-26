import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useHomeDash } from "./hooks/useHomeDash";

export interface IHomeDash {
    getUserData: () => Promise<void>;
    getLocals: (id: string) => Promise<void>;

    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    openAddLocal: boolean;
    setOpenAddLocal: Dispatch<SetStateAction<boolean>>;
    openAddMoto: boolean;
    setOpeAddMoto: Dispatch<SetStateAction<boolean>>;
    openAddUser: boolean;
    setOpenAddUser: Dispatch<SetStateAction<boolean>>;
}

const HomeDashContext = createContext({});

export const HomeDashProvider = ({ children }: { children: ReactNode }) => {
    const { getUserData, getLocals } = useHomeDash();

    const [open, setOpen] = useState<boolean>(false);
    const [openAddUser, setOpenAddUser] = useState<boolean>(false);
    const [openAddLocal, setOpenAddLocal] = useState<boolean>(false);
    const [openAddMoto, setOpeAddMoto] = useState<boolean>(false);

    const storage: IHomeDash = { getUserData, open, setOpen, openAddLocal, setOpenAddLocal, openAddMoto, setOpeAddMoto, openAddUser, setOpenAddUser, getLocals };

    return <HomeDashContext.Provider value={storage}>{children}</HomeDashContext.Provider>
}

export default HomeDashContext;