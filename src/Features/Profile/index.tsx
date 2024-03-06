import { MouseEvent, useContext } from "react";
import { UserRequest } from "../../Interfaces/UserRequest"
import getItem from "../../components/StorageFunctions"
import { Modal } from "../../components/Modal";
import ProfileContext, { IProfile } from "./provider";
import { UpdatePass } from "./forms/formUpdatePass";
import { FormUpdatePhoto } from "./forms/formUpdatePhoto";

export const ProfileFeature = () => {
    const user: UserRequest | null = getItem('user');
    const { open, setOpen, setOpenModaPhoto, openModalPhoto } = useContext(ProfileContext) as IProfile;

    const buttons = [
        {
            title: 'Cambiar contraseña',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpen(!open)
            }
        },
        {
            title: user!.photo === null ? 'Añadir foto' : 'Cambiar foto',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenModaPhoto(!openModalPhoto)
            }
        }
    ]

    return <>
        <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
            <div className="flex flex-row flex-wrap gap-5 justify-center items-center dark:bg-blue-400 bg-green-300 p-3 rounded-md">
                <img src={user!.photo!} alt={user!.username} className="w-32 h-32 rounded-full hover:shadow-md dark:hover:shadow-neutral-500 hover:scale-105 transition-all ease-in-out duration-100" />
                <div className="flex flex-col gap-3">
                    <p><strong>Nombres:</strong> {user!.username}</p>
                    <p><strong>Correo:</strong> {user!.email}</p>
                    <p><strong>Telefono:</strong> +593 {user!.phone}</p>
                    <p><strong>Tipo de usuario:</strong> {user!.isAdmin ? 'Administrador' : 'Usuario'}</p>
                    <p><strong>Registros en total:</strong> {user!.users_register!.length}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {
                    buttons.map((data, i) => (<button key={i} className="text-white dark:text-black dark:bg-neutral-200 bg-neutral-800 px-6 py-1 rounded-md hover:shadow-md hover:scale-105 transition-all ease-in-out dark:hover:shadow-neutral-100 hover:shadow-neutral-800" onClick={data.onClick}>{data.title}</button>))
                }
            </div>
        </div>
        <Modal title="Cambiar contraseña" isOpen={open} setIsOpen={setOpen}><UpdatePass /></Modal>
        <Modal title="Cambiar foto" isOpen={openModalPhoto} setIsOpen={setOpenModaPhoto}><FormUpdatePhoto /></Modal>
    </>
}