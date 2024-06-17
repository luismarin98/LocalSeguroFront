import { useContext, MouseEvent, useEffect, ChangeEvent, useState } from "react";
import { UserRequest } from "../../../Interfaces/UserRequest"
import ActivitiesContext, { IActivities } from "../provider";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../../Redux/store";
import { activityUserSelector } from "../../../Redux/Activity/activity.selector";

export const FormEditUser = (user: UserRequest) => {
    const { updateActivity, setOpenDrawer } = useContext(ActivitiesContext) as IActivities;
    const [valueSelect, setValueSelect] = useState<string>('');

    const { handleSubmit, register, setValue, reset } = useForm<UserRequest>();
    const userAct = useAppSelector(activityUserSelector);

    const submit: SubmitHandler<UserRequest> = (data) => {
        updateActivity(userAct!.act.id, data);
        reset();
    }

    const initialValues: UserRequest = {
        password: '',
        username: '',
        email: '',
        phone: 0,
        isAdmin: false,
        id: 0,
        me_register: 0,
        photo: ''
    };

    const method = useForm({ defaultValues: initialValues });

    const handleCancelar = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenDrawer(false);
    }

    const handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === 'true') {
            setValue('isAdmin', true);
            setValueSelect('true');
        } else if (event.target.value === 'false') {
            setValue('isAdmin', false);
            setValueSelect('false');
        }
    }

    useEffect(() => {
        setValue('id', user.id);
        setValue('email', user.email);
        setValue('isAdmin', user.isAdmin);
        setValue('me_register', user.me_register);
        setValue('phone', user.phone);
        setValue('photo', user.photo);
        // eslint-disable-next-line
    }, [])

    return <FormProvider {...method}>
        <form className="w-full p-2 flex flex-col gap-3 h-full justify-center items-center" onSubmit={handleSubmit(submit)}>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Usuario</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('username')} />
            </label>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Contraseña</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('password')} />
            </label>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Telefono</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('phone')} />
            </label>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Foto</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('photo')} />
            </label>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="text-black w-full">Email</p>
                <input className="w-full ring-1 ring-black p-1 text-center rounded-md" type="text" {...register('email')} />
            </label>
            <label className="w-full flex flex-row gap-2 p-2">
                <p className="w-full text-white">Seleccione un estado</p>
                <select value={valueSelect} onChange={handleChangeOption} className="ring-1 ring-black text-black rounded-md transition-all ease-in-out duration-100 hover:shadow-md hover:shadow-neutral-800 cursor-pointer">
                    <option value='true'>Administador</option>
                    <option value='false'>Cliente</option>
                </select>
            </label>

            <div className="flex flex-row flex-wrap gap-2 items-center justify-center">
                <button className={`bg-green-500 px-6 py-1 text-white rounded-md hover:scale-105 transition-all ease-in-out duration-100 hover:shadow-md hover:shadow-neutral-800`} type="submit">Guardar</button>
                <button className={`bg-red-500 px-6 py-1 text-white rounded-md hover:scale-105 transition-all ease-in-out duration-100 hover:shadow-md hover:shadow-neutral-800`} onClick={handleCancelar}>Cancelar</button>
            </div>
        </form>
    </FormProvider>
}