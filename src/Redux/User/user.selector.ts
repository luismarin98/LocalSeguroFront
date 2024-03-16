import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const usuarioState = (state: RootState) => state.user;

export const usersSelector = createSelector(usuarioState, (state) => state.list_users);

export const userSelector = createSelector(usuarioState, (state) => state.user);