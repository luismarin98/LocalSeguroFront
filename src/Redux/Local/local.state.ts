import { LocalsRequest } from "../../Interfaces/LocalRequest";

export interface LocalState {
    local: LocalsRequest | null,
    list_locals: LocalsRequest[] | null
}

export const initialState: LocalState = {
    local: {
        dniOnwer: '',
        id: 0,
        id_user: 0,
        linkPhoto: '',
        localName: '',
        location: '',
        nameOwner: '',
        phone: ''
    },
    list_locals: [],
}