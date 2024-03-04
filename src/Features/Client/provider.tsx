import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useLocal } from "./hooks/useLocal";
import { LocalsRequest } from "../../Interfaces/LocalRequest";

export interface IClient {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    openAddLocal: boolean;
    setOpenAddLocal: Dispatch<SetStateAction<boolean>>;
    openAddMoto: boolean;
    setOpeAddMoto: Dispatch<SetStateAction<boolean>>;

    postLocal: (data: LocalsRequest) => Promise<void>;
    getLocals: () => Promise<void>;
}

const ClientContext = createContext({});

export const ClientProvider = ({ children }: { children: ReactNode }) => {

    const { postLocal, getLocals } = useLocal();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [openAddLocal, setOpenAddLocal] = useState<boolean>(false);
    const [openAddMoto, setOpeAddMoto] = useState<boolean>(false);

    const storage: IClient = { isOpen, setIsOpen, openAddLocal, setOpenAddLocal, openAddMoto, setOpeAddMoto, postLocal, getLocals };

    return <ClientContext.Provider value={storage}>{children}</ClientContext.Provider>
}

export default ClientContext;