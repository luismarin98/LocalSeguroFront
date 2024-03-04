import { ReactNode, createContext } from "react";
import { useHomeDash } from "./hooks/useHomeDash";

export interface IHomeDash {
    getUserData: () => Promise<void>;
    getLocals: (id: string) => Promise<void>;
}

const HomeDashContext = createContext({});

export const HomeDashProvider = ({ children }: { children: ReactNode }) => {
    const { getUserData, getLocals } = useHomeDash();

    const storage: IHomeDash = { getUserData, getLocals };

    return <HomeDashContext.Provider value={storage}>{children}</HomeDashContext.Provider>
}

export default HomeDashContext;