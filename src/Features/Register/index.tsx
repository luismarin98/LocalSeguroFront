import { ChangeEvent, FC, MouseEvent, useContext, useState } from "react"

import { UserRequest } from "../../Interfaces/UserDomain"
import { FormProvider, useForm } from "react-hook-form"
import RegisterContext, { IRegister } from "./provider";
import toast from "react-hot-toast";

export const RegisterFeature: FC = () => {
    const [confPass, setConfPass] = useState<string>('');

    const initialValues: UserRequest = { password: '', username: '', email: '', phone: '', localsData: [], isAdmin: false, id: 0 };
    const methods = useForm({ defaultValues: initialValues });

    const { postUser } = useContext(RegisterContext) as IRegister;
    const { reset, register, getValues, setValue } = useForm<UserRequest>();

    const handleChangeConfPass = (event: ChangeEvent<HTMLInputElement>) => { setConfPass(event.target.value) }

    const handleRegister = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setValue('isAdmin', false);
        const values = getValues();
        if (values.password !== confPass) {
            toast.error('Asegurate de que las contraseñas sean iguales.')
        } else {
            postUser(values);
        }
        reset();
    }

    return (
        <div className="flex flex-col gap-3 items-center justify-center h-screen">
            <FormProvider {...methods}>
                <div className="flex flex-col items-center justify-center gap-5 p-3 bg-slate-200 text-black rounded-md w-[45vh] h-[70vh]">
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
                        <input type="email" className="rounded-md ring-1 ring-white" {...register('email')} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Telefono</p>
                        <input type="text" className="rounded-md ring-1 ring-white" {...register('phone')} />
                    </div>
                    <button onClick={handleRegister} className="bg-neutral-800 rounded-md px-6 py-0.5 text-white hover:scale-105">Registrarse</button>
                </div>
            </FormProvider>
        </div>
    )
}