import { FC, MouseEvent, useContext } from "react";
import { Modal } from "../../components/Modal";
import AdminContext, { IAdmin } from "./provider";
import { FormUser } from "./forms/formUser";
import { CardUser } from "./Components/CardUser";
import { FormSearch } from "./forms/formSearch";
import { DialogModal } from "./Components/DialogModal";
import { FormEditUser } from "./forms/formEdit";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../Redux/store";
import { usersSelector } from "../../Redux/User/user.selector";
import { useDispatch } from "react-redux";
import { list_users } from "../../Redux/User/user.slice";
import { UserRequest } from "../../Interfaces/UserRequest";
import { getSession } from "../../components/StorageFunctions";

export const AdminFeature: FC = () => {
    const { openAddUser, setOpenAddUser, setOpenDelete, openDelete, openEditUser, setOpenEditUser } = useContext(AdminContext) as IAdmin;
    const user: UserRequest | null = getSession('user');

    const users = useAppSelector(usersSelector);
    const dispatch = useDispatch();

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
                navigate(`/dashboard/${user!.id}`);
                dispatch(list_users([]));
            },
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-caret-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 6l-6 6l6 6v-12" /></svg>
        }
    ]

    return (
        <div className="flex flex-col gap-2 p-5 items-center justify-between w-full h-full">
            <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
                {
                    buttons.map((data, i) => (
                        <button key={i} onClick={data.onClick} className={`flex flex-row items-center justify-center py-1 px-6 text-center gap-2 dark:bg-neutral-100 bg-neutral-900 text-white dark:text-black transition-all duration-75 hover:scale-105 rounded-md hover:shadow-md hover:shadow-neutral-900`}>
                            {data.icon}
                            <p className="sm:text-sm">{data.title}</p>
                        </button>
                    ))
                }
            </div>
            <div className="w-full h-full flex flex-col gap-2 justify-center">
                <FormSearch />
                <div className="h-full p-2 overflow-x-auto no-scrollbar grid grid-rows-3 grid-flow-col gap-4 place-items-center">
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
    )
}