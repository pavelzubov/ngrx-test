import { SymbolTradeActions, TradeActionTypes } from './symbol-trade.actions';

export const initialState: any = null;

export function symbolTradeReducer(state = initialState, action: SymbolTradeActions): any {
    switch (action.type) {
        case TradeActionTypes.GetSymbolTradeSocketSuccess:
            return action.payload;
        default:
            return state;
    }
}
