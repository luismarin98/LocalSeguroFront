import { MouseEvent, useContext } from "react";
import AdminContext, { IAdmin } from "../provider";

export const DialogModal = () => {
    const { userId, deleteUser, setOpenDelete, setUserId } = useContext(AdminContext) as IAdmin;

    const actions = [
        {
            title: 'Confirmar',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                deleteUser();
                setOpenDelete(false)
            },
            style: 'bg-red-400 hover:bg-red-500 text-white rounded-md p-2 hover:scale-105 shadow-md hover:shadow-neutral-800'
        },
        {
            title: 'Cancelar',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenDelete(false);
                setUserId(0);
            },
            style: 'bg-white hover:bg-neutral-100 text-black rounded-md p-2 hover:scale-105 shadow-md hover:shadow-neutral-800'
        }
    ];

    return <div className="rounded-md p-2 w-full flex flex-row gap-3">{
        actions.map((data, i) => (
            <button className={data.style} key={i} onClick={data.onClick}>{data.title}</button>
        ))
    }</div>
}