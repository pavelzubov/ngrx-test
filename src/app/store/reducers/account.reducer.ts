import { AccountActionTypes } from '../actions/account.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionTypes } from '../actions/socket.actions';
import { DATA_STATUSES } from '../../constants';

export interface DataState<T> {
    data: T;
    status: DATA_STATUSES;
}

export interface AccountState {
    accountInformation: DataState<AccountInformation>;
    openOrders?: DataState<Order[]>;
    allOrders?: Order[];
    error?: any;
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
    accountInformation: { status: null, data: { balances: null } },
    openOrders: { status: null, data: null },
    allOrders: null,
    error: null
};

export function accountReducer(state = initialState, action: any): AccountState {
    switch (action.type) {
        case AccountActionTypes.GetAccountInformationRequest:
            return {
                ...state,
                accountInformation: {
                    ...state.accountInformation,
                    status: DATA_STATUSES.PENDING
                }
            };
        case AccountActionTypes.GetAccountInformationSuccess:
            return {
                error: undefined,
                ...state,
                accountInformation: {
                    data: action.payload,
                    status: DATA_STATUSES.SUCCESS
                }
            };
        case AccountActionTypes.GetAccountInformationFail:
            return {
                accountInformation: { status: DATA_STATUSES.FAIL },
                ...state,
                error: action.payload
            };
        case ActionTypes.GetUserDataStreamSuccess:
            return { ...state, accountInformation: action.payload };
        case ActionTypes.GetUserDataStreamFail:
            return { ...state, error: action.payload };
        case AccountActionTypes.GetOpenOrdersRequest:
            return {
                ...state,
                openOrders: { ...state.openOrders, status: DATA_STATUSES.PENDING }
            };
        case AccountActionTypes.GetOpenOrdersSuccess:
            return {
                ...state,
                openOrders: { data: action.payload, status: DATA_STATUSES.SUCCESS }
            };
        case AccountActionTypes.GetOpenOrdersFail:
            return {
                ...state,
                openOrders: { ...state.openOrders, status: DATA_STATUSES.FAIL }
            };
        case AccountActionTypes.GetAllOrdersSuccess:
            return { error: undefined, ...state, allOrders: action.payload };
        case AccountActionTypes.GetAllOrdersFail:
            return { allOrders: undefined, ...state, error: action.payload };
        default:
            return state;
    }
}

export const getAccountState = createFeatureSelector<AccountState>('account');
export const getAccountInformationDataState = (state: AccountState) =>
    state.accountInformation.data;
export const getAccountInformationStatusState = (state: AccountState) =>
    state.accountInformation.status;
export const getAccountBalanceState = (state: AccountInformation) => state.balances;
export const getAccountInformationDataSelector = createSelector(
    getAccountState,
    getAccountInformationDataState
);
export const getAccountInformationStatusSelector = createSelector(
    getAccountState,
    getAccountInformationStatusState
);
export const getAccountBalancesSelector = createSelector(
    getAccountInformationDataSelector,
    getAccountBalanceState
);

export const getOpenOrdersDataState = (state: AccountState) => state.openOrders.data;
export const getOpenOrdersStatusState = (state: AccountState) => state.openOrders.status;
export const getAllOrdersState = (state: AccountState) => state.allOrders;
export const getOpenOrdersDataSelector = createSelector(
    getAccountState,
    getOpenOrdersDataState
);
export const getOpenOrdersStatusSelector = createSelector(
    getAccountState,
    getOpenOrdersStatusState
);
export const getAllOrdersSelector = createSelector(
    getAccountState,
    getAllOrdersState
);
