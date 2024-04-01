import { AxiosResponse } from "axios";
import { ApiMsg } from "../components/AxiosConfig";

export interface MotosRequest {
    id: number;
    id_user: number;
    num_moto: number;
    conductor: string;
    cooperativa: string;
    ubicacion: string;
    foto: string;
}

export interface MotoApiResponse {
    msg: string;
    motosArray: MotosRequest[] | null;
    moto: MotosRequest;
}

export interface props_MotoResponse {
    save:(body: MotosRequest) => Promise<AxiosResponse<ApiMsg>>;
    get: (id: number) => Promise<AxiosResponse<MotoApiResponse>>;
    getMotos: (id: number) => Promise<AxiosResponse<MotoApiResponse>>;
}