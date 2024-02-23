import { ReactNode, createContext } from "react";
import { useLogin } from "./hooks/useLogin";
import { UserRequest } from "../../Interfaces/UserDomain";

export interface ILogin {
    getUser: (data: UserRequest) => Promise<void>;
};

const LoginContext = createContext({});

export const LoginProvider = ({ children }: { children: ReactNode }) => {
    const { getUser } = useLogin();

    const storage: ILogin = { getUser };

    return <LoginContext.Provider value={storage}>{children}</LoginContext.Provider>
}

export default LoginContext;