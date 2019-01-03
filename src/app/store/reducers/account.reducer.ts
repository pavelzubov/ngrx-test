import { AccountActionTypes } from '../actions/account.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionTypes } from '../actions/socket.actions';

export interface AccountState {
    accountInformation: AccountInformation;
    openOrders?: Order[];
    allOrders?: Order[];
    error: any;
}

export interface Order {
    symbol: string;
    orderId: number;
    clientOrderId: string;
    c?: string;
    price: string;
    origQty: string;
    executedQty: string;
    cummulativeQuoteQty: string;
    status: string;
    timeInForce: string;
    type: string;
    side: string;
    stopPrice: string;
    icebergQty: string;
    time: number;
    updateTime: number;
    isWorking: boolean;
}

export interface AccountInformation {
    makerCommission?: number;
    takerCommission?: number;
    buyerCommission?: number;
    sellerCommission?: number;
    canTrade?: boolean;
    canWithdraw?: boolean;
    canDeposit?: boolean;
    updateTime?: number;
    balances: AccountBalance[];
    b?: AccountBalance[];
}

export interface AccountBalance {
    asset: string;
    a?: string;
    free: string;
    f?: string;
    locked: string;
}

export const initialState: AccountState = {
    accountInformation: { balances: null },
    openOrders: null,
    allOrders: null,
    error: null
};

export function accountReducer(state = initialState, action: any): AccountState {
    switch (action.type) {
        case AccountActionTypes.GetAccountInformationSuccess:
            return { error: undefined, ...state, accountInformation: action.payload };
        case AccountActionTypes.GetAccountInformationFail:
            return { accountInformation: undefined, ...state, error: action.payload };
        case ActionTypes.GetUserDataStreamSuccess:
            return { ...state, accountInformation: action.payload };
        case ActionTypes.GetUserDataStreamFail:
            return { ...state, error: action.payload };
        case AccountActionTypes.GetOpenOrdersSuccess:
            return { error: undefined, ...state, openOrders: action.payload };
        case AccountActionTypes.GetOpenOrdersFail:
            return { openOrders: undefined, ...state, error: action.payload };
        case AccountActionTypes.GetAllOrdersSuccess:
            return { error: undefined, ...state, allOrders: action.payload };
        case AccountActionTypes.GetAllOrdersFail:
            return { allOrders: undefined, ...state, error: action.payload };
        default:
            return state;
    }
}

export const getAccountState = createFeatureSelector<AccountState>('account');
export const getAccountInformationState = (state: AccountState) =>
    state.accountInformation;
export const getAccountBalanceState = (state: AccountInformation) => state.balances;
export const getAccountInformationSelector = createSelector(
    getAccountState,
    getAccountInformationState
);
export const getAccountBalancesSelector = createSelector(
    getAccountInformationSelector,
    getAccountBalanceState
);

export const getOpenOrdersState = (state: AccountState) => state.openOrders;
export const getAllOrdersState = (state: AccountState) => state.allOrders;
export const getOpenOrdersSelector = createSelector(
    getAccountState,
    getOpenOrdersState
);
export const getAllOrdersSelector = createSelector(
    getAccountState,
    getAllOrdersState
);
