import { SymbolDepthActions, ActionTypes } from './symbol-depth.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: any = null;

export function symbolDepthReducer(state = initialState, action: SymbolDepthActions): any {
    switch (action.type) {
        case ActionTypes.GetSymbolDepthSocketSuccess:
            return action.payload;
        default:
            return state;
    }
}
