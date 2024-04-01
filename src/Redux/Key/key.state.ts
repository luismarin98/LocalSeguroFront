import { KeyRequest } from "../../Interfaces/KeyRequest";

export interface KeyState {
    keyData: KeyRequest | null;
}

export const initialState: KeyState = {
    keyData: {
        id_user: 0,
        key: ''
    }
}