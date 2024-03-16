export interface KeyRequest {
    id_user: number;
    key: string;
}

export interface KeyApiResponse {
    msg: string;
    key: string;
}