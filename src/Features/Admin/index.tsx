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

export const AdminFeature: FC = () => {
    const { openAddUser, setOpenAddUser, setOpenDelete, openDelete, openEditUser, setOpenEditUser } = useContext(AdminContext) as IAdmin;

    const users: UserRequest[] | null = getItem('users');

    const handleOpenModal = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenAddUser(!openAddUser);
    }

    return <div className="flex flex-row flex-wrap gap-2 w-full h-full items-center justify-center">
        <button onClick={handleOpenModal} className={`flex flex-col items-center w-30 h-30 sm:w-24 sm:h-24 p-2 text-center gap-2 dark:bg-neutral-100 bg-neutral-900 text-white dark:text-black transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width="70" height="70" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" /></svg>
            <p className="sm:text-sm">Añadir usuarios</p>
        </button>
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