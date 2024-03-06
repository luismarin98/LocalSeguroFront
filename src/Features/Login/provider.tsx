import { ReactNode, createContext } from "react";
import { useLogin } from "./hooks/useLogin";
import { LoginRequest } from "../../Interfaces/UserRequest";

export interface ILogin {
    getUser: (data: LoginRequest) => Promise<void>;
};

const LoginContext = createContext({});

export const LoginProvider = ({ children }: { children: ReactNode }) => {
    const { getUser } = useLogin();

    const storage: ILogin = { getUser };

    return <LoginContext.Provider value={storage}>{children}</LoginContext.Provider>
}

export default LoginContext;