import { AxiosPromise, AxiosResponse } from "axios";
import { ApiMsg } from "../components/AxiosConfig";
import { PhotoRequest } from "./PhotoRequest";
import { UpdatePassword } from "./UpdateRequest";

export interface UserRequest {
    id: number;
    username: string;
    password: string;
    email: string;
    phone: number;
    isAdmin: boolean;
    me_register: number;
    photo: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface UserApiResponse {
    msg: string;
    usersArray: UserRequest[] | null;
    user: UserRequest
}

export interface props_userRequest {
    login: (url: string) => Promise<AxiosResponse<UserApiResponse>>
    register: (body: UserRequest) => Promise<AxiosResponse<ApiMsg>>
    postUser: (id: number, user: UserRequest) => Promise<AxiosResponse<ApiMsg>>
    getUsers: (url: string) => Promise<AxiosResponse<UserApiResponse>>
    editUser: (id: number, body: UserRequest) => Promise<AxiosResponse<ApiMsg>>
    deleteUser: (id: number) => Promise<AxiosResponse<ApiMsg>>
    getBy: (id: number) => Promise<AxiosResponse<UserApiResponse>>
    search: (id: number) => Promise<AxiosResponse<ApiMsg>>
    updatePhoto: (id: number, body: PhotoRequest) => Promise<AxiosResponse<UserApiResponse>>
    updatePass: (id: number, body: UpdatePassword) => Promise<AxiosResponse<ApiMsg>>
}