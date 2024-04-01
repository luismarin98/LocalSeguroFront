import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const keyState = (state: RootState) => state.key;

export const keySelector = createSelector(keyState, (state) => state.keyData);