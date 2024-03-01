import { LocalsRequest } from "./LocalRequest";
import { MotosRequest } from "./MotosRequest";

export interface UserRequest {
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    localsData: LocalsRequest[] | null;
    me_register: AdmminUser | null;
    users_register: UserRegister[] | null;
    motos: MotosRequest[] | null;
}

interface AdmminUser {
    id: number;
    username: string;
    email: string;
    phone: string;
}

interface UserRegister {
    id: number;
}