import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export interface IClient {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ClientContext = createContext({});

export const ClientProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const storage: IClient = { isOpen, setIsOpen };

    return <ClientContext.Provider value={storage}>{children}</ClientContext.Provider>
}

export default ClientContext;