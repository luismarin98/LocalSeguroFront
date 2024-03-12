import { FC, useContext } from "react";
//import { getItem } from "../../components/StorageFunctions";
import { CardActivity } from "./components/cardActivity";
import { Modal } from "../../components/Modal";
import { ActivityContent } from "./components/ContentAct";
import ActivitiesContext, { IActivities } from "./provider";
import { Draw } from "../../components/Drawer";

export const ActivitiesFeature: FC = () => {
    const { openModal, setOpenModal, openDrawer, setOpenDrawer } = useContext(ActivitiesContext) as IActivities;
    //const activities: [] | null = getItem('activities');

    return <>
        <div className="w-full h-full flex flex-wrap flex-row gap-2 items-center">
            <CardActivity description="user anadio una nueva moto" />
        </div>
        <Draw title="Editar actividad" open={openDrawer} setOpen={setOpenDrawer}>Hola mundo</Draw>
        <Modal isOpen={openModal} setIsOpen={setOpenModal} ><ActivityContent /></Modal>
    </>
}