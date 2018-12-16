import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer
} from '@ngrx/store';
import * as platform from './platform.reducer';
import * as programs from './programs.reducer';
import * as socket from './socket.reducer';
import { symbolDepthReducer } from '../../modules/symbol-depth/symbol-depth.reducer';
import { symbolSwitchReducer } from '../../modules/symbol-switch/symbol-switch.reducer';
import { symbolTradeReducer } from '../../modules/symbol-trade/symbol-trade.reducer';
import { symbolMiniTickerReducer } from '../../modules/symbol-mini-ticker/symbol-mini-ticker.reducer';
import { marketTicketsReducer } from '../../modules/market-tickets/market-tickets.reducer';
import { trackerArrReducer } from '../../modules/tracker-arr/tracker-arr.reducer';

export interface State {
    platform: platform.PlatformState;
    programs: programs.ProgramsState;
    socket: socket.SocketState;
    symbolDepth?: any;
    symbolTrade?: any;
    symbolMiniTicker?: any;
    marketTickets?: any;
    trackerArr?: any;
    symbolTicket?: any;
    symbolSwitcher?: string;
}

export const reducers: ActionReducerMap<State> = {
    platform: platform.platformReducer,
    programs: programs.programsReducer,
    socket: socket.socketReducer,
    symbolDepth: symbolDepthReducer,
    symbolSwitcher: symbolSwitchReducer,
    symbolTrade: symbolTradeReducer,
    symbolMiniTicker: symbolMiniTickerReducer,
    marketTickets: marketTicketsReducer,
    trackerArr: trackerArrReducer
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
