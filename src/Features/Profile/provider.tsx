import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useProfile } from "./hooks/useProfile";
import { UpdatePassword } from "../../Interfaces/UpdateRequest";
import { PhotoRequest } from "../../Interfaces/PhotoRequest";

export interface IProfile {
    open: boolean;
    confPass: string;
    openModalPhoto: boolean;

    setOpen: Dispatch<SetStateAction<boolean>>;
    setConfPass: Dispatch<SetStateAction<string>>;
    setOpenModaPhoto: Dispatch<SetStateAction<boolean>>;

    updatePass: (data: UpdatePassword) => void;
    updatePhoto: (photo: PhotoRequest) => void
}

const ProfileContext = createContext({});

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [openModalPhoto, setOpenModaPhoto] = useState<boolean>(false);
    const [confPass, setConfPass] = useState<string>('');
    const { updatePass, updatePhoto } = useProfile();

    const storage: IProfile = { open, setOpen, confPass, setConfPass, updatePass, updatePhoto, openModalPhoto, setOpenModaPhoto };

    return <ProfileContext.Provider value={storage}>{children}</ProfileContext.Provider>
}

export default ProfileContext;