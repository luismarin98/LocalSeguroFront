import { useContext, MouseEvent } from "react";
import { LocalsRequest } from "../../../../Interfaces/LocalRequest";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Input } from "../../../../components/Input";
import ClientContext, { IClient } from "../../provider";
import { getSession } from "../../../../components/StorageFunctions";
import { UserRequest } from "../../../../Interfaces/UserRequest";

interface propsSectores {
    cuadranteValue: string[];
}

export const FormLocals = (props: propsSectores) => {
    const { setOpenAddLocal, openAddLocal, postLocal, value } = useContext(ClientContext) as IClient;
    const initialValues: LocalsRequest = { dniOnwer: '', id: 0, linkPhoto: '', localName: '', location: '', nameOwner: '', phone: 0, id_user: 0, sector: '', value: 0 };

    const methods = useForm({ defaultValues: initialValues });

    const { register, getValues, reset } = useForm<LocalsRequest>();

    const user: UserRequest | null = getSession('user');

    const handlesave = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const values = getValues();

        if (values.dniOnwer === null) return toast.error('Asegurate de ingresar la cedula del dueño del local');
        if (values.localName === null) return toast.error('Asegurate de ingresar el nombre del local');
        if (values.phone === null) return toast.error('Asegurate de ingresar el numero de telefono del local');

        values.id = Math.floor(Math.random() * 10000);
        values.id_user = user!.id;
        values.value = value;

        postLocal(values)
        setOpenAddLocal(!openAddLocal);
        reset();
    }

    return <FormProvider {...methods}>
        <form className="w-full shadow-md shadow-neutral-800 rounded-md p-2 flex flex-col gap-3 bg-blue-500 items-center">
            <Input title="Dni dueño" iRegister={register} textRegis="dniOnwer" />
            <Input title="Nombres del dueño" iRegister={register} textRegis="nameOwner" />
            <Input title="Nombre del local" iRegister={register} textRegis="localName" />
            <Input title="Telefono" iRegister={register} textRegis="phone" />
            <Input title="Ubicacion del local" iRegister={register} textRegis="location" />
            <Input title="Foto de visita al local" iRegister={register} textRegis="linkPhoto" />
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
            <button type="submit" onClick={handlesave} className="bg-neutral-800 rounded-md px-6 py-0.5 text-white hover:scale-105">Guardar local</button>
        </form>
    </FormProvider>
}