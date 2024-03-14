import { ActData } from "./ActivityRequest";
import { LocalsRequest } from "./LocalRequest";
import { MotosRequest } from "./MotosRequest";
import { UserRequest } from "./UserRequest";

export interface ActivityResponse {
    msg: string;
    activity: {
        act: ActData,
        obj: UserRequest | LocalsRequest | MotosRequest
    }
}