import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useActivities } from "./hooks/useActivities";
import { FilterActivities } from "../../Interfaces/SearchRequest";
import { ActData } from "../../Interfaces/ActivityRequest";
import { LocalsRequest } from "../../Interfaces/LocalRequest";
import { UserRequest } from "../../Interfaces/UserRequest";
import { MotosRequest } from "../../Interfaces/MotosRequest";

export interface IActivities {
    value: number;
    setValue: Dispatch<SetStateAction<number>>
    
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;

    openDrawer: boolean;
    setOpenDrawer: Dispatch<SetStateAction<boolean>>;

    filterActivities: (filter: FilterActivities) => void;
    getActivity: (filter: ActData) => void;
    typeActivity: string | undefined;
    deleteActivity: (id: number) => void;
    updateActivity: (id: number, data: LocalsRequest | UserRequest | MotosRequest) => void;
}

const ActivitiesContext = createContext({});

export const ActivitiesProvider = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState<number>(0);
    const { filterActivities, openModal, setOpenModal, getActivity, typeActivity, deleteActivity, updateActivity, openDrawer, setOpenDrawer } = useActivities();

    const storage: IActivities = { openModal, value, setValue, setOpenModal, openDrawer, setOpenDrawer, filterActivities, getActivity, typeActivity, deleteActivity, updateActivity };

    return <ActivitiesContext.Provider value={storage}>{children}</ActivitiesContext.Provider>
}

export default ActivitiesContext;