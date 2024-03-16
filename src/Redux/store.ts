import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { userSlice } from "./User/user.slice";
import { activitySlice } from "./Activity/activity.slice";
import { localSlice } from "./Local/locals.slice";
import { motoSlice } from "./Moto/moto.slice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        activity: activitySlice.reducer,
        local: localSlice.reducer,
        moto: motoSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;