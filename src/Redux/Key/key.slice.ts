import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./key.state";

const keySlice = createSlice({
    name: 'keyStore',
    initialState,
    reducers: {
        setKey: (state, action) => {
            if (action.payload !== null) {
                state.keyData = action.payload;
            }
        }
    }
});

export const { setKey } = keySlice.actions;
export { keySlice }