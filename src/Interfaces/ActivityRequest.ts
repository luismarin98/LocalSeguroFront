import { AxiosError, AxiosResponse } from "axios";
import { LocalsRequest } from "./LocalRequest";
import { MotosRequest } from "./MotosRequest";
import { UserRequest } from "./UserRequest";
import { ApiMsg } from "../components/AxiosConfig";
import { FilterActivities } from "./SearchRequest";

type activityType = 'Add Local' | 'Add Moto' | 'Add User';

export interface ActivityRequest {
    activity: ActData;
    moto: MotosRequest;
    local: LocalsRequest;
    user: UserRequest;
}

export interface ActData {
    id: number;
    id_user: number;
    id_admin: number;
    id_obj: number;
    username: string;
    email: string;
    phone: string;
    photo: string;
    type: activityType;
}

export interface ActivityContent {
    act: ActData,
    obj: UserRequest | LocalsRequest | MotosRequest;
}

export interface ActivityUser {
    act: ActData,
    obj: UserRequest;
}

export interface ActivityMoto {
    act: ActData,
    obj: MotosRequest;
}

export interface ActivityLocal {
    act: ActData,
    obj: LocalsRequest;
}

export interface ActivityResponses {
    msg: string;
    data: ActData[] | ActData | ActivityUser | ActivityLocal | ActivityMoto;
    type: string;
}

export interface ActivityResponse {
    msg: string;
    activity: {
        act: ActData,
        obj: UserRequest | LocalsRequest | MotosRequest
    },
}

export interface props_activityRequest {
    saveAct: (body: ActData) => Promise<AxiosResponse<ApiMsg>>;
    filterAct: (filter: FilterActivities, id: number) => Promise<AxiosResponse<ActivityResponses>>;
    getAct: (id: number) => Promise<AxiosResponse<ActivityResponse>>;
    delAct: (id: number) => Promise<AxiosResponse<ActivityResponses>>;
    updAct: (id: number, data: LocalsRequest | UserRequest | MotosRequest) => Promise<AxiosResponse<ActivityResponse>>
}