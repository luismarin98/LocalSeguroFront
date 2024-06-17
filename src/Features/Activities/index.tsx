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
import { cuadrante_1, cuadrante_2, cuadrante_3, cuadrante_4, cuadrante_5, cuadrante_6 } from "../../components/Sectores";


export const ActivitiesFeature: FC = () => {
    const { openModal, setOpenModal, openDrawer, setOpenDrawer, typeActivity, value } = useContext(ActivitiesContext) as IActivities;
    const activities = useAppSelector(activitiesSelector);
    const initialValues: FilterActivities = { type: 'All', username: '' };

    const method = useForm({ defaultValues: initialValues });

    const activityLocal = useAppSelector(activityLocalSelector);
    const activityMoto = useAppSelector(activityMotoSelector);
    const activityUser = useAppSelector(activityUserSelector);

    const cuadrantes = [
        {
            sec: cuadrante_1
        },
        {
            sec: cuadrante_2
        },
        {
            sec: cuadrante_3
        },
        {
            sec: cuadrante_4
        },
        {
            sec: cuadrante_5
        },
        {
            sec: cuadrante_6
        }
    ]

    return <>
        <div className="w-full h-full flex flex-col gap-2 items-center">
            <FormProvider {...method}>
                <FormFilter />
            </FormProvider>
            <div className="w-full h-full p-2">
                <div className="flex flex-col md:no-scrollbar md:grid md:grid-rows-3 md:grid-flow-col gap-4 place-items-center overflow-y-auto max-h-full md:overflow-x-auto md:max-w-full h-full p-3">
                    {
                        activities && activities!.map((data, i) => (
                            <CardActivity key={i} {...data} />
                        ))
                    }
                </div>
            </div>
        </div>

        <Draw title="Editar actividad" open={openDrawer} setOpen={setOpenDrawer}>
            {
                typeActivity === 'Add Local' && activityLocal && activityLocal !== null && <FormEditLocal local={activityLocal!.obj} cuadranteValue={cuadrantes[value].sec!.map(data => data)} />
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