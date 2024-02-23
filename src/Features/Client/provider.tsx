import { ReactNode, createContext } from "react";

export interface IClient { }

const ClientContext = createContext({});

export const ClientProvider = ({ children }: { children: ReactNode }) => {
    const storage: IClient = {};

    return <ClientContext.Provider value={storage}>{children}</ClientContext.Provider>
}

export default ClientContext;