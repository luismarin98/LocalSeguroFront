import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useActivities } from "./hooks/useActivities";

export interface IActivities {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;

    openDrawer: boolean;
    setOpenDrawer: Dispatch<SetStateAction<boolean>>;

    getActivities: () => void;
}

const ActivitiesContext = createContext({});

export const ActivitiesProvider = ({ children }: { children: ReactNode }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const { getActivities } = useActivities();

    const storage: IActivities = {
        openModal,
        setOpenModal,
        openDrawer,
        setOpenDrawer,
        getActivities
    };

    return <ActivitiesContext.Provider value={storage}>{children}</ActivitiesContext.Provider>
}

export default ActivitiesContext;