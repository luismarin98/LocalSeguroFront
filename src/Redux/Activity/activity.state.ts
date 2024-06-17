import { ActData, ActivityLocal, ActivityMoto, ActivityUser, UserActivities } from "../../Interfaces/ActivityRequest";

export interface ActivityState {
    activityLocal: ActivityLocal | null;
    activityMoto: ActivityMoto | null;
    activityUser: ActivityUser | null;
    activities: ActData[] | null;
    userActivities: UserActivities | null;
}

export const initialState: ActivityState = {
    activityLocal: null,
    activities: null,
    activityMoto: null,
    activityUser: null,
    userActivities: null,
}