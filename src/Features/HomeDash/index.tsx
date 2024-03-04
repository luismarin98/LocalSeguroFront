import { FC } from "react"
import { UserRequest } from "../../Interfaces/UserRequest"
import getItem from "../../components/StorageFunctions"
import { Link } from "react-router-dom";

const client_buttons = [
    {
        title: 'Añadir',
        href: '/dashboard/client',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-table-plus" width="50" height="50" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" /><path d="M3 10h18" /><path d="M10 3v18" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
    },
    {
        title: 'Registros',
        href: '/dashboard/activities',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list-details" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 5h8" /><path d="M13 9h5" /><path d="M13 15h8" /><path d="M13 19h5" /><path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>
    }
]

export const HomeDashFeature: FC = () => {
    const user: UserRequest | null = getItem('user');

    if (user!.isAdmin) return (
        <div>Admin Button</div>
    )

    return (
        <div className="flex flex-row flex-wrap w-full items-center justify-center gap-2">
            {
                client_buttons.map((obj, i) => (<Link className="w-32 h-32 bg-neutral-800 transition-all ease-in-out hover:scale-105 hover:shadow-md rounded-md hover:shadow-neutral-800 text-white flex flex-col gap-2 justify-center items-center" key={i} to={obj.href}>{obj.icon}{obj.title}</Link>))
            }
        </div>
    )
}