import axios, { AxiosResponse } from "axios";
import { UserApiResponse, UserRequest, props_userRequest } from "../Interfaces/UserRequest";
import { KeyApiResponse, KeyRequest, props_keyRequest } from "../Interfaces/KeyRequest";
import { ActData, ActivityResponse, ActivityResponses, UserActsResponse, props_activityRequest } from "../Interfaces/ActivityRequest";
import { LocalApiResponse, LocalsRequest, props_LocalResponse } from "../Interfaces/LocalRequest";
import { MotoApiResponse, MotosRequest, props_MotoResponse } from "../Interfaces/MotosRequest";
import { PhotoRequest } from "../Interfaces/PhotoRequest";
import { UpdatePassword } from "../Interfaces/UpdateRequest";
import { FilterActivities } from "../Interfaces/SearchRequest";

export interface ApiMsg {
    msg: string;
}

const instance = {
    user: axios.create({
        baseURL: process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : `http://${process.env.REACT_APP_PORT}:3001/api/user`,
    }),
    activity: axios.create({
        baseURL: process.env.REACT_APP_API_ACTIVITIES ? process.env.REACT_APP_API_ACTIVITIES : `http://${process.env.REACT_APP_PORT}:3001/api/activities`,
    }),
    local: axios.create({
        baseURL: process.env.REACT_APP_API_LOCALS ? process.env.REACT_APP_API_LOCALS : `http://${process.env.REACT_APP_PORT}:3001/api/locals`,
    }),
    moto: axios.create({
        baseURL: process.env.REACT_APP_API_MOTOS ? process.env.REACT_APP_API_MOTOS : `http://${process.env.REACT_APP_PORT}:3001/api/motos`,
    }),
    key: axios.create({
        baseURL: process.env.REACT_APP_API_WATCH ? process.env.REACT_APP_API_WATCH : `http://${process.env.REACT_APP_PORT}:3001/api/key`,
    })
}

//REST INSTANCES
const activityRequest = {
    saveActivity: (url: string, body: ActData) => instance.activity.post(url, body),
    filterAct: (url: string) => instance.activity.get(url),
    getAct: (url: string) => instance.activity.get(url),
    delAct: (url: string) => instance.activity.delete(url),
    updAct: (url: string, body: LocalsRequest | UserRequest | MotosRequest) => instance.activity.put(url, body),
    getUserActs: (url: string) => instance.activity.get(url)
}

const localRequest = {
    saveLocal: (url: string, body: LocalsRequest) => instance.local.post(url, body),
    getLocals: (url: string) => instance.local.get(url),
    updateLocal: (url: string, body: LocalsRequest) => instance.local.put(url, body)
}

const motoRequest = {
    saveMoto: (url: string, body: MotosRequest) => instance.moto.post(url, body),
    getMotos: (url: string) => instance.moto.get(url),
}

const keyRequest = {
    generate: (url: string, body: KeyRequest) => instance.key.post(url, body),
    show: (url: string) => instance.key.get(url),
    delete: (url: string) => instance.key.delete(url),
    update: (url: string, body: KeyRequest) => instance.key.put(url, body),
    verify: (url: string) => instance.key.get(url)
}

const userRequest = {
    login: (url: string) => instance.user.get(url),
    register: (url: string, body: UserRequest) => instance.user.post(url, body),
    postUser: (url: string, user: UserRequest) => instance.user.post(url, user),
    getUsers: (url: string) => instance.user.get(url),
    editUser: (url: string, body: UserRequest) => instance.user.put(url, body),
    deleteUser: (url: string) => instance.user.delete(url),
    getBy: (url: string) => instance.user.get(url),
    search: (url: string) => instance.user.get(url),
    updatePhoto: (url: string, body: PhotoRequest) => instance.user.put(url, body),
    updatePassword: (url: string, body: UpdatePassword) => instance.user.put(url, body)
}

