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
    photo: string;
    type: activityType;
}