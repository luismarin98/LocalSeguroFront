import { MotosRequest } from "../../Interfaces/MotosRequest";

export interface MotoState {
    moto: MotosRequest | null;
    list_motos: MotosRequest[] | null;
}

export const initialState: MotoState = {
    list_motos: [],
    moto: {
        conductor: '',
        cooperativa: '',
        foto: '',
        id: 0,
        id_user: 0,
        num_moto: 0,
        ubicacion: ''
    }
}