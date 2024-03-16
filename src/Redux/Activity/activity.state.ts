import { ActData, ActivityLocal, ActivityMoto, ActivityUser } from "../../Interfaces/ActivityRequest";

export interface ActivityState {
    activityLocal: ActivityLocal | null;
    activityMoto: ActivityMoto | null;
    activityUser: ActivityUser | null;
    activities: ActData[] | null;
}

export const initialState: ActivityState = {
    activityLocal: {
        act: { email: '', id: 0, id_admin: 0, id_obj: 0, id_user: 0, phone: '', photo: '', type: 'Add Local', username: '' },
        obj: { dniOnwer: '', id: 0, id_user: 0, linkPhoto: '', localName: '', location: '', nameOwner: '', phone: '' }
    },
    activities: [],
    activityMoto: {
        act: { email: '', id: 0, id_admin: 0, id_obj: 0, id_user: 0, phone: '', photo: '', type: 'Add Local', username: '' },
        obj: { conductor: '', cooperativa: '', foto: '', id: 0, num_moto: 0, ubicacion: '', id_user: 0 },
    },
    activityUser: {
        act: { email: '', id: 0, id_admin: 0, id_obj: 0, id_user: 0, phone: '', photo: '', type: 'Add Local', username: '' },
        obj: { password: '', username: '', email: '', phone: '', isAdmin: false, id: 0, me_register: 0, photo: '' }
    }
}