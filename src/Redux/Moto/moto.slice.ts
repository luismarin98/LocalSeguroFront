import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./moto.state";

const motoSlice = createSlice({
    name: 'motoStore',
    initialState,
    reducers: {
        setMoto: (state, action) => {
            if (action.payload !== null) {
                state.moto = action.payload;
            }
        },
        setListMoto: (state, action) => {
            if (action.payload !== null) {
                state.list_motos = action.payload;
            }
        }
    }
})

export const { setListMoto, setMoto } = motoSlice.actions
export { motoSlice }