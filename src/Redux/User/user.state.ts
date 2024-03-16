import { UserRequest } from "../../Interfaces/UserRequest";

export interface UserState {
    user: UserRequest | null;
    list_users: UserRequest[] | null;
}

export const initialState: UserState = {
    user: {
        password: '',
        username: '',
        email: '',
        phone: '',
        isAdmin: false,
        id: 0,
        me_register: 0,
        photo: ''
    },
    list_users: []
};