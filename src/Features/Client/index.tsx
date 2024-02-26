import { FC, useContext } from "react";
import { UserRequest } from "../../Interfaces/UserRequest";
import getItem from "../../components/StorageFunctions";
import { Modal } from "../../components/Modal";
import { FormLocal } from "../HomeDash/forms/formLocal";
import ClientContext, { IClient } from "./provider";

export const ClientFeature: FC = () => {
    const userLocal: UserRequest | null = getItem('user');
    const { isOpen, setIsOpen } = useContext(ClientContext) as IClient;

    const handleOpenModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>Formulario vacio</div>
    )
}