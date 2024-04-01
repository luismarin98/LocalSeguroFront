import { AxiosResponse } from "axios";
import { ApiMsg } from "../components/AxiosConfig";

export interface LocalsRequest {
    id_user: number;
    id: number;
    dniOnwer: string;
    nameOwner: string;
    localName: string;
    phone: string;
    location: string;
    linkPhoto: string;
}

export interface LocalApiResponse {
    msg: string;
    localsArray: LocalsRequest[] | null;
    local: LocalsRequest;
}

export interface props_LocalResponse {
    save:(body: LocalsRequest) => Promise<AxiosResponse<ApiMsg>>;
    get: (id: number) => Promise<AxiosResponse<LocalApiResponse>>;
}