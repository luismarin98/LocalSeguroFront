import { HTMLAttributes, MouseEvent, useContext, useEffect } from "react";
import { UserRequest } from "../../Interfaces/UserRequest";
import { getItem, getSession } from "../../components/StorageFunctions";
import { Modal } from "../../components/Modal";
import ProfileContext, { IProfile } from "./provider";
import { UpdatePass } from "./forms/formUpdatePass";
import { FormUpdatePhoto } from "./forms/formUpdatePhoto";
import { useNavigate } from "react-router-dom";
import { KeyRequest } from "../../Interfaces/KeyRequest";
import { generateRandomKey } from "../../components/segureKey";
import { KeyContainer } from "./Components/keyContainer";

export const ProfileFeature = () => {
    const user: UserRequest | null = getSession('user');

    const navigate = useNavigate();

    const {
        open,
        setOpen,
        setOpenModaPhoto,
        openModalPhoto,
        getLocals,
        getMotos,
        getUser,
        postKey,
        openKeyModal,
        setOpenKeyModal,
        getKey,
        updateKey,
        deleteKey,
        getBy
    } = useContext(ProfileContext) as IProfile;

    const buttons = [
        {
            title: 'Cambiar contraseña',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpen(!open)
            }
        },
        {
            title: user && user!.photo === null ? 'Añadir foto' : 'Cambiar foto',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setOpenModaPhoto(!openModalPhoto)
            }
        },
        {
            title: 'Refrescar datos',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                getLocals();
                getMotos();
                getUser();
            }
        },
        {
            title: 'Dashboard',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                navigate(`/dashboard/${user!.username}`)
            }
        }
    ]

    const keyButtons = [
        {
            title: 'Generar',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                const keyData: KeyRequest = {
                    id_user: user!.id,
                    key: generateRandomKey(20),
                }
                postKey(keyData);
            },
        },
        {
            title: 'Mostrar',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                getKey();
            }
        },
        {
            title: 'Actualizar',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                const keyData: KeyRequest = {
                    id_user: user!.id,
                    key: generateRandomKey(20),
                }
                updateKey(keyData);
            }
        },
        {
            title: 'Eliminar',
            onClick: (event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                deleteKey();
            }
        }
    ]

    useEffect(() => { user!.me_register !== 0 && getBy() }, [])

    const registredBy: UserRequest | null = getItem('registerBy');

    const classButton: HTMLAttributes<HTMLButtonElement> = { className: "flex flex-row gap-2 text-white dark:text-black dark:bg-neutral-200 bg-neutral-800 px-6 py-1 rounded-md hover:shadow-md hover:scale-105 transition-all ease-in-out dark:hover:shadow-neutral-100 hover:shadow-neutral-800" }

    return <>
        <div className="flex flex-col gap-3 w-full h-full items-center justify-center dark:text-neutral-900">
            <div className="flex flex-row flex-wrap gap-3 items-center justify-center ring-1 dark:ring-white ring-black p-2 rounded-md">
                <div className="flex flex-row flex-wrap gap-5 justify-center items-center dark:bg-blue-400 bg-green-300 p-3 rounded-md">
                    <img src={user!.photo!} alt={user!.username} className="w-32 h-32 rounded-full hover:shadow-md dark:hover:shadow-neutral-500 hover:scale-105 transition-all ease-in-out duration-100" />
                    <div className="flex flex-col gap-3">
                        <p><strong>Nombres:</strong> {user!.username}</p>
                        <p><strong>Correo:</strong> {user!.email}</p>
                        <p><strong>Telefono:</strong> +593 {user!.phone}</p>
                        <p><strong>Tipo de usuario:</strong> {user!.isAdmin ? 'Administrador' : 'Cliente'}</p>
                        {
                            registredBy && registredBy !== undefined && (
                                <div className="felx flex-col gap-2 w-full">
                                    <p className="text-xl uppercase font-bold">Registrado por</p>
                                    <p className="text-md"><strong>Usuario:</strong> {registredBy!.username}</p>
                                    <p className="text-md"><strong>Email:</strong> {registredBy!.email}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {
                        buttons.map((data, i) => (<button key={i} className="text-white dark:text-black dark:bg-neutral-200 bg-neutral-800 px-6 py-1 rounded-md hover:shadow-md hover:scale-105 transition-all ease-in-out dark:hover:shadow-neutral-100 hover:shadow-neutral-800" onClick={data.onClick}>{data.title}</button>))
                    }
                </div>
            </div>
            <div className="flex flex-row flex-wrap gap-3 items-center justify-center ring-1 dark:ring-white ring-black p-2 rounded-md">
                <p className="dark:text-white text-black">Llave de registro de usuarios</p>
                {
                    keyButtons.map((data, i) => (
                        <button key={i} onClick={data.onClick} className={classButton.className} >{data.title}</button>
                    ))
                }
            </div>
        </div >
        <Modal isOpen={openKeyModal} setIsOpen={setOpenKeyModal}><KeyContainer /></Modal>
        <Modal title="Cambiar contraseña" isOpen={open} setIsOpen={setOpen}><UpdatePass /></Modal>
        <Modal title="Cambiar foto" isOpen={openModalPhoto} setIsOpen={setOpenModaPhoto}><FormUpdatePhoto /></Modal>
    </>
}