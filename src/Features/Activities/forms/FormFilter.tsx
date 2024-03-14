import { SubmitHandler, useForm } from "react-hook-form";
import { FilterActivities } from "../../../Interfaces/SearchRequest";
import { useContext } from "react";
import ActivitiesContext, { IActivities } from "../provider";

export const FormFilter = () => {
    const { register, handleSubmit, reset } = useForm<FilterActivities>();
    const { filterActivities } = useContext(ActivitiesContext) as IActivities;

    const submit: SubmitHandler<FilterActivities> = (data) => {
        filterActivities(data)
        reset();
    }

    const optionsSelect = [
        {
            value: 'All',
            title: 'Todas'
        },
        {
            value: 'Add Moto',
            title: 'Motos',
        },
        {
            value: 'Add Local',
            title: 'Locales',
        },
        {
            value: 'Add User',
            title: 'Usuarios',
        },
    ]

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-row flex-wrap gap-3 justify-evenly w-full items-center" >
            <label className="uppercase text-2xl">Actividades</label>
            <select className="text-center text-black rounded-md p-2" {...register('type')}>
                {
                    optionsSelect.map((data, i) => (
                        <option key={i} value={data.value}>{data.title}</option>
                    ))
                }
            </select>
            <input className="text-center text-black p-2 rounded-md" type="text" placeholder="Usuario" {...register('username')} />
            <button className="rounded-md flex items-center p-2 justify-center focus:ring-1 bg-white text-black hover:scale-105 transition-all ease-in-out duration-100" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg></button>
        </form>
    )
}