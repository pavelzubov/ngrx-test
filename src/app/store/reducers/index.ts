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
import * as trade from './trade.reducer';
import { symbolDepthReducer } from '../../modules/symbol-depth/symbol-depth.reducer';
import { symbolSwitchReducer } from '../../modules/symbol-switch/symbol-switch.reducer';
import { symbolTradeReducer } from '../../modules/symbol-trade/symbol-trade.reducer';
import { symbolMiniTickerReducer } from '../../modules/symbol-mini-ticker/symbol-mini-ticker.reducer';
import { marketTicketsReducer } from '../../modules/market-tickets/market-tickets.reducer';
import { trackerArrReducer } from '../../modules/tracker-arr/tracker-arr.reducer';
import { symbolTicketReducer } from '../../modules/symbol-ticket/symbol-ticket.reducer';
import { tradeReducer, TradeState } from './trade.reducer';
import { SocketState } from './socket.reducer';
import { PlatformState } from './platform.reducer';
import { keysReducer, KeysState } from './keys.reducer';

export interface SocketsState {
    symbolTrade: any;
    symbolMiniTicker: any;
    marketTickets: any;
    trackerArr: any;
    symbolDepth: any;
    symbolTicket: any;
}
export const initialSocketsState: SocketsState = {
    symbolTrade: null,
    symbolMiniTicker: null,
    marketTickets: null,
    trackerArr: null,
    symbolDepth: null,
    symbolTicket: null
};

export interface State {
    platform: platform.PlatformState;
    programs: programs.ProgramsState;
    symbolSwitcher?: string;
    sockets?: SocketsState;
    trade?: TradeState;
    keys?: KeysState;
}
export const reducers: ActionReducerMap<State> = {
    platform: platform.platformReducer,
    programs: programs.programsReducer,
    symbolSwitcher: symbolSwitchReducer,
    sockets: combineReducers(
        {
            symbolTrade: symbolTradeReducer,
            symbolMiniTicker: symbolMiniTickerReducer,
            marketTickets: marketTicketsReducer,
            trackerArr: trackerArrReducer,
            symbolDepth: symbolDepthReducer,
            symbolTicket: symbolTicketReducer
        },
        initialSocketsState
    ),
    keys: keysReducer,
    trade: tradeReducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const getSocketsState = createFeatureSelector<SocketsState>('sockets');
export const getPlatformState = createFeatureSelector<PlatformState>('platform');
export const getSocketState = createFeatureSelector<SocketState>('socket');
export const getTradeState = createFeatureSelector<TradeState>('trade');
export const getKeysState = createFeatureSelector<KeysState>('keys');

export const getMarketTicketsState = (state: SocketsState) => state.marketTickets;
export const getSymbolTradeState = (state: SocketsState) => state.symbolTrade;
export const getSymbolMiniTickerState = (state: SocketsState) => state.symbolMiniTicker;
export const getTrackerArrState = (state: SocketsState) => state.trackerArr;
export const getSymbolDepthState = (state: SocketsState) => state.symbolDepth;
export const getSymbolTicketState = (state: SocketsState) => state.symbolTicket;
export const getBuyState = (state: TradeState) => state.buy;
export const getSellState = (state: TradeState) => state.sell;
export const getPrivateKeysState = (state: KeysState) => state.private;
export const getPublicKeysState = (state: KeysState) => state.public;

export const getPlatformStatistic = createSelector(
    getPlatformState,
    platform.getStatistics
);

export const getSocketMiniTracker = createSelector(
    getSocketState,
    socket.getMiniTrackerArrSocket
);

export const getMarketTicketsSelector = createSelector(
    getSocketsState,
    getMarketTicketsState
);

export const getSymbolTradeSelector = createSelector(
    getSocketsState,
    getSymbolTradeState
);

export const getSymbolMiniTickerSelector = createSelector(
    getSocketsState,
    getSymbolMiniTickerState
);

export const getTrackerArrSelector = createSelector(
    getSocketsState,
    getTrackerArrState
);

export const getSymbolDepthSelector = createSelector(
    getSocketsState,
    getSymbolDepthState
);

export const getSymbolTicketSelector = createSelector(
    getSocketsState,
    getSymbolTicketState
);

export const getBuyTradeSelector = createSelector(
    getTradeState,
    getBuyState
);

export const getSellTradeSelector = createSelector(
    getTradeState,
    getSellState
);

export const getPrivateKeySelector = createSelector(
    getKeysState,
    getPrivateKeysState
);

export const getPublicKeySelector = createSelector(
    getKeysState,
    getPublicKeysState
);
