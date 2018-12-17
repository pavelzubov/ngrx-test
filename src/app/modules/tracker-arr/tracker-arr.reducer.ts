import { TrackerArrActions, TrackerArrActionTypes } from './tracker-arr.actions';

export const initialState: any = null;

export function trackerArrReducer(state = initialState, action: TrackerArrActions): any {
    switch (action.type) {
        case TrackerArrActionTypes.GetTrackerArrSocketSuccess:
            return action.payload;
        default:
            return state;
    }
}
