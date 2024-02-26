import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useHomeDash } from "./hooks/useHomeDash";

export interface IHomeDash {
    getUserData: (id: number) => Promise<void>;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const HomeDashContext = createContext({});

export const HomeDashProvider = ({ children }: { children: ReactNode }) => {
    const { getUserData } = useHomeDash();
    const [open, setOpen] = useState<boolean>(false);

    const storage: IHomeDash = { getUserData, open, setOpen };

    return <HomeDashContext.Provider value={storage}>{children}</HomeDashContext.Provider>
}

export default HomeDashContext;