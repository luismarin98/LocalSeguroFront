import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./local.state";

const localSlice = createSlice({
    name: 'localStore',
    initialState,
    reducers: {
        setLocal: (state, action) => {
            if (action.payload !== null) {
                state.local = action.payload;
            }
        },
        setListLocal: (state, action) => {
            if (action.payload !== null) {
                state.list_locals = action.payload;
            }
        }
    }
});

export const { setListLocal, setLocal } = localSlice.actions;
export { localSlice }