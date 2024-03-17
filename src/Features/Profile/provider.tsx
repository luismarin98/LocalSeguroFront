import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useProfile } from "./hooks/useProfile";
import { UpdatePassword } from "../../Interfaces/UpdateRequest";
import { PhotoRequest } from "../../Interfaces/PhotoRequest";
import { useKey } from "./hooks/useKey";
import { KeyRequest } from "../../Interfaces/KeyRequest";

export interface IProfile {
    open: boolean;
    confPass: string;
    openModalPhoto: boolean;
    openKeyModal: boolean;
    key: string;

    setOpen: Dispatch<SetStateAction<boolean>>;
    setConfPass: Dispatch<SetStateAction<string>>;
    setOpenModaPhoto: Dispatch<SetStateAction<boolean>>;
    setOpenKeyModal: Dispatch<SetStateAction<boolean>>

    updatePass: (data: UpdatePassword) => void;
    updatePhoto: (photo: PhotoRequest) => void;
    getUser: () => void;
    getLocals: () => Promise<void>;
    getMotos: () => Promise<void>;

    postKey: (data: KeyRequest) => void;
    getKey: () => void;
    updateKey: (data: KeyRequest) => void;
    deleteKey: () => void;
    getBy: () => void;
}

const ProfileContext = createContext({});

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [openModalPhoto, setOpenModaPhoto] = useState<boolean>(false);
    const [confPass, setConfPass] = useState<string>('');

    const { updatePass, updatePhoto, getUser, getLocals, getMotos, getBy } = useProfile();

    const { postKey, openKeyModal, setOpenKeyModal, key, getKey, updateKey, deleteKey } = useKey();

    const storage: IProfile = {
        open, setOpen,
        confPass, setConfPass,
        updatePass,
        updatePhoto,
        openModalPhoto,
        setOpenModaPhoto,
        getUser,
        getLocals,
        getMotos,
        postKey,
        openKeyModal, setOpenKeyModal,
        key,
        getKey,
        updateKey,
        deleteKey,
        getBy
    };

    return <ProfileContext.Provider value={storage}>{children}</ProfileContext.Provider>
}

export default ProfileContext;