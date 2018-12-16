import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
    combineReducers
} from '@ngrx/store';
import * as platform from './platform.reducer';
import * as programs from './programs.reducer';
import * as socket from './socket.reducer';
import { symbolDepthReducer } from '../../modules/symbol-depth/symbol-depth.reducer';
import { symbolSwitchReducer } from '../../modules/symbol-switch/symbol-switch.reducer';
import { symbolTicketReducer } from '../../modules/symbol-ticket/symbol-ticket.reducer';

export interface State {
    platform: platform.PlatformState;
    programs: programs.ProgramsState;
    socket: socket.SocketState;
    symbolDepth: any;
    symbolTicket?: any;
    symbolSwitcher?: string;
}

export const reducers: ActionReducerMap<State> = {
    platform: platform.platformReducer,
    programs: programs.programsReducer,
    socket: socket.socketReducer,
    symbolDepth: symbolDepthReducer,
    // symbolTicket: symbolTradeReducer,
    symbolSwitcher: symbolSwitchReducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const getPlatformState = createFeatureSelector<platform.PlatformState>('platform');

export const getPlatformStatistic = createSelector(
    getPlatformState,
    platform.getStatistics
);

export const getSocketState = createFeatureSelector<socket.SocketState>('socket');

export const getSocketMiniTracker = createSelector(
    getSocketState,
    socket.getMiniTrackerArrSocket
);

export const getSocketAllMarketTickets = createSelector(
    getSocketState,
    socket.getAllMarketTicketsSocket
);

export const getSocketSymbolMiniTicker = createSelector(
    getSocketState,
    socket.getSymbolMiniTickerSocket
);
