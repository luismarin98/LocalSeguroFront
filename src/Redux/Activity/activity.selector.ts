import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const activityState = (state: RootState) => state.activity;

export const activityLocalSelector = createSelector(activityState, (state) => state.activityLocal);

export const activityMotoSelector = createSelector(activityState, (state) => state.activityMoto);

export const activityUserSelector = createSelector(activityState, (state) => state.activityUser);

export const activitiesSelector = createSelector(activityState, (state) => state.activities);