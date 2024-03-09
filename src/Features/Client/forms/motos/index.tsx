import { FormProvider, useForm } from "react-hook-form"
import { MotoInput } from "../../../../components/Input"
import { MotosRequest } from "../../../../Interfaces/MotosRequest"
import { MouseEvent, useContext } from "react"
import toast from "react-hot-toast"
import ClientContext, { IClient } from "../../provider"
import { UserRequest } from "../../../../Interfaces/UserRequest"
import { getItem } from "../../../../components/StorageFunctions"

export const FormMotos = () => {
    const initialValues: MotosRequest = { conductor: '', cooperativa: '', foto: '', id: 0, num_moto: 0, ubicacion: '', id_user: 0 }
    const method = useForm({ defaultValues: initialValues });
    const { postMoto, setOpeAddMoto, openAddMoto } = useContext(ClientContext) as IClient;

    const { register, getValues, reset } = useForm<MotosRequest>();
    const user: UserRequest | null = getItem('user');

    const handleSave = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const values = getValues();
        if (values.conductor === "") return toast.error('Asegurate de ingresar el nombre del conductor');
        if (values.cooperativa === "") return toast.error('Asegurate de ingresar el nombre de la cooperativa');
        if (values.ubicacion === '') return toast.error('Asegurate de ingresar la ubicacion');
        if (values.num_moto === 0) return toast.error('Asegurate de ingresar el numero de la moto');

        values.id = Math.floor(Math.random() * 10000);
        values.id_user = user!.id;

        postMoto(values);
        setOpeAddMoto(!openAddMoto);
        reset();
    }

    return (
        <FormProvider {...method}>
            <div className="w-full shadow-md shadow-neutral-800 rounded-md p-2 flex flex-col gap-3 bg-blue-500 items-center text-white">
                <MotoInput title="N° de mototaxi" iRegister={register} textRegis="num_moto" />
                <MotoInput title="Nombre de conductor" iRegister={register} textRegis="conductor" />
                <MotoInput title="Cooperativa" iRegister={register} textRegis="cooperativa" />
                <MotoInput title="Foto" iRegister={register} textRegis="foto" />
                <MotoInput title="Ubicación" iRegister={register} textRegis="ubicacion" />
                <button onClick={handleSave} type="submit" className="bg-neutral-800 rounded-md px-6 py-0.5 text-white hover:scale-105">Guardar moto</button>
            </div>
        </FormProvider>
    )
}