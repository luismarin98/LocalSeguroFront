import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LocalState } from "./local.state";

const localState = (state: RootState) => state.local;

export const localSelector = createSelector(localState, (state: LocalState) => state.local);

export const list_localsSelector = createSelector(localState, (state: LocalState) => state.list_locals);