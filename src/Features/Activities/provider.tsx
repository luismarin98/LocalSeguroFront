import { ReactNode, createContext } from "react";

export interface IActivities { }

const ActivitiesContext = createContext({});

export const ActivitiesProvider = ({ children }: { children: ReactNode }) => {
    const storage: IActivities = {};

    return <ActivitiesContext.Provider value={storage}>{children}</ActivitiesContext.Provider>
}

export default ActivitiesContext;