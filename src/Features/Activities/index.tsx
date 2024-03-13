import { FC, useContext, useEffect } from "react";
import { getItem } from "../../components/StorageFunctions";
import { CardActivity } from "./components/cardActivity";
import { Modal } from "../../components/Modal";
import { ActivityContent } from "./components/ContentAct";
import ActivitiesContext, { IActivities } from "./provider";
import { Draw } from "../../components/Drawer";
import { FormEditMoto } from "./forms/editMoto";
import { ActData } from "../../Interfaces/ActivityRequest";

export const ActivitiesFeature: FC = () => {
    const { openModal, setOpenModal, openDrawer, setOpenDrawer, getActivities } = useContext(ActivitiesContext) as IActivities;
    const activities: ActData[] | null = getItem('activities');

    useEffect(() => { getActivities() }, [])

    return <>
        <div className="w-full h-full flex flex-wrap flex-row gap-2 items-center">
            {
                activities && activities!.map((data, i) => (
                    <CardActivity key={i} activity={data} />
                ))
            }
        </div>
        <Draw title="Editar actividad" open={openDrawer} setOpen={setOpenDrawer}><FormEditMoto /></Draw>
        <Modal isOpen={openModal} setIsOpen={setOpenModal} ><ActivityContent /></Modal>
    </>
}