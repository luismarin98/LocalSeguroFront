import { LocalsRequest } from "./LocalRequest";
import { MotosRequest } from "./MotosRequest";
import { UserRequest } from "./UserRequest";

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