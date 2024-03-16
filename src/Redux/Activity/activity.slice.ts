import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./activity.state";

const activitySlice = createSlice({
    name: 'activityStore',
    initialState,
    reducers: {
        setLocalAct: (state, action) => {
            if (action.payload !== null) {
                state.activityLocal = action.payload;
            }
        },
        setMotoAct: (state, action) => {
            if (action.payload !== null) {
                state.activityMoto = action.payload;
            }
        },
        setUserAct: (state, action) => {
            if (action.payload !== null) {
                state.activityUser = action.payload;
            }
        },
        setActivities: (state, action) => {
            if (action.payload !== null) {
                state.activities = action.payload;
            }
        },
    }
});

export const { setActivities, setLocalAct, setMotoAct, setUserAct } = activitySlice.actions;

export { activitySlice }