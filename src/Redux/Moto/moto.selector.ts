import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const motoState = (state: RootState) => state.moto;

export const motoSelector = createSelector(motoState, (state) => state.moto);
export const list_motosSelector = createSelector(motoState, (state) => state.list_motos);