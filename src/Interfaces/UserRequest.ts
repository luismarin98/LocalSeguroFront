export interface UserRequest {
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    me_register: number;
    photo: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}