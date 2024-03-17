import { FC, MouseEvent, useContext, useEffect } from "react";
import LoginContext, { ILogin } from "./provider";
import { LoginRequest, UserRequest } from "../../Interfaces/UserRequest";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { getSession } from "../../components/StorageFunctions";

export const LoginFeature: FC = () => {
    const initialValues: LoginRequest = {
        password: '',
        username: ''
    };

    const methos = useForm({ defaultValues: initialValues });

    const navigate = useNavigate();

    const { getUser } = useContext(LoginContext) as ILogin;
    const { getValues, reset, register } = useForm<LoginRequest>();

    const handLog = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const data = getValues();
        if (!data.username || !data.password) return toast.error('Asegurate de rellenar los campos!')
        getUser(data);
        reset();
    }

    useEffect(() => {
        const user: UserRequest | null = getSession('user');
        if (user) return navigate(`/dashboard/${user!.username}`);
    })

    return (
        <div className="flex flex-col gap-3 items-center justify-center h-screen w-screen">
            <FormProvider {...methos}>
                <div className="flex flex-col items-center justify-center gap-5 p-3 bg-slate-200 text-black rounded-md">
                    <label className="text-center text-3xl">Login System</label>
                    <label className="flex flex-col gap-2">
                        <p>Usuario</p>
                        <input type="text" className="rounded-md ring-1 ring-white text-center p-1" {...register('username')} />
                    </label>
                    <label className="flex flex-col gap-2">
                        <p>Contraseña</p>
                        <input type="password" className="rounded-md ring-1 ring-white text-center p-1" {...register('password')} />
                    </label>
                    <div className="flex flex-row flex-wrap gap-2">
                        <button onClick={handLog} className="bg-neutral-800 rounded-md px-6 py-0.5 text-white hover:scale-105" type="submit">Acceder</button>
                        <Link className="px-6 py-1 bg-neutral-800 text-white rounded-md hover:scale-105 transition-all duration-100" to='/register'>Registrarse</Link>
                    </div>
                </div>
            </FormProvider>
        </div>
    )
}