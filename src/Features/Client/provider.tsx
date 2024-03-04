import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export interface IClient {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    openAddLocal: boolean;
    setOpenAddLocal: Dispatch<SetStateAction<boolean>>;
    openAddMoto: boolean;
    setOpeAddMoto: Dispatch<SetStateAction<boolean>>;
}

const ClientContext = createContext({});

export const ClientProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [openAddLocal, setOpenAddLocal] = useState<boolean>(false);
    const [openAddMoto, setOpeAddMoto] = useState<boolean>(false);

    const storage: IClient = { isOpen, setIsOpen, openAddLocal, setOpenAddLocal, openAddMoto, setOpeAddMoto };

    return <ClientContext.Provider value={storage}>{children}</ClientContext.Provider>
}

export default ClientContext;