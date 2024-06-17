import { SubmitHandler, useForm } from "react-hook-form";
import { FilterActivities } from "../../../Interfaces/SearchRequest";
import { useContext } from "react";
import ActivitiesContext, { IActivities } from "../provider";
import { Link } from "react-router-dom";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { getSession } from "../../../components/StorageFunctions";
import { LinkStyle, butonStyle } from "../../../components/Styles";
import { useAppSelector } from "../../../Redux/store";
import { activitiesSelector } from "../../../Redux/Activity/activity.selector";
import { DownloadExcel } from "../../../components/DownloadExcel";

export const FormFilter = () => {
    const { register, handleSubmit, reset } = useForm<FilterActivities>();
    const { filterActivities } = useContext(ActivitiesContext) as IActivities;
    const activities = useAppSelector(activitiesSelector);
    const user: UserRequest | null = getSession('user');

    const submit: SubmitHandler<FilterActivities> = (data) => {
        filterActivities(data);
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

    const filterIcon: JSX.Element = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg>;
    const backIcon: JSX.Element = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>

    return (
        <div className="w-full p-3">
            <form onSubmit={handleSubmit(submit)} className="flex flex-row flex-wrap gap-3 justify-evenly w-full items-center text-black p-2 bg-white bg-opacity-90 rounded-md">
                <label className="text-xl">Actividades</label>
                <select className="text-center bg-neutral-700 text-white rounded-md p-2 hover:scale-105  transition-all duration-100 ease-in-out" {...register('type')}>
                    {
                        optionsSelect.map((data, i) => (
                            <option key={i} value={data.value}>{data.title}</option>
                        ))
                    }
                </select>
                <input className="text-center text-black p-2 rounded-md bg-neutral-200 focus:scale-105 transition-all duration-100 ease-in-out" type="text" placeholder="Usuario" {...register('username')} />
                <div className="flex flex-row gap-2 items-center justify-center">
                    <button type="submit"  {...butonStyle}>{filterIcon}</button>
                    <Link to={`/dashboard/${user!.id}`} {...LinkStyle}>{backIcon} Regresar</Link>
                    <DownloadExcel activity={activities!} name="Actividades" />
                </div>
            </form>
        </div>
    )
}