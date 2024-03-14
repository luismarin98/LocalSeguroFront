import { useContext, MouseEvent, useEffect } from "react";
import ActivitiesContext, { IActivities } from "../provider";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { getItem } from "../../../components/StorageFunctions";
import { ActivityMoto } from "../../../Interfaces/ActivityRequest";
import { MotosRequest } from "../../../Interfaces/MotosRequest";

export const FormEditMoto = (moto: MotosRequest) => {
    const { updateActivity, setOpenDrawer } = useContext(ActivitiesContext) as IActivities;

    const { handleSubmit, register, setValue, reset } = useForm<MotosRequest>();
    const motoAct: ActivityMoto | null = getItem('activityLocal');

    const submit: SubmitHandler<MotosRequest> = (data) => {
        updateActivity(motoAct!.act.id, data);
        reset();
    }

    const initialValues: MotosRequest = { conductor: '', cooperativa: '', foto: '', id: 0, num_moto: 0, ubicacion: '', id_user: 0 }

    const method = useForm({ defaultValues: initialValues });

    const handleCancelar = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenDrawer(false);
    }

    useEffect(() => {
        setValue('id', moto.id);
        setValue('conductor', moto.conductor);
        setValue('cooperativa', moto.cooperativa);
        setValue('foto', moto.foto);
        setValue('id_user', moto.id_user);
        setValue('ubicacion', moto.ubicacion);
        setValue('num_moto', moto.num_moto);
        // eslint-disable-next-line
    }, [])

    return <FormProvider {...method}>
        <form className="w-full p-2 flex flex-col gap-3 h-full justify-center items-center" onSubmit={handleSubmit(submit)}>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Conductor</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('conductor')} />
            </label>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Cooperativa</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('cooperativa')} />
            </label>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Numero de moto</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('num_moto')} />
            </label>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Ubicacion</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('ubicacion')} />
            </label>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Foto</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('foto')} />
            </label>
            <div className="flex flex-row flex-wrap gap-2 items-center justify-center">
                <button className={`bg-green-500 px-6 py-1 text-white rounded-md hover:scale-105 transition-all ease-in-out duration-100 hover:shadow-md hover:shadow-neutral-800`} type="submit">Guardar</button>
                <button className={`bg-red-500 px-6 py-1 text-white rounded-md hover:scale-105 transition-all ease-in-out duration-100 hover:shadow-md hover:shadow-neutral-800`} onClick={handleCancelar}>Cancelar</button>
            </div>
        </form>
    </FormProvider>
}