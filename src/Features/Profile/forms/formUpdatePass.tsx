import { useForm, SubmitHandler } from "react-hook-form"
import { UpdatePassword } from "../../../Interfaces/UpdateRequest"
import { ChangeEvent, useContext } from "react";
import ProfileContext, { IProfile } from "../provider";
import toast from "react-hot-toast";

export const UpdatePass = () => {
    const { register, reset, handleSubmit } = useForm<UpdatePassword>();
    const { setConfPass, confPass, updatePass, setOpen } = useContext(ProfileContext) as IProfile;

    const handleConf = (event: ChangeEvent<HTMLInputElement>) => {
        setConfPass(event.target.value);
    }

    const submit: SubmitHandler<UpdatePassword> = (data) => {
        if (data.newPass === '' || data.olPass === '' || confPass === '') return toast.error('Asegurate de rellenar todos los campos');
        if (data.newPass !== confPass) return toast.error('Asegurate de ingresar la misma contraseña');
        updatePass(data);
        reset();
        setOpen(false);
    }

    return <form onSubmit={handleSubmit(submit)} className="bg-neutral-100 p-2 rounded-md flex flex-col gap-2 justify-center items-center">
        <label className="flex flex-row w-full p-2">
            <p className="w-full">Antigua contraseña</p>
            <input className="w-full ring-1 ring-black" type="text" {...register('olPass')} />
        </label>
        <label className="flex flex-row w-full p-2">
            <p className="w-full">Nueva contraseña</p>
            <input className="w-full ring-1 ring-black" type="text" {...register('newPass')} />
        </label>
        <label className="flex flex-row w-full p-2">
            <p className="w-full">Confirmar contraseña</p>
            <input className="w-full ring-1 ring-black" type="text" onChange={handleConf} />
        </label>
        <button type="submit" className="bg-neutral-800 px-6 py-1 text-white transition-all ease-in-out hover:scale-105 hover:shadow-md rounded-md hover:shadow-neutral-800 flex flex-col gap-2 justify-center items-cente">Confirmar</button>
    </form>
}