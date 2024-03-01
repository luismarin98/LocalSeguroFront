import { LocalsRequest } from "./LocalRequest";

export interface UserRequest {
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    localsData: LocalsRequest[] | null;
    me_register: AdmminUser | null;
    users_register: UserRegister[] | null
}

interface AdmminUser {
    id: number;
    username: string;
    email: string;
    phone: number;
}

interface UserRegister {
    id: number;
}