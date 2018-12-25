import { TradeActionTypes } from '../actions/trade.actions';
export const PENDING = 'PENDING';
export interface TradeState {
    buy?: any;
    sell?: any;
}

export const initialState: TradeState = {
    buy: { status: null },
    sell: { status: null }
};

export function tradeReducer(state = initialState, action: any): TradeState {
    switch (action.type) {
        case TradeActionTypes.BuyRequest:
            return { ...state, buy: { status: PENDING } };
        case TradeActionTypes.BuySuccess:
            return { ...state, buy: { status: action.payload } };
        case TradeActionTypes.SellRequest:
            return { ...state, sell: { status: PENDING } };
        case TradeActionTypes.SellSuccess:
            return { ...state, sell: { status: action.payload } };
        /*case TickerActionTypes.GetAllMarketTicketsSocketSuccess:
            return { ...state, allMarketTickets: action.payload };
        case TickerActionTypes.GetSymbolMiniTickerSocketSuccess:
            return { ...state, symbolMiniTicker: action.payload };*/
        default:
            return state;
    }
}

// export const getMiniTrackerArrSocket = (state: TradeState) => state.miniTrackerArrSocket;
// export const getAllMarketTicketsSocket = (state: SocketState) => state.allMarketTickets;
