import { ChangeEvent, FC, MouseEvent, useContext, useEffect, useState } from "react"

import { UserRequest } from "../../Interfaces/UserRequest"
import { FormProvider, useForm, SubmitHandler } from "react-hook-form"
import RegisterContext, { IRegister } from "./provider";
import toast from "react-hot-toast";

export const RegisterFeature: FC = () => {
    const [confPass, setConfPass] = useState<string>('');
    const [numero, setNumero] = useState<string>('');

    const initialValues: UserRequest = {
        password: '',
        username: '',
        email: '',
        phone: '',
        isAdmin: false,
        id: 0,
        me_register: {
            email: '',
            id: 0,
            phone: '',
            username: ''
        },
        users_register: [],
        photo: ''
    };

    const methods = useForm({ defaultValues: initialValues });

    const { postUser } = useContext(RegisterContext) as IRegister;
    const { reset, register, setValue, handleSubmit, getValues } = useForm<UserRequest>();

    const handleChangeConfPass = (event: ChangeEvent<HTMLInputElement>) => { setConfPass(event.target.value) }

    const handleRegister: SubmitHandler<UserRequest> = (data) => {
        const values = data;
        if (values.password !== confPass) return toast.error('Asegurate de que las contraseñas sean iguales.');
        if (values.username === '' || values.password === '' || values.email === '' || values.phone === '') return toast.error('Asegurate de rellenar todos los campos');

        setValue('isAdmin', false);
        setValue('photo', 'https://guiauniversitaria.mx/wp-content/uploads/2023/08/CHEEMS.png.webp');
        values.id = Math.floor(Math.random() * 10000);
        postUser(values);
        reset();
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (/[0-9]/.test(event.target.value)) {
            setValue('phone', event.target.value);
            setNumero(event.target.value);
        }
    }

    return (
        <div className="flex flex-col gap-3 items-center justify-center h-screen">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col items-center justify-center gap-5 bg-blue-300 dark:bg-neutral-200 text-black rounded-md py-8 px-10">
                    <p className="text-center text-3xl">Registrate!</p>
                    <div className="flex flex-col gap-2">
                        <p>Usuario</p>
                        <input type="text" className="rounded-md ring-1 ring-white" {...register('username')} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Contraseña</p>
                        <input type="password" className="rounded-md ring-1 ring-white" {...register('password')} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Confirmar contraseña</p>
                        <input onChange={handleChangeConfPass} type="password" className="rounded-md ring-1 ring-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Correo</p>
                        <input type="email" className="rounded-md ring-1 ring-white" {...register('email')} required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Telefono</p>
                        <input type="text" className="rounded-md ring-1 ring-white" value={numero} onChange={handleChange} maxLength={9} />
                    </div>
                    <button type="submit" className="bg-neutral-800 rounded-md px-6 py-0.5 text-white hover:scale-105">Registrarse</button>
                </form>
            </FormProvider>
        </div>
    )
}