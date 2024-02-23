import { LocalsRequest } from "./LocalRequest";

export interface UserRequest {
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    localsData: LocalsRequest[] | null;
}