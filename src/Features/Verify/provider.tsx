import { ReactNode, createContext } from "react";
import { useVerify } from "./hook/useVerify";

export interface IVerify {
    processVerify: (key: string) => void;
 }

const VerifyContext = createContext({});

export const VerifyProvider = ({ children }: { children: ReactNode }) => {
    const { processVerify } = useVerify();
    const storage: IVerify = { processVerify };

    return <VerifyContext.Provider value={storage}>{children}</VerifyContext.Provider>
}

export default VerifyContext;