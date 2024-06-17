import { ActData, ActivityLocal, ActivityMoto, ActivityUser } from "./ActivityRequest";
import { MotosRequest } from "./MotosRequest";
import { UserRequest } from "./UserRequest";

interface ColumnData {
    label: string;
    value: string;
}

export interface ExelFormat {
    sheet: string;
    columns: ColumnData[];
    content: ActivityLocal[] | ActivityMoto[] | ActivityUser[] | UserRequest[] | MotosRequest[] | ActData[];
}