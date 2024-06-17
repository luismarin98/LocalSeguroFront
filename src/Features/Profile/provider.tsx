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
    currentCapture: string | null | undefined;
    photoData: FormData | undefined;

    setOpen: Dispatch<SetStateAction<boolean>>;
    setConfPass: Dispatch<SetStateAction<string>>;
    setOpenModaPhoto: Dispatch<SetStateAction<boolean>>;
    setOpenKeyModal: Dispatch<SetStateAction<boolean>>

    updatePass: (data: UpdatePassword) => void;
    updatePhoto: (photo: PhotoRequest) => void;
    getUser: () => void;

    postKey: (data: KeyRequest) => void;
    getKey: () => void;
    updateKey: (data: KeyRequest) => void;
    deleteKey: () => void;
    getBy: () => void;
    setCurrentCapture: Dispatch<SetStateAction<string | null | undefined>>;
}

const ProfileContext = createContext({});

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [openModalPhoto, setOpenModaPhoto] = useState<boolean>(false);
    const [confPass, setConfPass] = useState<string>('');
    const [currentCapture, setCurrentCapture] = useState<string | null>();
    const photoData = new FormData();

    const { updatePass, updatePhoto, getUser, getBy } = useProfile();

    const { postKey, openKeyModal, setOpenKeyModal, getKey, updateKey, deleteKey } = useKey();

    const storage: IProfile = {
        open, setOpen,
        confPass, setConfPass,
        updatePass,
        updatePhoto,
        openModalPhoto,
        setOpenModaPhoto,
        getUser,
        postKey,
        openKeyModal, setOpenKeyModal,
        getKey,
        updateKey,
        deleteKey,
        getBy,
        currentCapture,
        setCurrentCapture,
        photoData
    };

    return <ProfileContext.Provider value={storage}>{children}</ProfileContext.Provider>
}

export default ProfileContext;