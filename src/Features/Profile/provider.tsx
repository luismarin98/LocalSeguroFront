import { ReactNode, createContext } from "react";

export interface IProfile { }

const ProfileContext = createContext({});

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
    const storage: IProfile = {};

    return <ProfileContext.Provider value={storage}>{children}</ProfileContext.Provider>
}

export default ProfileContext;