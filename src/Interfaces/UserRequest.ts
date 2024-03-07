export interface UserRequest {
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    me_register: AdmminUser | null;
    photo: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}

interface AdmminUser {
    id: number;
    username: string;
    email: string;
    phone: string;
}