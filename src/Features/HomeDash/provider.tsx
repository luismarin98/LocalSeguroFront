import { ReactNode, createContext } from "react";
import { useHomeDash } from "./hooks/useHomeDash";

export interface IHomeDash {
    getBy: () => Promise<void>;
}

const HomeDashContext = createContext({});

export const HomeDashProvider = ({ children }: { children: ReactNode }) => {
    const { getBy } = useHomeDash();

    const storage: IHomeDash = { getBy };

    return <HomeDashContext.Provider value={storage}>{children}</HomeDashContext.Provider>
}

export default HomeDashContext;