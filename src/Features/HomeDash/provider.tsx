import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useHomeDash } from "./hooks/useHomeDash";

export interface IHomeDash {
    getUserData: () => Promise<void>;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    openLocal: boolean;
    setOpenLocal: Dispatch<SetStateAction<boolean>>;
}

const HomeDashContext = createContext({});

export const HomeDashProvider = ({ children }: { children: ReactNode }) => {
    const { getUserData } = useHomeDash();
    
    const [open, setOpen] = useState<boolean>(false);
    const [openLocal, setOpenLocal] = useState<boolean>(false);

    const storage: IHomeDash = { getUserData, open, setOpen, openLocal, setOpenLocal };

    return <HomeDashContext.Provider value={storage}>{children}</HomeDashContext.Provider>
}

export default HomeDashContext;