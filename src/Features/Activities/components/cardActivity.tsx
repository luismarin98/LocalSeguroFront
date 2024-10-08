import { MouseEvent, useContext } from "react";
import ActivitiesContext, { IActivities } from "../provider";
import { ActData } from "../../../Interfaces/ActivityRequest";

export const CardActivity = (props: ActData) => {

    const { getActivity } = useContext(ActivitiesContext) as IActivities;

    const buttons = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-list-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M18.5 18.5l2.5 2.5" /><path d="M4 6h16" /><path d="M4 12h4" /><path d="M4 18h4" /></svg>,
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                getActivity(props)
            }
        }
    ]

    return <div className="flex flex-row gap-2 justify-center items-center dark:bg-white bg-green-400 dark:text-black text-white rounded-md p-3">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
        <p className="text-md"><strong>{props.username}</strong> {props.type === 'Add Local' ? 'añadio un nuevo local' : props.type === 'Add Moto' ? 'añadio una nueva moto' : props.type === 'Add User' && 'añadio un nuevo usuario'}</p>
        <div className="flex items-center justify-center">
            {
                buttons.map((data, i) => (
                    <button key={i} onClick={data.onClick} className="dark:text-white bg-neutral-800 rounded-md p-2 hover:scale-105 hover:shadow-neutral-800 shadow-md">
                        {data.icon}
                    </button>
                ))
            }
        </div>
    </div>
}