import { FC, useContext } from "react";
import { CardActivity } from "./components/cardActivity";
import { Modal } from "../../components/Modal";
import ActivitiesContext, { IActivities } from "./provider";
import { Draw } from "../../components/Drawer";
import { FormEditLocal } from "./forms/editLocal";
import { FormProvider, useForm } from "react-hook-form";
import { FormFilter } from "./forms/FormFilter";
import { FilterActivities } from "../../Interfaces/SearchRequest";
import { LocalContent } from "./components/LocalContent";
import { MotoContent } from "./components/MotoContent";
import { UserContent } from "./components/UserContent";
import { FormEditMoto } from "./forms/editMoto";
import { FormEditUser } from "./forms/editUser";
import { useAppSelector } from "../../Redux/store";
import { activitiesSelector, activityLocalSelector, activityMotoSelector, activityUserSelector } from "../../Redux/Activity/activity.selector";

export const ActivitiesFeature: FC = () => {
    const { openModal, setOpenModal, openDrawer, setOpenDrawer, typeActivity } = useContext(ActivitiesContext) as IActivities;
    const activities = useAppSelector(activitiesSelector);
    const initialValues: FilterActivities = { type: 'All', username: '' };

    const method = useForm({ defaultValues: initialValues });

    const activityLocal = useAppSelector(activityLocalSelector);
    const activityMoto = useAppSelector(activityMotoSelector);
    const activityUser = useAppSelector(activityUserSelector);

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

        <Draw title="Editar actividad" open={openDrawer} setOpen={setOpenDrawer}>
            {
                typeActivity === 'Add Local' && activityLocal && activityLocal !== null && <FormEditLocal {...activityLocal!.obj} />
            }
            {
                typeActivity === 'Add Moto' && activityMoto && activityMoto !== null && <FormEditMoto {...activityMoto!.obj} />
            }
            {
                typeActivity === 'Add User' && activityUser && activityUser !== null && <FormEditUser {...activityUser!.obj} />
            }
        </Draw>
        <Modal isOpen={openModal} setIsOpen={setOpenModal} >
            {
                typeActivity === 'Add Local' ? (
                    <LocalContent act={activityLocal!.act} obj={activityLocal!.obj} />
                ) : typeActivity === 'Add Moto' ? (
                    <MotoContent act={activityMoto!.act} obj={activityMoto!.obj} />
                ) : typeActivity === 'Add User' && <UserContent act={activityUser!.act} obj={activityUser!.obj} />
            }
        </Modal>
    </>
}