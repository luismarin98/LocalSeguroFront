import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const localState = (state: RootState) => state.local;

export const localSelector = createSelector(localState, (state) => state.local);

export const list_localsSelector = createSelector(localState, (state) => state.list_locals);