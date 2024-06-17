import { MouseEvent, useContext } from "react";
import { UserRequest } from "../../../Interfaces/UserRequest";
import AdminContext, { IAdmin } from "../provider";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Redux/User/user.slice";

export const CardUser = (data: UserRequest) => {
    const { openDelete, setOpenDelete, setUserId, setOpenEditUser, openEditUser, getUserActivities } = useContext(AdminContext) as IAdmin;
    const dispatch = useDispatch();

    const actions = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-edit" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" /><path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" /></svg>,
            onClick: (event: MouseEvent<HTMLButtonElement>) => { //Editar usuario
                event.preventDefault();
                setOpenEditUser(!openEditUser);
                dispatch(setUser(data));
            },
            style: 'bg-green-400 rounded-md transition-all ease-in-out duration-100 hover:scale-105 p-2'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-minus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.009 .128" /><path d="M16 19h6" /></svg>,
            onClick: (event: MouseEvent<HTMLButtonElement>) => { //Eliminar usuario
                event.preventDefault();
                setOpenDelete(!openDelete);
                setUserId(data.id)
            },
            style: 'bg-red-400 rounded-md transition-all ease-in-out duration-100 hover:scale-105 p-2'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-type-xls"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><path d="M4 15l4 6" /><path d="M4 21l4 -6" /><path d="M17 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /><path d="M11 15v6h3" /></svg>,
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                getUserActivities(data.id.toString());
            },
            style: 'rounded-md cursor-pointer gap-3 flex p-2 justify-center focus:ring-1 bg-neutral-700 text-white hover:scale-105 transition-all ease-in-out duration-100'
        }
    ]

    return (
        <div className="flex flex-row justify-between items-center gap-2 bg-neutral-50 bg-opacity-90 rounded-md text-black p-2">
            <div className="flex flex-row gap-2 justify-center items-center">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
                {/* <img src={data.photo} alt={data.username} width={70} height={70} className="rounded-full bg-white" /> */}
                <div className="w-full">
                    <p><strong>Usuario:</strong> {data.username}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Telefono:</strong> {data.phone}</p>
                    <p><strong>Estado:</strong> {data.isAdmin ? 'Administrador' : 'Cliente'}</p>
                </div>
            </div>
            <div className="flex flex-row flex-wrap gap-2 items-center justify-center">
                {
                    actions.map((data, i) => (
                        <button onClick={data.onClick} className={data.style} key={i}>{data.icon}</button>
                    )).slice(0, 6)
                }
            </div>
        </div>
    )
}