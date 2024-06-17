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
        phone: 0,
        isAdmin: false,
        id: 0,
        me_register: 0,
        photo: '',
        createdAt: new Date()
    },
    list_users: []
};