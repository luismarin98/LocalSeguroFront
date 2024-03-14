import { MouseEvent, useContext, useEffect } from "react"
import ActivitiesContext, { IActivities } from "../provider"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { LocalsRequest } from "../../../Interfaces/LocalRequest";
import { ActivityLocal } from "../../../Interfaces/ActivityRequest";
import { getItem } from "../../../components/StorageFunctions";

export const FormEditLocal = (local: LocalsRequest) => {
    const { updateActivity, setOpenDrawer } = useContext(ActivitiesContext) as IActivities;

    const { handleSubmit, register, setValue, reset } = useForm<LocalsRequest>();
    const localAct: ActivityLocal | null = getItem('activityLocal');

    const submit: SubmitHandler<LocalsRequest> = (data) => {
        updateActivity(localAct!.act.id, data);
        reset();
    }

    const initialValues: LocalsRequest = { dniOnwer: '', id: 0, id_user: 0, linkPhoto: '', localName: '', location: '', nameOwner: '', phone: '' }

    const method = useForm({ defaultValues: initialValues });

    const handleCancelar = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenDrawer(false);
    }

    useEffect(() => {
        setValue('id', local.id);
        setValue('id_user', local.id_user);
        setValue('dniOnwer', local.dniOnwer);
        setValue('nameOwner', local.nameOwner);
        setValue('localName', local.localName);
        setValue('phone', local.phone);
        setValue('location', local.location);
        setValue('linkPhoto', local.linkPhoto);
    }, [])

    return <FormProvider {...method}>
        <form className="w-full p-2 flex flex-col gap-3 h-full justify-center items-center" onSubmit={handleSubmit(submit)}>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">DNI</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('dniOnwer')} />
            </label>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Dueño del local</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('nameOwner')} />
            </label>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Nombre del local</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('localName')} />
            </label>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Ubicacion</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('location')} />
            </label>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Telefono</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('phone')} />
            </label>
            <div className="flex flex-row flex-wrap gap-2 items-center justify-center">
                <button className={`bg-green-500 px-6 py-1 text-white rounded-md hover:scale-105 transition-all ease-in-out duration-100 hover:shadow-md hover:shadow-neutral-800`} type="submit">Guardar</button>
                <button className={`bg-red-500 px-6 py-1 text-white rounded-md hover:scale-105 transition-all ease-in-out duration-100 hover:shadow-md hover:shadow-neutral-800`} onClick={handleCancelar}>Cancelar</button>
            </div>
        </form>
    </FormProvider>
}