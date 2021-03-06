import { MarketTicketsActions, MarketTicketsActionTypes } from './market-tickets.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getSocketsState, SocketsState } from '../../store/reducers';

export const initialState: any = null;

export function marketTicketsReducer(
    state = initialState,
    action: MarketTicketsActions
): any {
    switch (action.type) {
        case MarketTicketsActionTypes.GetMarketTicketsSocketSuccess:
            return action.payload;
        default:
            return state;
    }
}
// export const getMarketTicketsSelector = createSelector(getMarketTickets);
