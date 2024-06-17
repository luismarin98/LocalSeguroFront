import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ActivityState } from "./activity.state";

const activityState = (state: RootState) => state.activity;

export const activityLocalSelector = createSelector(activityState, (state: ActivityState) => state.activityLocal);

export const activityMotoSelector = createSelector(activityState, (state: ActivityState) => state.activityMoto);

export const activityUserSelector = createSelector(activityState, (state: ActivityState) => state.activityUser);

export const activitiesSelector = createSelector(activityState, (state: ActivityState) => state.activities);

export const listUserActivities = createSelector(activityState, (state: ActivityState) => state.userActivities)