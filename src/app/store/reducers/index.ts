import {
    ActionReducerMap, createSelector, createFeatureSelector,
    ActionReducer, MetaReducer
} from '@ngrx/store';
import * as platform from './platform.reducer';
import * as programs from './programs.reducer';
import * as socket from './socket.reducer';

export interface State {
    platform: platform.PlatformState;
    programs: programs.ProgramsState;
    socket: socket.SocketState;
}

export const reducers: ActionReducerMap<State> = {
    platform: platform.platformReducer,
    programs: programs.programsReducer,
    socket: socket.socketReducer,
};

export function logger(reducer: ActionReducer<State>):
    ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const getPlatformState =
    createFeatureSelector<platform.PlatformState>('platform');

export const getPlatformStatistic =
    createSelector(getPlatformState, platform.getStatistics);

export const getSocketState =
    createFeatureSelector<socket.SocketState>('socket');

export const getSocketMiniTracker =
    createSelector(getSocketState, socket.getMiniTrackerArrSocket);

export const getSocketAllMarketTickets =
    createSelector(getSocketState, socket.getAllMarketTicketsSocket);

export const getSocketSymbolTrade =
    createSelector(getSocketState, socket.getSymbolTradeSocket);

export const getSocketSymbolTicket =
    createSelector(getSocketState, socket.getSymbolTicketSocket);

export const getSocketSymbolMiniTicker =
    createSelector(getSocketState, socket.getSymbolMiniTickerSocket);
