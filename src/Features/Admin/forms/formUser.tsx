import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { getSession } from "../../../components/StorageFunctions";
import { ChangeEvent, useContext, useEffect } from "react";
import AdminContext, { IAdmin } from "../provider";
import { UserInput } from "../../../components/Input";
import toast from "react-hot-toast";
import { butonStyle } from "../../../components/Styles";

export const FormUser = () => {
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

    const methods = useForm({ defaultValues: initialValues });
    const user: UserRequest | null = getSession('user');

    const { postUser, setValueSelect, valueSelect, setOpenAddUser, setNumero, numero } = useContext(AdminContext) as IAdmin;
    const { handleSubmit, reset, register, setValue } = useForm<UserRequest>();

    const submit: SubmitHandler<UserRequest> = (values) => {
        values.id = Math.floor(Math.random() * 10000);
        if (values.username === '' || values.password === '' || values.email === '' || values.phone === 0) return toast.error('Asegurate de rellenar todos los campos');
        postUser(values);
        setOpenAddUser(false);
        reset();
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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (/[0-9]/.test(event.target.value)) {
            setValue('phone', parseInt(event.target.value));
            setNumero(parseInt(event.target.value));
        }
    }

    useEffect(() => {
        setValue('me_register', user!.id);
    })

    return <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submit)} className="w-full shadow-md shadow-neutral-800 rounded-md p-2 flex flex-col gap-3 bg-blue-500 items-center justify-center">
            <UserInput title="Nombre de usuario" type="text" iRegister={register} textRegis="username" />
            <UserInput title="Contraseña" type="text" iRegister={register} textRegis="password" />
            <UserInput title="Email" type="text" iRegister={register} textRegis="email" />
            <UserInput title='Link foto' type="text" iRegister={register} textRegis="photo" />
            <label className="w-full flex flex-row p-2 gap-3">
                <p className="w-full text-white">Telefono</p>
                <input className="ring-1 ring-black text-black" type='text' value={numero} onChange={handleChange} maxLength={10} />
            </label>
            <label className="flex flex-wow gap-3 p-2 w-full">
                <p className="w-full text-white">Seleccione un estado</p>
                <select value={valueSelect} onChange={handleChangeOption} className="ring-1 ring-black text-black rounded-md transition-all ease-in-out duration-100 hover:shadow-md hover:shadow-neutral-800 cursor-pointer">
                    <option value='true'>Administador</option>
                    <option value='false'>Cliente</option>
                </select>
            </label>
            <button type="submit" {...butonStyle}>Crear usuario</button>
        </form>
    </FormProvider>
}