import { TrackerArrActions, ActionTypes } from './tracker-arr.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: any = null;

export function trackerArrReducer(state = initialState, action: TrackerArrActions): any {
    switch (action.type) {
        case ActionTypes.GetTrackerArrSocketSuccess:
            return action.payload;
        default:
            return state;
    }
}

export const getTrackerArr = createFeatureSelector('trackerArr');
export const getTrackerArrSelector = createSelector(getTrackerArr);
