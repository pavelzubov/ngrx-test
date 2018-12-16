import { MarketTicketsActions, ActionTypes } from './market-tickets.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: any = null;

export function marketTicketsReducer(state = initialState, action: MarketTicketsActions): any {
    switch (action.type) {
        case ActionTypes.GetMarketTicketsSocketSuccess:
            return action.payload;
        default:
            return state;
    }
}

export const getMarketTickets = createFeatureSelector('marketTickets');
export const getMarketTicketsSelector = createSelector(getMarketTickets);
