import { ReactNode, createContext } from "react";

export interface IHomeDash { }

const HomeDashContext = createContext({});

export const HomeDashProvider = ({ children }: { children: ReactNode }) => {

    const storage: IHomeDash = {}

    return <HomeDashContext.Provider value={storage}>{children}</HomeDashContext.Provider>
}

export default HomeDashContext;