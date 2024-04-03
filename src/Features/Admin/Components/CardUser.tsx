import { MouseEvent, useContext } from "react";
import { UserRequest } from "../../../Interfaces/UserRequest";
import AdminContext, { IAdmin } from "../provider";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Redux/User/user.slice";

export const CardUser = (data: UserRequest) => {
    const { openDelete, setOpenDelete, setUserId, setOpenEditUser, openEditUser } = useContext(AdminContext) as IAdmin;
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
        }
    ]

    return (
        <div className="bg-neutral-700 rounded-md w-auto h-auto p-2 flex flex-row gap-2 justify-center  items-center">
            <div className="flex flex-row gap-2 justify-center items-center w-full">
                <img src={data.photo} alt={data.username} width={70} height={70} className="rounded-full bg-white" />
                <div className="w-full text-white">
                    <p><strong>Usuario:</strong> {data.username}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Telefono:</strong> {data.phone}</p>
                    <p><strong>Estado:</strong> {data.isAdmin ? 'Administrador' : 'Cliente'}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
                {
                    actions.map((data, i) => (
                        <button onClick={data.onClick} className={data.style} key={i}>{data.icon}</button>
                    )).slice(0, 6)
                }
            </div>
        </div>
    )
}