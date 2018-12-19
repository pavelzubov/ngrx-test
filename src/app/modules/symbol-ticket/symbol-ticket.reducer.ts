import { SymbolTicketActions, TickerActionTypes } from './symbol-ticket.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionTypes } from '../symbol-mini-ticker/symbol-mini-ticker.actions';

export const initialState: any = null;

export function symbolTicketReducer(
    state = initialState,
    action: SymbolTicketActions
): any {
    switch (action.type) {
        case TickerActionTypes.GetSymbolTicketSocket:
            return action.payload;
        case TickerActionTypes.GetSymbolTicketSocketRequest:
            return action.payload;
        case TickerActionTypes.GetSymbolTicketSocketSuccess:
            return action.payload;
        default:
            return state;
    }
}
