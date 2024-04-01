import { AxiosResponse } from "axios";
import { ApiMsg } from "../components/AxiosConfig";

export interface KeyRequest {
    id_user: number;
    key: string;
}

export interface KeyApiResponse {
    msg: string;
    key: KeyRequest;
}

export interface props_keyRequest {
    generate: (id: number, body: KeyRequest) => Promise<AxiosResponse<ApiMsg>>;
    show: (id: number) => Promise<AxiosResponse<KeyApiResponse>>;
    delete: (id: number) => Promise<AxiosResponse<ApiMsg>>;
    update: (id: number, body: KeyRequest) => Promise<AxiosResponse<ApiMsg>>;
    verify: (key: string) => Promise<AxiosResponse<KeyApiResponse>>;
}