import { ChangeEvent, useContext } from 'react'
import AdminContext, { IAdmin } from '../provider';
import { SearchRequest } from '../../../Interfaces/SearchRequest';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';

export const FormSearch = () => {

    const initialValues: SearchRequest = { filtro: null, nombre: '' };
    const methods = useForm({ defaultValues: initialValues });

    const { getUsers, setUserAdmin, setValueSelect, valueSelect } = useContext(AdminContext) as IAdmin;
    const { register, handleSubmit, setValue } = useForm<SearchRequest>();

    const submit: SubmitHandler<SearchRequest> = (data) => { getUsers(data) }

    const handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === 'true') {
            setUserAdmin(true)
            setValueSelect('true');
            setValue('filtro', true);
        } else if (event.target.value === 'false') {
            setUserAdmin(false)
            setValueSelect('false');
            setValue('filtro', false);
        } else if (event.target.value === 'null') {
            setUserAdmin(null);
            setValueSelect('null');
            setValue('filtro', null);
        }
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(submit)} className="flex flex-row flex-wrap gap-2 justify-around items-center">
                <h1>Historial de acciones</h1>
                <select value={valueSelect} onChange={handleChangeOption} className="ring-1 ring-black text-black rounded-md p-1 transition-all ease-in-out duration-100 hover:shadow-md hover:shadow-neutral-800 cursor-pointer">
                    <option value='null'>Filtrar por:</option>
                    <option value='true'>Administradores</option>
                    <option value='false'>Clientes</option>
                </select>
                <input {...register('nombre')} type="text" placeholder="Nombre" className="dark:bg-white bg-blue-300 text-black text-center px-5 py-1 rounded-md shadow-inner focus:shadow-neutral-800 " />
                <button type='submit' className="p-2 text-black bg-neutral-300 hover:shadow-md hover:shadow-neutral-800 rounded-md hover:scale-105 transition-all duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rotate-clockwise-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" /><path d="M5.63 7.16l0 .01" /><path d="M4.06 11l0 .01" /><path d="M4.63 15.1l0 .01" /><path d="M7.16 18.37l0 .01" /><path d="M11 19.94l0 .01" /></svg>
                </button>
            </form>
        </FormProvider>
    )
}