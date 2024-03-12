import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export interface IActivities {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;

    openDrawer: boolean;
    setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

const ActivitiesContext = createContext({});

export const ActivitiesProvider = ({ children }: { children: ReactNode }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const storage: IActivities = {
        openModal,
        setOpenModal,
        openDrawer,
        setOpenDrawer
    };

    return <ActivitiesContext.Provider value={storage}>{children}</ActivitiesContext.Provider>
}

export default ActivitiesContext;