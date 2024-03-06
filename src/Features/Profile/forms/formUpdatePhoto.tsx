import { useContext } from "react"
import ProfileContext, { IProfile } from "../provider"
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";
import { PhotoRequest } from "../../../Interfaces/PhotoRequest";

export const FormUpdatePhoto = () => {
    const initialValues: PhotoRequest = { photo: '' };
    const methods = useForm({ defaultValues: initialValues });

    const { updatePhoto, setOpenModaPhoto } = useContext(ProfileContext) as IProfile;

    const { handleSubmit, reset, register } = useForm<PhotoRequest>();

    const submit: SubmitHandler<PhotoRequest> = (data) => {
        if (data.photo === '') return toast.error('Asegurate de rellenar el campo antes de enviar');
        updatePhoto(data);
        reset();
        setOpenModaPhoto(false);
    }

    return <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submit)} className="bg-neutral-200 p-2 rounded-md flex flex-col items-center justify-center gap-3">
            <label className="flex flex-col gap-2 w-full">
                <p className="w-full">Enlace</p>
                <input className="w-full ring-1 ring-black" type="text" {...register('photo')} />
            </label>
            <button type="submit" className="bg-neutral-800 px-6 py-1 text-white transition-all ease-in-out hover:scale-105 hover:shadow-md rounded-md hover:shadow-neutral-800 flex flex-col gap-2 justify-center items-cente">Confirmar</button>
        </form>
    </FormProvider>
}