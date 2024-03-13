import { FC, MouseEvent, useContext } from "react";
import { UserRequest } from "../../Interfaces/UserRequest";
import { getItem } from "../../components/StorageFunctions";
import { Modal } from "../../components/Modal";
import AdminContext, { IAdmin } from "./provider";
import { FormUser } from "./forms/formUser";
import { CardUser } from "./Components/CardUser";
import { FormSearch } from "./forms/formSearch";
import { DialogModal } from "./Components/DialogModal";
import { FormEditUser } from "./forms/formEdit";
import { useNavigate } from "react-router-dom";

export const AdminFeature: FC = () => {
    const { openAddUser, setOpenAddUser, setOpenDelete, openDelete, openEditUser, setOpenEditUser } = useContext(AdminContext) as IAdmin;

    const users: UserRequest[] | null = getItem('users');

    const navigate = useNavigate();

    const buttons = [
        {
            title: 'Añadir usuarios',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenAddUser(!openAddUser);
            },
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" /></svg>
        },
        {
            title: 'Regresar',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                navigate('/dashboard')
            },
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-caret-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 6l-6 6l6 6v-12" /></svg>
        }
    ]

    return <div className="flex flex-row flex-wrap gap-2 w-full h-full items-center justify-center">
        <div className="flex flex-col gap-2 justify-center items-center">
            {
                buttons.map((data, i) => (
                    <button key={i} onClick={data.onClick} className={`flex w-full flex-row items-center justify-center p-2 text-center gap-2 dark:bg-neutral-100 bg-neutral-900 text-white dark:text-black transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                        {data.icon}
                        <p className="sm:text-sm">{data.title}</p>
                    </button>
                ))
            }
        </div>
        <div className="w-5/6 h-5/6 flex flex-col gap-2 justify-center">
            <FormSearch />
            <div className="bg-neutral-200 p-2 overflow-x-auto no-scrollbar rounded-md w-full h-full shadow-inner shadow-neutral-800 grid grid-rows-2 grid-flow-col gap-4 place-items-center">
                {
                    users && users!.length > 0 && users!.map((data, i) => (
                        <CardUser key={i} {...data} />
                    ))
                }
            </div>
        </div>
        <Modal title="Añadir usuario" isOpen={openAddUser} setIsOpen={setOpenAddUser}><FormUser /></Modal>
        <Modal title="Editar usuario" isOpen={openEditUser} setIsOpen={setOpenEditUser} ><FormEditUser /></Modal>
        <Modal title="Estas seguro/a de eliminar este usuario?" isOpen={openDelete} setIsOpen={setOpenDelete} ><DialogModal /></Modal>
    </div>
}