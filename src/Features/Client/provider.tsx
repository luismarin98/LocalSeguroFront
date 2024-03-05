import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useLocal } from "./hooks/useLocal";
import { LocalsRequest } from "../../Interfaces/LocalRequest";
import { useMoto } from "./hooks/useMoto";
import { MotosRequest } from "../../Interfaces/MotosRequest";

export interface IClient {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    openAddLocal: boolean;
    setOpenAddLocal: Dispatch<SetStateAction<boolean>>;
    openAddMoto: boolean;
    setOpeAddMoto: Dispatch<SetStateAction<boolean>>;

    postLocal: (data: LocalsRequest) => Promise<void>;
    getLocals: () => Promise<void>;
    getMotos: () => void;
    postMoto: (data: MotosRequest) => void;
    seeMotos: boolean;
    setSeeMotos: Dispatch<SetStateAction<boolean>>;
    setValueOption: Dispatch<SetStateAction<string>>;
    valueOption: string;
}

const ClientContext = createContext({});

export const ClientProvider = ({ children }: { children: ReactNode }) => {

    const { postLocal, getLocals } = useLocal();
    const { getMotos, postMoto } = useMoto();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [openAddLocal, setOpenAddLocal] = useState<boolean>(false);
    const [openAddMoto, setOpeAddMoto] = useState<boolean>(false);
    const [seeMotos, setSeeMotos] = useState<boolean>(false);
    const [valueOption, setValueOption] = useState<string>('')

    const storage: IClient = {
        isOpen,
        setIsOpen,
        openAddLocal,
        setOpenAddLocal,
        openAddMoto,
        setOpeAddMoto,
        postLocal,
        getLocals,
        getMotos,
        postMoto,
        seeMotos,
        setSeeMotos,
        valueOption,
        setValueOption
    };

    return <ClientContext.Provider value={storage}>{children}</ClientContext.Provider>
}

export default ClientContext;