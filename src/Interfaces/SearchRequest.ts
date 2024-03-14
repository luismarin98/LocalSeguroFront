export interface SearchRequest {
    filtro: boolean | null;
    nombre: string;
}

type activityType = 'Add Local' | 'Add Moto' | 'Add User' | 'All';

export interface FilterActivities {
    type: activityType;
    username: string;
}