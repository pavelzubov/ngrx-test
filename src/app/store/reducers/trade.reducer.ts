import { TradeActionTypes } from '../actions/trade.actions';
import { ORDER_STATUSES } from '../../constants';
export const PENDING = 'PENDING';
export const FAIL = 'FAIL';
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
            return { ...state, buy: { status: ORDER_STATUSES.PENDING } };
        case TradeActionTypes.BuySuccess:
            return { ...state, buy: { status: action.payload.status } };
        case TradeActionTypes.BuyFail:
            return { ...state, buy: { status: ORDER_STATUSES.FAIL } };
        case TradeActionTypes.SellRequest:
            return { ...state, sell: { status: ORDER_STATUSES.PENDING } };
        case TradeActionTypes.SellSuccess:
            return { ...state, sell: { status: action.payload.status } };
        case TradeActionTypes.SellFail:
            return { ...state, sell: { status: ORDER_STATUSES.FAIL } };
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
