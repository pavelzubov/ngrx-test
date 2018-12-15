import {SocketActions, ActionTypes} from '../actions/socket.actions';

export interface SocketState {
    miniTrackerArrSocket?: any;
    allMarketTickets?: any;
    symbolTrade?: any;
    symbolTicket?: any;
    symbolMiniTicker?: any;
}

export const initialState: SocketState = {
    miniTrackerArrSocket: {},
    allMarketTickets: {},
    symbolTrade: {},
    symbolTicket: {},
    symbolMiniTicker: {}
};

export function socketReducer(state = initialState, action: SocketActions): SocketState {
    switch (action.type) {
        case ActionTypes.GetMiniTrackerArrSocketSuccess:
            return {...state, miniTrackerArrSocket: action.payload};
        case ActionTypes.GetAllMarketTicketsSocketSuccess:
            return {...state, allMarketTickets: action.payload};
        case ActionTypes.GetSymbolTradeSocketSuccess:
            return {...state, symbolTrade: action.payload};
        case ActionTypes.GetSymbolTicketSocketSuccess:
            return {...state, symbolTicket: action.payload};
        case ActionTypes.GetSymbolMiniTickerSocketSuccess:
            return {...state, symbolMiniTicker: action.payload};
        default:
            return state;
    }
}

export const getMiniTrackerArrSocket = (state: SocketState) => state.miniTrackerArrSocket;
export const getAllMarketTicketsSocket = (state: SocketState) => state.allMarketTickets;
export const getSymbolTradeSocket = (state: SocketState) => state.symbolTrade;
export const getSymbolTicketSocket = (state: SocketState) => state.symbolTicket;
export const getSymbolMiniTickerSocket = (state: SocketState) => state.symbolMiniTicker;
