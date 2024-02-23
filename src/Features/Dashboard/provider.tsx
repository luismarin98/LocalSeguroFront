import { ReactNode, createContext } from "react";
import { useDashboard } from "./hooks/useDasboard";

export interface IDashboard {
    getUserAdmin: () => Promise<void>
}

const DashboardContext = createContext({});

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
    const { getUserAdmin } = useDashboard();
    const storage: IDashboard = { getUserAdmin }

    return <DashboardContext.Provider value={storage}>{children}</DashboardContext.Provider>
}

export default DashboardContext;