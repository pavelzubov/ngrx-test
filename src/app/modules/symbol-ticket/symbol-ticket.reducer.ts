import { SymbolTicketActions, ActionTypes } from './symbol-ticket.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: any = null;

export function symbolTicketReducer(state = initialState, action: SymbolTicketActions): any {
    switch (action.type) {
        case ActionTypes.GetSymbolTicketSocket:
            return action.payload;
        case ActionTypes.GetSymbolTicketSocketSuccess:
            return action.payload;
        default:
            return state;
    }
}
