import axios, { AxiosResponse } from "axios";
import { UserApiResponse, UserRequest, props_userRequest } from "../Interfaces/UserRequest";
import { KeyApiResponse, KeyRequest, props_keyRequest } from "../Interfaces/KeyRequest";

export interface ApiMsg {
    msg: string;
}

const instance = {
    user: axios.create({
        baseURL: process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : `http://${process.env.REACT_APP_PORT}:3001/api/user`,
        timeout: 10000,
    }),
    activity: axios.create({
        baseURL: process.env.REACT_APP_API_ACTIVITIES ? process.env.REACT_APP_API_ACTIVITIES : `http://${process.env.REACT_APP_PORT}:3001/api/activities`,
        timeout: 10000,
    }),
    local: axios.create({
        baseURL: process.env.REACT_APP_API_LOCALS ? process.env.REACT_APP_API_LOCALS : `http://${process.env.REACT_APP_PORT}:3001/api/locals`,
        timeout: 10000,
    }),
    moto: axios.create({
        baseURL: process.env.REACT_APP_API_MOTOS ? process.env.REACT_APP_API_MOTOS : `http://${process.env.REACT_APP_PORT}:3001/api/motos`,
        timeout: 10000,
    }),
    key: axios.create({
        baseURL: process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : `http://${process.env.REACT_APP_PORT}:3001/api/key`,
    })
}

const keyRequest = {
    generate: (url: string, body: KeyRequest) => instance.key.post(url, body),
    show: (url: string) => instance.key.get(url),
    delete: (url: string) => instance.key.delete(url),
    update: (url: string, body: KeyRequest) => instance.key.put(url, body)
}

export const Key_REST: props_keyRequest = {
    delete: (id: number): Promise<AxiosResponse<ApiMsg>> => keyRequest.delete(`/delete-key/${id}`),
    generate: (id: number, body: KeyRequest): Promise<AxiosResponse<ApiMsg>> => keyRequest.generate(`/generate-key/${id}`, body),
    show: (id: number): Promise<AxiosResponse<KeyApiResponse>> => keyRequest.show(`/show-key/${id}`),
    update: (id: number, body: KeyRequest): Promise<AxiosResponse<ApiMsg>> => keyRequest.update(`/change-key/${id}`, body)
}

const userRequest = {
    login: (url: string) => instance.user.get(url),
    register: (url: string, body: UserRequest) => instance.user.post(url, body),
    postUser: (url: string, user: UserRequest) => instance.user.post(url, user),
    getUsers: (url: string) => instance.user.get(url),
    editUser: (url: string, body: UserRequest) => instance.user.put(url, body),
    deleteUser: (url: string) => instance.user.delete(url)
}

export const User_REST: props_userRequest = {
    login: (query: string): Promise<AxiosResponse<UserApiResponse>> => userRequest.login(`/login/${query}`),
    register: (body: UserRequest): Promise<AxiosResponse<ApiMsg>> => userRequest.register(`/register`, body),
    deleteUser: (id: number): Promise<AxiosResponse<ApiMsg>> => userRequest.deleteUser(`/delete/${id}`),
    editUser: (id:number, body: UserRequest): Promise<AxiosResponse<ApiMsg>> => userRequest.editUser(`/update/${id}`, body),
    getUsers: (url: string): Promise<AxiosResponse<UserApiResponse>> => userRequest.getUsers(url),
    postUser: (id: number, body: UserRequest): Promise<AxiosResponse<ApiMsg>> => userRequest.postUser(`/post-user/${id}`, body)
}