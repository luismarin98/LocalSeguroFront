import { FC, useContext } from "react";
import { getItem } from "../../components/StorageFunctions";
import { CardActivity } from "./components/cardActivity";
import { Modal } from "../../components/Modal";
import ActivitiesContext, { IActivities } from "./provider";
import { Draw } from "../../components/Drawer";
import { FormEditMoto } from "./forms/editMoto";
import { ActData, ActivityMoto, ActivityLocal, ActivityUser } from "../../Interfaces/ActivityRequest";
import { FormProvider, useForm } from "react-hook-form";
import { FormFilter } from "./forms/FormFilter";
import { FilterActivities } from "../../Interfaces/SearchRequest";
import { LocalContent } from "./components/LocalContent";
import { MotoContent } from "./components/MotoContent";
import { UserContent } from "./components/UserContent";

export const ActivitiesFeature: FC = () => {
    const { openModal, setOpenModal, openDrawer, setOpenDrawer, typeActivity } = useContext(ActivitiesContext) as IActivities;
    const activities: ActData[] | null = getItem('activities');

    const initialValues: FilterActivities = { type: 'All', username: '' };

    const method = useForm({ defaultValues: initialValues });

    const activityLocal: ActivityLocal | null = getItem('activityLocal');
    const ActivityMoto: ActivityMoto | null = getItem('activityMoto');
    const activityUser: ActivityUser | null = getItem('activityUser');

    return <>
        <div className="w-full h-full flex flex-col gap-2 items-center">
            <FormProvider {...method}>
                <FormFilter />
            </FormProvider>
            <div className="flex flex-row flex-wrap gap-2 items-center justify-center w-full h-full">
                {
                    activities && activities!.map((data, i) => (
                        <CardActivity key={i} {...data} />
                    ))
                }
            </div>
        </div>
        
        <Draw title="Editar actividad" open={openDrawer} setOpen={setOpenDrawer}><FormEditMoto /></Draw>
        <Modal isOpen={openModal} setIsOpen={setOpenModal} >
            {
                typeActivity === 'Add Local' ? (
                    <LocalContent act={activityLocal!.act} obj={activityLocal!.obj} />
                ) : typeActivity === 'Add Moto' ? (
                    <MotoContent act={ActivityMoto!.act} obj={ActivityMoto!.obj} />
                ) : typeActivity === 'Add User' && <UserContent act={activityUser!.act} obj={activityUser!.obj} />
            }
        </Modal>
    </>
}