//REST QUERYS
export const Local_REST: props_LocalResponse = {
    save: (body: LocalsRequest): Promise<AxiosResponse<ApiMsg>> => localRequest.saveLocal(`/save`, body),
    get: (id: number): Promise<AxiosResponse<LocalApiResponse>> => localRequest.getLocals(`/get-locals/${id}`),
    put: (id: number, body: LocalsRequest): Promise<AxiosResponse<LocalApiResponse>> => localRequest.updateLocal(`/update-local/${id}`, body),
}

export const Moto_REST: props_MotoResponse = {
    save: (body: MotosRequest): Promise<AxiosResponse<ApiMsg>> => motoRequest.saveMoto('/save', body),
    get: (id: number): Promise<AxiosResponse<MotoApiResponse>> => motoRequest.getMotos(`/search/${id}`),
    getMotos: (id: number): Promise<AxiosResponse<MotoApiResponse>> => motoRequest.getMotos(`/search/${id}`),
}

export const ACT_REST: props_activityRequest = {
    saveAct: (body: ActData): Promise<AxiosResponse<ApiMsg>> => activityRequest.saveActivity(`/save-activity`, body),
    filterAct: (filter: FilterActivities, id: number): Promise<AxiosResponse<ActivityResponses>> => activityRequest.filterAct(`/filter-activities/${id}?type=${filter.type !== null ? filter.type : filter.username !== '' && `?username=${filter.username}`}`),
    getAct: (id: number): Promise<AxiosResponse<ActivityResponse>> => activityRequest.getAct(`/get-activity/${id}`),
    delAct: (id: number): Promise<AxiosResponse<ActivityResponses>> => activityRequest.delAct(`/delete-activity/${id}`),
    updAct: (id: number, data: LocalsRequest | UserRequest | MotosRequest): Promise<AxiosResponse<ActivityResponse>> => activityRequest.updAct(`/update-activity/${id}`, data),
    getUserActs: (id: string): Promise<AxiosResponse<UserActsResponse>> => activityRequest.getUserActs(`/get-user-activities/${id}`)
}

export const Key_REST: props_keyRequest = {
    delete: (id: number): Promise<AxiosResponse<ApiMsg>> => keyRequest.delete(`/delete-key/${id}`),
    generate: (id: number, body: KeyRequest): Promise<AxiosResponse<ApiMsg>> => keyRequest.generate(`/generate-key/${id}`, body),
    show: (id: number): Promise<AxiosResponse<KeyApiResponse>> => keyRequest.show(`/show-key/${id}`),
    update: (id: number, body: KeyRequest): Promise<AxiosResponse<ApiMsg>> => keyRequest.update(`/change-key/${id}`, body),
    verify: (key: string): Promise<AxiosResponse<KeyApiResponse>> => keyRequest.verify(`/verify-key?key=${key}`)
}

export const User_REST: props_userRequest = {
    login: (query: string): Promise<AxiosResponse<UserApiResponse>> => userRequest.login(`/login/${query}`),
    register: (body: UserRequest): Promise<AxiosResponse<ApiMsg>> => userRequest.register(`/register`, body),
    deleteUser: (id: number): Promise<AxiosResponse<ApiMsg>> => userRequest.deleteUser(`/delete/${id}`),
    editUser: (id: number, body: UserRequest): Promise<AxiosResponse<ApiMsg>> => userRequest.editUser(`/update/${id}`, body),
    getUsers: (url: string): Promise<AxiosResponse<UserApiResponse>> => userRequest.getUsers(url),
    postUser: (id: number, body: UserRequest): Promise<AxiosResponse<ApiMsg>> => userRequest.postUser(`/post-user/${id}`, body),
    getBy: (id: number): Promise<AxiosResponse<UserApiResponse>> => userRequest.getBy(`/search/${id}`),
    search: (id: number): Promise<AxiosResponse<ApiMsg>> => userRequest.search(`/search/${id}`),
    updatePhoto: (id: number, body: PhotoRequest): Promise<AxiosResponse<UserApiResponse>> => userRequest.updatePhoto(`/updatePhoto/${id}`, body),
    updatePass: (id: number, body: UpdatePassword): Promise<AxiosResponse<ApiMsg>> => userRequest.updatePassword(`/updatePass/${id}`, body)
}
