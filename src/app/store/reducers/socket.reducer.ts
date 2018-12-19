export interface SocketState {
    miniTrackerArrSocket?: any;
}

export const initialState: SocketState = {
    miniTrackerArrSocket: {}
};

export function socketReducer(state = initialState, action: any): SocketState {
    switch (action.type) {
        /*case TickerActionTypes.GetMiniTrackerArrSocketSuccess:
            return { ...state, miniTrackerArrSocket: action.payload };*/
        /*case TickerActionTypes.GetAllMarketTicketsSocketSuccess:
            return { ...state, allMarketTickets: action.payload };
        case TickerActionTypes.GetSymbolMiniTickerSocketSuccess:
            return { ...state, symbolMiniTicker: action.payload };*/
        default:
            return state;
    }
}

export const getMiniTrackerArrSocket = (state: SocketState) => state.miniTrackerArrSocket;
// export const getAllMarketTicketsSocket = (state: SocketState) => state.allMarketTickets;
