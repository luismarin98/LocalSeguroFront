import { MouseEvent, useContext, useEffect } from "react"
import ActivitiesContext, { IActivities } from "../provider"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { LocalsRequest } from "../../../Interfaces/LocalRequest";
import { useAppSelector } from "../../../Redux/store";
import { activityLocalSelector } from "../../../Redux/Activity/activity.selector";

interface propsSectores {
    local: LocalsRequest;
    cuadranteValue: string[];
}

export const FormEditLocal = (props: propsSectores) => {
    const { updateActivity, setOpenDrawer } = useContext(ActivitiesContext) as IActivities;

    const { handleSubmit, register, setValue, reset } = useForm<LocalsRequest>();
    const localAct = useAppSelector(activityLocalSelector);

    const submit: SubmitHandler<LocalsRequest> = (data) => {
        updateActivity(localAct!.act.id, data);
        reset();
    }

    const initialValues: LocalsRequest = { dniOnwer: '', id: 0, id_user: 0, linkPhoto: '', localName: '', location: '', nameOwner: '', phone: 0, sector: '', value: 0 }

    const method = useForm({ defaultValues: initialValues });

    const handleCancelar = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenDrawer(false);
    }

    useEffect(() => {
        setValue('id', props.local.id);
        setValue('id_user', props.local.id_user);
        setValue('dniOnwer', props.local.dniOnwer);
        setValue('nameOwner', props.local.nameOwner);
        setValue('localName', props.local.localName);
        setValue('phone', props.local.phone);
        setValue('location', props.local.location);
        setValue('linkPhoto', props.local.linkPhoto);
        // eslint-disable-next-line
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
                <p className="text-black w-full">Foto</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('linkPhoto')} />
            </label>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Telefono</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('phone')} />
            </label>
            <label className="flex flex-row justify-center w-full items-center p-2">
                <p className="w-full">Sector</p>
                <select className="w-full rounded-md text-center flex flex-col" {...register('sector')}>
                    {
                        props.cuadranteValue.map((data, i) => (
                            <option key={i} value={data}>{data}</option>
                        ))
                    }
                </select>
            </label>
            <div className="flex flex-row flex-wrap gap-2 items-center justify-center">
                <button className={`bg-green-500 px-6 py-1 text-white rounded-md hover:scale-105 transition-all ease-in-out duration-100 hover:shadow-md hover:shadow-neutral-800`} type="submit">Guardar</button>
                <button className={`bg-red-500 px-6 py-1 text-white rounded-md hover:scale-105 transition-all ease-in-out duration-100 hover:shadow-md hover:shadow-neutral-800`} onClick={handleCancelar}>Cancelar</button>
            </div>
        </form>
    </FormProvider>
}