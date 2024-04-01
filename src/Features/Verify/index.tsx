import { FC, useContext } from "react";
import { KeyRequest } from "../../Interfaces/KeyRequest";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import VerifyContext, { IVerify } from "./provider";

export const VerifyFeature: FC = () => {
    const initialValues: KeyRequest = { id_user: 0, key: '' };

    const method = useForm({ defaultValues: initialValues });

    const { processVerify } = useContext(VerifyContext) as IVerify;

    const { handleSubmit, register, reset } = useForm<KeyRequest>()

    const submit: SubmitHandler<KeyRequest> = (data) => {
        processVerify(data.key);
        reset();
    }

    return (
        <FormProvider {...method}>
            <div className="h-screen w-screen flex items-center justify-center">
                <form onSubmit={handleSubmit(submit)} className="bg-neutral-50 text-black flex flex-col gap-2 items-center rounded-md shadow-inner p-3 shadow-neutral-800 w-1/3">
                    <p className="text-lg">Ingrese la llave de registro</p>
                    <input className="bg-blue-300 focus:bg-blue-200 w-full rounded-md p-1 text-center" type="text" {...register('key')} />
                    <button type="submit" className="text-white px-6 py-1 rounded-md bg-neutral-800 transition-all ease-out duration-100 hover:scale-105 hover:shadow-neutral-800 shadow-md">Verificar</button>
                </form>
            </div>
        </FormProvider>
    )
}