import { TrackerArrActions, ActionTypes } from './tracker-arr.actions';

export const initialState: any = null;

export function trackerArrReducer(state = initialState, action: TrackerArrActions): any {
    switch (action.type) {
        case ActionTypes.GetTrackerArrSocketSuccess:
            return action.payload;
        default:
            return state;
    }
}
