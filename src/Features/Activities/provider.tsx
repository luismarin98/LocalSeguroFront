import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useActivities } from "./hooks/useActivities";
import { FilterActivities } from "../../Interfaces/SearchRequest";
import { ActData } from "../../Interfaces/ActivityRequest";

export interface IActivities {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;

    openDrawer: boolean;
    setOpenDrawer: Dispatch<SetStateAction<boolean>>;

    filterActivities: (filter: FilterActivities) => void;
    getActivity: (filter: ActData) => void;
    typeActivity: string | undefined;
}

const ActivitiesContext = createContext({});

export const ActivitiesProvider = ({ children }: { children: ReactNode }) => {

    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const { filterActivities, openModal, setOpenModal, getActivity, typeActivity } = useActivities();

    const storage: IActivities = { openModal, setOpenModal, openDrawer, setOpenDrawer, filterActivities, getActivity, typeActivity };

    return <ActivitiesContext.Provider value={storage}>{children}</ActivitiesContext.Provider>
}

export default ActivitiesContext;