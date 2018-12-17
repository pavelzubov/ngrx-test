import { SymbolTradeActions, ActionTypes } from './symbol-trade.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: any = null;

export function symbolTradeReducer(state = initialState, action: SymbolTradeActions): any {
    switch (action.type) {
        case ActionTypes.GetSymbolTradeSocketSuccess:
            return action.payload;
        default:
            return state;
    }
}
