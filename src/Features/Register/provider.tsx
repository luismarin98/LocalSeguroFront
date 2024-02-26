import { ReactNode, createContext } from "react";
import { useRegister } from "./hooks/useRegister";
import { UserRequest } from "../../Interfaces/UserRequest";

export interface IRegister {
    postUser: (data: UserRequest) => void;
}

const RegisterContext = createContext({});

export const RegisterProvider = ({ children }: { children: ReactNode }) => {
    const { postUser } = useRegister();

    const storage: IRegister = { postUser }

    return <RegisterContext.Provider value={storage}>{children}</RegisterContext.Provider>
}

export default RegisterContext;