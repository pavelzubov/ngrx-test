import { SocketActions, ActionTypes } from './symbol-depth.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as platform from '../../store/reducers/platform.reducer';
import * as socket from '../../store/reducers/socket.reducer';
import { getSocketState } from '../../store/reducers';

// export interface SocketState: any;

export const initialState: any = null;

export function symbolDepthReducer(
    state = initialState,
    action: SocketActions
): any {
    switch (action.type) {
        case ActionTypes.GetSymbolDepthSocketSuccess:
            return action.payload;
        default:
            return state;
    }
}

export const getSymbolDepthSocket = (state: any) => state;
export const getSymbolDepth = createFeatureSelector('symbolDepth');
export const getSymbolDepthSelector = createSelector(getSymbolDepth);
