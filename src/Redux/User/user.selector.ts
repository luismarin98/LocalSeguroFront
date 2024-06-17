import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserState } from "./user.state";

const usuarioState = (state: RootState) => state.user;

export const usersSelector = createSelector(usuarioState, (state: UserState) => state.list_users);

export const userSelector = createSelector(usuarioState, (state: UserState) => state.user);