import { SocketActions, ActionTypes } from '../actions/socket.actions';

export interface SocketState {
    miniTrackerArrSocket?: any;
    allMarketTickets?: any;
    symbolMiniTicker?: any;
}

export const initialState: SocketState = {
    miniTrackerArrSocket: {},
    allMarketTickets: {},
    symbolMiniTicker: {}
};

export function socketReducer(state = initialState, action: SocketActions): SocketState {
    switch (action.type) {
        case ActionTypes.GetMiniTrackerArrSocketSuccess:
            return { ...state, miniTrackerArrSocket: action.payload };
        case ActionTypes.GetAllMarketTicketsSocketSuccess:
            return { ...state, allMarketTickets: action.payload };
        case ActionTypes.GetSymbolMiniTickerSocketSuccess:
            return { ...state, symbolMiniTicker: action.payload };
        default:
            return state;
    }
}

export const getMiniTrackerArrSocket = (state: SocketState) => state.miniTrackerArrSocket;
export const getAllMarketTicketsSocket = (state: SocketState) => state.allMarketTickets;
export const getSymbolMiniTickerSocket = (state: SocketState) => state.symbolMiniTicker;
