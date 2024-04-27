import { AxiosResponse } from "axios";
import { ApiMsg } from "../components/AxiosConfig";

export interface LocalsRequest {
    id_user: number;
    id: number;
    dniOnwer: string;
    nameOwner: string;
    localName: string;
    phone: number;
    location: string;
    linkPhoto: string;
    sector: string;
    value: number;
}

export interface LocalApiResponse {
    msg: string;
    localsArray: LocalsRequest[] | null;
    local: LocalsRequest;
}

export interface props_LocalResponse {
    save:(body: LocalsRequest) => Promise<AxiosResponse<ApiMsg>>;
    get: (id: number) => Promise<AxiosResponse<LocalApiResponse>>;
    put: (id: number, body: LocalsRequest) => Promise<AxiosResponse<ApiMsg>>
}