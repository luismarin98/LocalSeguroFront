import { LocalsRequest } from "./LocalRequest";
import { UserRequest } from "./UserRequest";

export interface AdminRequest extends UserRequest {
    localsAsing: LocalsRequest[] | null;
    usersAsing: UserRequest[] | null;
}